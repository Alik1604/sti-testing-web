import React from "react";
import back from "../../img/back.png";
import banane from "../../img/banane.png";
import spotify from "../../img/spotify.png";
import tt from "../../img/TT.png";
import tikTok from "../../img/tik-tok.png";
type Props = {};

function SocialScreen({}: Props) {
  return (
    <div className="flex flex-col md:flex-row md:h-[790px] w-full overflow-hidden">
      <div className="md:w-[50%] flex flex-col justify-center items-center p-[5%] md:p-0">
        <img
          src={banane}
          className="w-[300px] h-[204px] md:w-[530px] md:h-[361px]"
        />
        <div className="self-start w-[100%] pl-[10%] ">
          <img
            src={spotify}
            className="w-[44px] h-[44px] md:w-[85px] md:h-[85px]"
            alt=""
          />
          <strong className="text-[38px] md:text-[70px] w-[20px]">
            {"Better Safe"}
          </strong>
          <p>
            <strong className="text-[38px] md:text-[70px] w-[20px]">
              than Horny
            </strong>
          </p>
          <div>With Carly and Josh</div>
        </div>
      </div>

      <div className="flex md:w-[50%] flex-col justify-between overflow-hidden ">
        <img src={back} className="md:w-[50%] h-[100%] absolute z-[-99]" />
        <div className="self-center pt-[5%]">
          <img src={tikTok} alt="" />
        </div>
        <div className="self-center text-white text-[40px] md:text-[52px] ">
          Watch us on Tiktok
        </div>
        <div className="flex self-center h-[60%] justify-center items-end w-[80%] md:w-full md:h-[780px] mt-[5%] md:mt-0">
          <img src={tt} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SocialScreen;
