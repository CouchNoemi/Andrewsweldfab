import React from "react";

const data = ["Home", "Services", "Projects", "Contact"];

function Header() {
  return (
    <div className="bg-gray-500 text-white">
      <div className="bg-[#333] p-4 text-center space-y-4">
        <h1 className="font-bold text-2xl">Andrews Weld Fab</h1>
        <p className="text-sm">Precision Metal Fabrication & Machining</p>
      </div>
      <div className="bg-[#444] flex items-center justify-center gap-4">
        {data.map((l, i) => (
          <a key={i} href="#" className="hover:bg-[#5f5f5f] p-2 outline-none">
            {l}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header;
