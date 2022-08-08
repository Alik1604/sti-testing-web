import React from "react";

interface Props {
  disabled: boolean;
  onClick?: () => void;
  className?: string;
}
const ContactInput: React.FC<Props> = ({
  disabled,
  onClick,
  className = "",
}) => {
  return (
    <div className={`flex w-full justify-center ${className}`}>
      <input
        className="h-[60px] w-[50%] md:w-[250px] rounded-[10px_0px_0px_10px] border-t-[1px]  border-b-[1px] border-l-[1px] border-black"
        type="text"
      ></input>
      <div className=" flex justify-center items-center px-[15px] md:px-[38px] h-[60px] rounded-[0px_10px_10px_0px] bg-[#F5CABF] border border-black">
        <span>Subscribe</span>
      </div>
    </div>
  );
};

export default ContactInput;
