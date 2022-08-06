import React from "react";
import woman from "../../img/Woman.png";
import Button from "../Button";
import styles from "../../styles/MainScreen.module.scss";

type Props = {};

const MissionScreen = (props: Props) => {
  return (
    <div className="md:h-[640px] bg-[#2D2A26] flex flex-col-reverse md:flex-row md:px-[5%] md:gap-[10%] justify-center">
      <div className="w-[309px] h-[373px] md:w-[477px] md:h-[577px] md:self-end self-center">
        <img src={woman} />
      </div>
      <div className="self-center p-[13px] md:p-0">
        <strong className="text-white w-[495px] text-[36px] md:text-[48px] leading-none">
          {"Our mission is simple:"}
          <p>to make healthcare</p>
          <p className={`${styles.text}`}>
            <p className="inline text-[#F87C56]">accessible,</p>{" "}
            <p className="inline text-[#F5CABF]">affordable,</p>
          </p>
          {"and "}
          <p className={`text-[#8ABADD] inline  ${styles.text}`}>
            easy to use.
          </p>
        </strong>
        <p className="text-white md:w-[513px] mt-[5%] text-[18px]">
          STI rates are hitting record numbers, yet testing is lacking. We want
          to fix this by providing a more discreet and convenient way of
          maintaining sexual health for you. The easier it is to access and
          learn about your health, the easier it is for you to take meaningful
          action, whenever you need it.
        </p>
        <Button
          disabled={false}
          sorce={null}
          buttonText="Get started"
          className="bg-[#ECB3CB] shadow-[4px_5.5px_0px_0px_rgba(255,255,255,1)] hover:shadow-[3px_4.5px_0px_0px_rgba(255,255,255,1)] mt-[20px] px-[36px]"
        ></Button>
      </div>
    </div>
  );
};

export default MissionScreen;
