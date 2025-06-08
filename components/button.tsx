import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

function Button({ children, className, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`rounded-sm border-none py-2 px-4 bg-[#ff6600] hover:bg-[#e65c00] text-white
        ${className}
        `}
    >
      {children}
    </button>
  );
}

export default Button;
