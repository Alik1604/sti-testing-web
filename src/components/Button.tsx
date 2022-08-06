import React from "react";

interface Props {
  disabled: boolean;
  onClick?: () => void;
  className?: string;
  buttonText?: string;
  sorce: string | null;
}
const Button: React.FC<Props> = ({
  disabled,
  onClick,
  buttonText,
  sorce = "",
  className = "",
}) => {
  return (
    <button
      disabled={disabled}
      className={`${className} flex rounded-[10px] p-[16px] border border-[#2D2A26] shadow-[4px_5.5px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_4.5px_0px_0px_rgba(0,0,0,1)] duration-300`}
      onClick={onClick}
    >
      {buttonText}
      {sorce != null ? <img src={sorce} alt="icon" /> : null}
    </button>
  );
};

export default Button;
