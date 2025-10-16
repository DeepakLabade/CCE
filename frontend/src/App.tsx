import { useEffect, useState } from "react";
import "./App.css";
import io from "socket.io-client";
import Editor from "@monaco-editor/react";

const socket = io("http://localhost:5000");

const App = () => {
  const [joined, setJoined] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("// start code here");
  const [copySuccess, setCopySuccess] = useState("");
  const [users, setUsers] = useState([]);
  const [typing, setTyping] = useState("");

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

  const leaveRoom = () => {
    socket.emit("leaveRoom");
    setJoined(false);
    setRoomId("");
    setUserName("");
    setCode("// start code here");
    setLanguage("javascript");
  };

  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId);
    setCopySuccess("Copied!");
    setTimeout(() => setCopySuccess(""), 2000);
  };

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    socket.emit("codeChange", { roomId, code: newCode });
    socket.emit("typing", { roomId, userName });
  };

  const handleLanguageChange = (e: any) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
    socket.emit("languageChange", { roomId, language: newLanguage });
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
      <div className="w-80 bg-white border-r border-gray-200 p-6 flex flex-col">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Code Room: <span className="text-gray-700">{roomId}</span>
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={copyRoomId}
              className="px-3 py-1.5 text-sm bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Copy ID
            </button>
            {copySuccess && (
              <span className="text-sm text-green-600">{copySuccess}</span>
            )}
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Users in Room
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {users.map((user, index) => (
              <li
                key={index}
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-md"
              >
                
                { //@ts-ignore
                  user.slice(0, 8)}...
              </li>
            ))}
          </ul>
          {/* {typing && (
            <p className="text-xs text-gray-500 italic mt-3">{typing}</p>
          )} */}
        </div>

        <div className="mt-6">
          <select
            className="w-full border border-gray-200 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 transition-colors"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
          </select>
        </div>

        <button
          onClick={leaveRoom}
          className="mt-6 w-full bg-red-600 text-white py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
        >
          Leave Room
        </button>
      </div>

      <div className="flex-1">
        <Editor
          height="100vh"
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
  );
};

export default App;
