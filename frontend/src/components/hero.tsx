import React from "react";

const Hero = () => {
  return (
    <div className="flex pl-40 pt-30 overflow-hidden">
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
          <button className="bg-blue-600 text-xl  px-13 py-5 text-neutral-100">
            Start Collaboration
          </button>
          <p className="text-neutral-600 text-xl ">It's Free</p>
        </div>
          </div>
          <div className="">
        <div className="bg-neutral-800 w-full h-120 rounded-tl-4xl ml-50">
          <img src="/collab-ide-ss.png" className="pt-10 pl-10 w-170" alt="" />
        </div>
          <div className="bg-neutral-200 flex justify-center w-full h-5 ml-30"> 
                  <div className="bg-neutral-400 w-30 h-3 rounded-b-lg">
                      
              </div>
              </div>
              <div className="bg-neutral-400 w-full h-2 ml-30 rounded-bl-full">
                  
              </div>
          </div>
        
    </div>
  );
};

export default Hero;
