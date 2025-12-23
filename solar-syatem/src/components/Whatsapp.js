import React from "react";

const Whatsapp =()=>{
    return (
        <div className="fixed bottom-5 right-5 w-24 bg-green-500 rounded-3xl p-3 flex hover:scale-110
        transition-transform duration-300">
          <img className="w-7 h-7 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            
          />
          <span className="p-1 text-white cursor-pointer">chat</span>
      </div>
    );
}

export default Whatsapp