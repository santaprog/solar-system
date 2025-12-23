import React from "react";

const Call =()=>{
    return(
        <div className="fixed bottom-24 right-5 w-14 bg-blue-500 rounded-3xl p-3 flex hover:animate-spin">
      <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            className="w-7 h-7"
          >
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2
              a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57
              a1 1 0 011 1v3.5a1 1 0 01-1 1
              C10.07 22 2 13.93 2 3.5
              a1 1 0 011-1H6.5a1 1 0 011 1
              c0 1.25.2 2.46.57 3.59
              a1 1 0 01-.25 1.01l-2.2 2.19z" />
          </svg>
      </div>
    );
}

export default Call;