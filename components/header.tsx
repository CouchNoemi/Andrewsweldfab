"use client";
import React from "react";

const data = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

function Header() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href === "#" ? "body" : href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-500 text-white fixed w-full top-0 z-50">
      <div className="bg-[#333] p-4 text-center space-y-4">
        <h1 className="font-bold text-2xl">Andrews Weld Fab</h1>
        <p className="text-sm">Precision Metal Fabrication & Machining</p>
      </div>
      <div className="bg-[#444] flex items-center justify-center gap-4">
        {data.map((item, i) => (
          <a
            key={i}
            href={item.href}
            onClick={(e) => scrollToSection(e, item.href)}
            className="hover:bg-[#5f5f5f] p-2 outline-none"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header;
