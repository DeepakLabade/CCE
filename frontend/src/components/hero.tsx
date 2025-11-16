import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate()

  return (
    <div>
      <div className="flex pl-40 pt-20 overflow-hidden">
        <div className="">
          <div className="flex flex-col text-8xl  font-medium leading-24 ">
            <span>Code</span>
            <span>Compile</span>
            <span>Collaborate</span>
          </div>
          <div className="mt-12">
            <p className="w-xs leading-8 text-xl text-neutral-700 font-li">
              {" "}
              Code collaboratively with people. <br />
              Compile and execute your code. <br />
              4+ languages supported.
            </p>
          </div>
          <div className="flex items-center gap-4 pt-10">
            <button className="bg-blue-600 text-xl  px-13 py-5 text-neutral-100 cursor-pointer"
              onClick={() => {
                navigate('/editor')
            }}
            >
              Start Collaboration
            </button>
            <p className="text-neutral-600 text-xl ">It's Free</p>
          </div>
        </div>
        <div className="">
          <div className="bg-neutral-800 w-full h-120 rounded-tl-4xl ml-50">
            <img
              src="/collab-ide-ss.png"
              className="pt-10 pl-10 w-170"
              alt=""
            />
          </div>
          <div className="bg-neutral-200 flex justify-center w-full h-5 ml-30">
            <div className="bg-neutral-400 w-30 h-3 rounded-b-lg"></div>
          </div>
          <div className="bg-neutral-400 w-full h-2 ml-30 rounded-bl-full"></div>
        </div>
      </div>

      <div className="flex pl-40 gap-6 mx-auto pt-10 overflow-hidden bg-neutral-100 mt-14 pb-20">
        <div className="bg-white p-8 flex flex-col gap-6">
          <p className="text-2xl font-normal">Interview Candidates</p>
          <p className="w-80 text-lg text-neutral-500 leading-6.6 ">
            Present the candidate with a problem and observe how they code for
            it in real time. Execute code to check for correctness.
          </p>
        </div>
        <div className="bg-white p-8 flex flex-col gap-6">
          <p className="text-2xl font-normal">Code With Peers</p>
          <p className="w-80 text-lg text-neutral-500 leading-6.6 ">
            Collaboration in the new remote world doesn't have to be a pain.
            Pair program with your teammates and debug issues together.
          </p>
        </div>
        <div className="bg-white p-8 flex flex-col gap-6">
          <p className="text-2xl font-normal">Teach Someone To Code</p>
          <p className="w-80 text-lg text-neutral-500 leading-6.6 ">
            Share document with your students so that you can work with them
            collaboratively and they learn by doing.
          </p>
        </div>
      </div>


      
    </div>
  );
};

export default Hero;
