"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const data = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
            setShowHeader(false); // scrolling down
          } else {
            setShowHeader(true); // scrolling up
          }
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to scroll to section after navigation
  const scrollToSection = (href: string) => {
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Handle navigation logic
  const handleNavClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: { name: string; href: string }
  ) => {
    e.preventDefault();
    if (item.name === "Home") {
      if (pathname !== "/") {
        router.push("/");
      } else {
        scrollToSection("/");
      }
    } else if (item.name === "Services" || item.name === "Projects") {
      if (pathname !== "/") {
        router.push("/");
        // Wait for navigation, then scroll
        setTimeout(() => scrollToSection(item.href), 400);
      } else {
        scrollToSection(item.href);
      }
    } else if (item.name === "Contact") {
      scrollToSection(item.href);
    }
  };

  return (
    <div
      className={`bg-gray-500 text-white fixed w-full top-0 z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-[#333] p-4 text-center space-y-4">
        <h1 className="font-bold text-2xl">Andrews Weld Fab</h1>
        <p className="text-sm">Precision Metal Fabrication & Machining</p>
      </div>
      <div className="bg-[#444] flex items-center justify-center gap-4">
        {data.map((item, i) => (
          <a
            key={i}
            href={item.href}
            onClick={(e) => handleNavClick(e, item)}
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
