import React, { useState } from 'react'
import { executeCode } from '../api/api';
import type { Socket } from 'socket.io-client';

const Sidebar = ({
  roomId,
  users,
  language,
  setLanguage,
  socket,
  setJoined,
  setRoomId,
  setUserName,
  setCode,
  code,
  setOutput,
  setOutputState,
  setError,
}: {
  roomId: string;
  users: string[];
  language: string;
  socket: Socket;
  setLanguage: any;
  setJoined: any;
  setRoomId: any;
  setUserName: any;
  setCode: any;
  code: string;
  setOutput: any;
  setOutputState: any;
  setError: any
}) => {
  const [copySuccess, setCopySuccess] = useState("");

  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId);
    setCopySuccess("Copied!");
    setTimeout(() => setCopySuccess(""), 2000);
  };

  const handleLanguageChange = (e: any) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
    socket.emit("languageChange", { roomId, language: newLanguage });
  };

  const leaveRoom = () => {
    socket.emit("leaveRoom");
    setJoined(false);
    setRoomId("");
    setUserName("");
    setCode("// start code here");
    setLanguage("javascript");
  };

  const runCode = async () => {
    if (!code) return;
    try {
      setError("")
      const response = await executeCode(language, code);
      console.log(response.run.stdout);
      if(response.run.stderr) {
        setError(response.run.stderr)
      }
      setOutput(response.run.stdout);
      setOutputState(true)
    } catch (error) {}
  };

  return (
    <div className="w-60 bg-white border-r border-gray-200 p-6 flex flex-col">
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
              {
                //@ts-ignore
                user.slice(0, 8)
              }
              ...
            </li>
          ))}
        </ul>
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
      <button
        className="mt-1 w-full bg-red-600 text-white py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
        onClick={runCode}
      >
        Run Code
      </button>
    </div>
  );
};

export default Sidebar