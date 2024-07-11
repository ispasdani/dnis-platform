import React from "react";

type IconModalProps = {
  label: string;
};

const IconModal = ({ label }: IconModalProps) => {
  return (
    <div className="hidden absolute left-2/4 -translate-x-2/4 -top-10 text-sm bg-neon-green px-4 group-hover/openShow:block transition-all ease-linear">
      <div className="relative">
        <p>{label}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          className="absolute -bottom-[13px] left-2/4 -translate-x-2/4 fill-neon-green"
        >
          <path d="M480-360 280-560h400L480-360Z" />
        </svg>
      </div>
    </div>
  );
};

export default IconModal;
