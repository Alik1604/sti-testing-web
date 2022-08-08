import React, { useEffect, useState } from "react";
import Button from "./Button";
import box from "../img/box.png";
import userIcon from "../img/userIcon.jpg";
import line from "../img/line.svg";
import Form from "./Form";

type Props = {};

export const NavBar: React.FC<Props> = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const [isFormShown, setIsFormShown] = useState(false);

  const makeFormVisible = () => {
    setIsFormShown(true);
  };

  const makeFormInvisible = () => {
    setIsFormShown(false);
  };

  useEffect(() => {
    if (isFormShown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isFormShown]);

  return width >= 700 ? (
    <div className="flex h-[82px] items-center justify-between px-[7%] pb-[6px] bg-[#fcfcf0]">
      <div className="flex gap-7">
        <h2 className="hover:-translate-y-1 p-[5px] duration-300 hover:ease-out cursor-pointer">
          About
        </h2>
        <h2 className="hover:-translate-y-1 p-[5px] duration-300 hover:ease-out cursor-pointer">
          How it works
        </h2>
        <h2 className="hover:-translate-y-1 p-[5px] duration-300 hover:ease-out cursor-pointer">
          Blog
        </h2>
        <h2 className="hover:-translate-y-1 p-[5px] duration-300 hover:ease-out cursor-pointer">
          Contacts
        </h2>
      </div>
      <div className="flex gap-[12px]">
        <Button
          disabled={false}
          buttonText={"Get a Kit"}
          sorce={box}
          className="gap-2 px-[27px]"
        ></Button>
        <Button disabled={false} sorce={userIcon}></Button>
      </div>
    </div>
  ) : (
    <>
      <div className="flex h-[82px] items-center justify-between px-[7%] pb-[6px] bg-[#fcfcf0]">
        <div
          className="flex justify-center items-center h-[54px] w-[54px] bg-[#F3F3E7] rounded-[10px] "
          onClick={makeFormVisible}
        >
          <div className="">
            <img src={line} alt="" className="h-[2px]" />
            <img src={line} alt="" className="mt-[5px] h-[2px]" />
            <img src={line} alt="" className="mt-[5px] h-[2px]" />
          </div>
        </div>
        <Button
          disabled={false}
          buttonText={"Get a Kit"}
          sorce={box}
          className="gap-2 px-[27px]"
        ></Button>
      </div>
      {isFormShown && (
        <div
          className="absolute top-0 left-0 w-full h-[100vh] flex items-center justify-center z-10 bg-black/60"
          onClick={makeFormInvisible}
        >
          <Form makeFormInvisible={makeFormInvisible} />
        </div>
      )}
    </>
  );
};
