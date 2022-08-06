import React from "react";
import img from "../../img/mainBoy.png";
import styles from "../../styles/MainScreen.module.scss";
import Button from "../Button";

type Props = {};

const MainSreen = (props: Props) => {
  return (
    <div
      className={`flex flex-col md:flex-row sm:h-[700px] md:h-[1000px] lg:h-[671px] justify-between items-center ${styles.pagelayout}`}
    >
      <div className="flex flex-col items-center md:items-start md:pl-[7%] ">
        <div className="flex-col text-center md:text-left text-[44px] md:text-[65px] max-w-[520px] bold leading-tight">
          <div className=" md:hidden text-[14px] mt-[40px]">Emphasize PrEP</div>
          <strong className="mt-[20px] md:mt-0">
            {"Replace awkward lab visits with at-home"}{" "}
            <p className={`text-[#307FE2] inline  ${styles.text}`}>
              STI testing{" "}
            </p>{" "}
            {"and "}
            <p className={`text-[#F87C56] inline  ${styles.text}`}>treatment</p>
            {"."}
          </strong>
        </div>
        <Button
          disabled={false}
          buttonText="Get started"
          sorce={null}
          className="bg-[#8ABADD] px-[36px] z-2 mt-3 md:mt-7"
        ></Button>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default MainSreen;
