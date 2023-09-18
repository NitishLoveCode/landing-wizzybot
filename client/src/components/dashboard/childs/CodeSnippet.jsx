import React from 'react';

export default function CodeSnippet() {
  const codeString = `<script\n\tsrc="https://app.livechatai.com/embed.js"\n\tdata-id="clmbvu6kc0001l20f97fmho7y"\n\tasync defer>\n</script>`;
  
  const handleCopyClick = () => {
    navigator.clipboard.writeText(codeString.replace(/\n\t/g, '\n    '));
  };

  return (
    <div className="w-[95vw] sm:w-[60vw] flex justify-start flex-col px-2 sm:px-10 rounded-md h-[30vh] bg-black">
      <h3 className="text-white mt-4">
        <code className="text-white">
          {
            codeString
              .split('\n')
              .map((line, i) => 
                <span key={i}>
                  {line.replace('\t', '    ')}
                  <br />
                </span>
              )
          }
        </code>
      </h3>
      <div className='flex active:scale-95 justify-end'>
      <button onClick={handleCopyClick} className=" bg-blue-500 text-white rounded px-4">
        Copy
      </button>
      </div>
      
    </div>
  );
}
