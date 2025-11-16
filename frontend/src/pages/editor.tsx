import io from "socket.io-client";
import Editor from "@monaco-editor/react";
import Sidebar from "../components/sidebar";
import Output from "../components/output";

const socket = io("http://localhost:5000");
import React, { useEffect, useState } from 'react'

const EditorPage = () => {
    const [joined, setJoined] = useState(false);
    const [roomId, setRoomId] = useState("");
    const [userName, setUserName] = useState("");
    const [language, setLanguage] = useState("javascript");
    const [code, setCode] = useState("// start code here");
    const [users, setUsers] = useState([]);
    const [typing, setTyping] = useState("");
    const [output, setOutput] = useState("");
    const [outputState, setOutputState] = useState(false)
    const [error, setError] = useState<string>("")
  
    useEffect(() => {
      socket.on("userJoined", (users) => {
        setUsers(users);
      });
  
      socket.on("codeUpdate", (newCode) => {
        setCode(newCode);
      });
  
      socket.on("userTyping", (user) => {
        setTyping(`${user.slice(0, 8)}... is Typing`);
        setTimeout(() => setTyping(""), 2000);
      });
  
      socket.on("languageUpdate", (newLanguage) => {
        setLanguage(newLanguage);
      });
  
      return () => {
        socket.off("userJoined");
        socket.off("codeUpdate");
        socket.off("userTyping");
        socket.off("languageUpdate");
      };
    }, []);
  
    useEffect(() => {
      const handleBeforeUnload = () => {
        socket.emit("leaveRoom");
      };
  
      window.addEventListener("beforeunload", handleBeforeUnload);
  
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }, []);
  
    const joinRoom = () => {
      if (roomId && userName) {
        socket.emit("join", { roomId, userName });
        setJoined(true);
      }
    };
  
    const handleCodeChange = (newCode: string) => {
      setCode(newCode);
      socket.emit("codeChange", { roomId, code: newCode });
      socket.emit("typing", { roomId, userName });
    };
  
    if (!joined) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="bg-white p-8 rounded-xl shadow-sm w-full max-w-md">
            <h1 className="text-2xl font-semibold mb-6 text-gray-900 text-center">
              Join Code Room
            </h1>
  
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Room Id"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 transition-colors placeholder-gray-400"
              />
  
              <input
                type="text"
                placeholder="Your Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 transition-colors placeholder-gray-400"
              />
  
              <button
                onClick={joinRoom}
                className="w-full bg-gray-900 text-white p-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
              >
                Join Room
              </button>
            </div>
          </div>
        </div>
      );
    }
  
    return (
      <div className="flex h-screen bg-gray-100">
        <Sidebar
          code={code}
          language={language}
          roomId={roomId}
          setCode={setCode}
          setJoined={setJoined}
          setLanguage={setLanguage}
          setOutput={setOutput}
          setRoomId={setRoomId}
          setUserName={setUserName}
          socket={socket}
          users={users}
          setOutputState={setOutputState}
          setError={setError}
        />
        <div className="">
          <div>
            <Editor
              height="100vh"
              width= {outputState ? "149.6vh" : "186.6vh"} 
              defaultLanguage={language}
              language={language}
              value={code}
              //@ts-ignore
              onChange={handleCodeChange}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
              }}
            />
          </div>
        </div>
        <Output
          output={output}
          outputState={outputState}
          setOutputState={setOutputState}
          error={error}
        />
      </div>
    );
}

export default EditorPage