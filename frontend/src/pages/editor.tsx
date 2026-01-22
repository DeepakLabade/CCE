import io from "socket.io-client";
import Editor from "@monaco-editor/react";
import Sidebar from "../components/sidebar";
import Output from "../components/output";

const socket = io(import.meta.env.VITE_SOCKET_URL);
import { useEffect, useState } from "react";

const EditorPage = () => {
  const [joined, setJoined] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("// start code here");
  const [users, setUsers] = useState([]);
  const [typing, setTyping] = useState("");
  const [output, setOutput] = useState("");
  const [outputState, setOutputState] = useState(false);
  const [error, setError] = useState<string>("");

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
    console.log(typing)
  };

  if (!joined) {
    return (

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-green-300"></div>
            <div className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-md text-xl font-bold">
              {"</>"}
            </div>
            <h1 className="text-5xl font-extrabold">
              Pair <span className="block text-gray-400">Programmer</span>
            </h1>
          </div>

          <p className="text-gray-400 text-xl max-w-xl font-light">
            Real-time collaborative coding environment. Join a room and start
            coding together.
          </p>

          <div className="flex gap-4 mt-6">
            <span className="px-2 py-1.5 border text-neutral-400 border-neutral-700 rounded-xl text-sm">
              Infinite Rooms
            </span>
            <span className="px-2 py-1.5 border text-neutral-400 border-neutral-700 rounded-xl text-sm">
              Lightning Fast
            </span>
          </div>

          <div className="mt-12 flex flex-col lg:flex-row gap-12">
            <div className="bg-[#111] p-8 rounded-xl shadow-xl w-full lg:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">Join Room</h2>
              <p className="text-gray-400 mb-6">
                Enter room details to start collaborating
              </p>

              <div className="flex flex-col gap-2">
                <div>
                  <label className="text-gray-300 text-sm block mb-2">
                    Room Name
                  </label>
                  <input
                    type="text"
                    placeholder="interview"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    className="w-full px-4 py-3 rounded-md bg-black border border-gray-700 outline-none focus:border-gray-500"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm block mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Sayali"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-4 py-3 rounded-md bg-black border border-gray-700 outline-none focus:border-gray-500"
                  />
                </div>
              </div>
              <button
                className="mt-6 w-full bg-white text-black py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-gray-200"
                onClick={joinRoom}
              >
                Join Room
              </button>
            </div>

            <div className="bg-[#0d1117] border absolute font-mono top-40 left-178 border-gray-800 rounded-xl p-6 w-full lg:w-1/2 shadow-2xl ">
            <div className="flex justify-between border-b border-neutral-600">

              <h3 className="text-gray-400 mb-4 font-mono">{`</> ${roomId.length > 0 ? roomId : 'room'}.js`}</h3>

              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

              <pre className="text-sm text-gray-300 leading-7">
                {`Room: ${roomId.length > 0 ? roomId : "waiting..."}
User: Anonymous

const room = ${roomId.length > 0 ? `"${roomId}"` : '"My-Room"'}
const user = ${userName.length > 0 ? `"${userName}"` : '"My-Name"'}

function startSession() {
  console.log(\`Connected to \${room}\`)
  Ready to code...
}`}
              </pre>

              <p className="text-g-reen-400 mt-6 text-sm">
                ● Enter details above
              </p>
            </div>
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
            width={outputState ? "149.6vh" : "186.6vh"}
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
};

export default EditorPage;