import React from "react";
import box1 from "../../img/box1.png";
import box2 from "../../img/box2.png";
import drop1 from "../../img/drop1.png";
import drop2 from "../../img/drop2.png";
import drop3 from "../../img/drop3.png";
import drop4 from "../../img/drop4.png";
import styles from "../../styles/BoxesScreen.module.scss";

type Props = {};

function BoxesScreen({}: Props) {
  return (
    <div className="h-[1200px] w-full bg-[#fcfcf0] grid grid-cols-2">
      <div className="h-[600px] border  border-black flex justify-between items-center flex-col">
        <div className="flex justify-center">
          <img src={drop1} className="h-[54px] w-[160px] self-start"></img>
          <div
            className={`mt-1 absolute text-[16px] w-[80px] text-center ${styles.text}`}
          >
            {"Coming soon"}
          </div>
        </div>
        <div className="flex flex-col justify-start items-center grow pt-[4%]">
          <strong>
            <h1 className={`${styles.text2} text-[48px]`}>PrEP Check</h1>
          </strong>
          <div className="w-[80%] text-center">
            {
              "HIV 1&2, Hep B & C,  Creatinine (kidney function), Syphilis, Chlamydia, Gonorrhoea"
            }
          </div>
          <div className="mb-6">{"Required quarterly with medication"}</div>
          <img src={box1} alt="" />
        </div>
      </div>
      <div className="h-[600px] border-t-[1px] border-r-[1px] border-b-[1px] border-black flex justify-between items-center flex-col">
        <div className="flex justify-center">
          <img src={drop2} className="h-[54px] w-[160px] self-start"></img>
          <div
            className={`mt-1 absolute text-[16px] w-[80px] text-center ${styles.text}`}
          >
            {"Coming soon"}
          </div>
        </div>
        <img src={box2} alt="" />
      </div>
      <div className="h-[600px] flex border-l-[1px] border-b-[1px]  border-r-[1px] border-black justify-between items-center flex-col">
        <div className="flex justify-center">
          <img src={drop3} className="h-[54px] w-[160px] self-start"></img>
          <div
            className={`mt-1 absolute text-[16px] w-[80px] text-center ${styles.text}`}
          >
            {"Coming soon"}
          </div>
        </div>
        <img src={box1} alt="" />
      </div>
      <div className="h-[600px]  border-b-[1px] border-r-[1px] border-black flex justify-between items-center flex-col">
        <div className="flex justify-center">
          <img src={drop4} className="h-[54px] w-[160px] self-start"></img>
          <div
            className={`mt-1 absolute text-[16px] w-[80px] text-center ${styles.text}`}
          >
            {"Coming soon"}
          </div>
        </div>
        <img src={box2} alt="" />
      </div>
    </div>
  );
}

export default BoxesScreen;
