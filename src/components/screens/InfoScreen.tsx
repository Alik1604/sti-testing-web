import React, { useEffect, useState } from "react";
import Button from "../Button";
import box from "../../img/box.png";
import ContactInput from "../ContactInput";

type Props = {};

function InfoScreen({}: Props) {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return width >= 800 ? (
    <div className="flex w-full justify-center items-center flex-col h-[400px] bg-[#2D2A26]">
      <div className="w-[90%] h-[60%] flex flex-row justify-center  lg:gap-[40%] px-[15%]">
        <div className="text-white flex flex-row gap-10 mt-[2%]">
          <div className=" flex flex-col gap-4">
            <div>About</div>
            <div>How it works</div>
            <div>Blog</div>
            <div>Contacts</div>
          </div>
          <div className="flex flex-col gap-4">
            <div>Privacy Policy</div>
            <div>Terms and Conditions</div>
          </div>
        </div>
        <div className="mt-[2%]">
          <strong className="text-white text-[22px]">Discover our Kits</strong>
          <Button
            buttonText="Get a Kit"
            disabled={false}
            className="mt-5 bg-[#8ABADD] px-[27px] gap-2 shadow-[4px_5.5px_0px_0px_rgba(255,255,255,1)] hover:shadow-[3px_4.5px_0px_0px_rgba(255,255,255,1)]"
            sorce={box}
          ></Button>
        </div>
      </div>
      <div className="h-[1px] w-[90%] bg-[#524C45]"></div>
      <div className="w-[90%] h-[30%] flex flex-row justify-between items-center">
        <div className="text-white tracking-[3px]">
          {"Podcast   /   TikTok    /    Instagram"}
        </div>
        <div className="text-[#6F6A63]">
          {"© 2021 Copyright,  All rights reserved"}
        </div>
        <ContactInput disabled={false} className="w-[25%]" />
      </div>
    </div>
  ) : (
    <div className="flex w-full justify-center items-center flex-col h-[400px] bg-[#2D2A26]">
      <div className=" h-[60%] w-full flex justify-end items-center  flex-col gap-[15%] pb-[5%]">
        <div className="text-white tracking-[3px]">
          {"Podcast   /   TikTok    /    Instagram"}
        </div>
        <ContactInput disabled={false} className="" />
      </div>
      <div className="h-[1px] w-[90%] bg-[#524C45]"></div>
      <div className="w-[90%] h-[30%] flex flex-col justify-center items-center gap-[20%]">
        <div className="text-white w-full flex justify-between px-[5%]">
          <div>Privacy Policy</div>
          <div>Terms and Conditions</div>
        </div>
        <div className="text-[#6F6A63]">
          {"© 2021 Copyright,  All rights reserved"}
        </div>
      </div>
    </div>
  );
}

export default InfoScreen;
