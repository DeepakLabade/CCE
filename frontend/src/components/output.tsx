import React from 'react'

const Output = ({
  output,
  outputState,
  setOutputState,
  error
}: {
  output: string;
  outputState: any;
    setOutputState: any;
    error: any;
}) => {
  return (
    <div>
      {outputState && (
        <div className="flex p-3 bg-[#1E1E1E] h-full w-64">
          <div className={`border w-full p-2 bg-neutral-800 text-neutral-200 rounded-sm ${error ? "border-red-500" : "border-neutral-500"}`}>
            <div className="flex justify-between items-center border-b pb-1 mb-1 border-neutral-500">
              <p style={{ whiteSpace: 'pre-wrap' }}>Output:</p>
              <Xicon setOutputState={setOutputState} />
            </div>
            <p>{output}</p>
            {error != "" && (<p className='text-red-500'>{error}</p>)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Output


export const Xicon = ({ setOutputState }: { setOutputState : any}) => {
  return (
    <svg
      onClick={() => {
        setOutputState(false);
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-x cursor-pointer"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};