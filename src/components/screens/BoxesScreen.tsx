import React from "react";
import box1 from "../../img/box1.png";
import box2 from "../../img/box2.png";
import drop1 from "../../img/drop1.png";
import drop2 from "../../img/drop2.png";
import drop3 from "../../img/drop3.png";
import drop4 from "../../img/drop4.png";
import styles from "../../styles/BoxesScreen.module.scss";
import blood from "../../img/blood.png";
import urine from "../../img/urine.png";
import test1 from "../../img/test1.png";

type Props = {};

function BoxesScreen({}: Props) {
  return (
    <div className="h-[2000px] md:h-[1200px] w-full md:overflow-hidden bg-[#fcfcf0] grid grid-cols-1 md:grid-cols-2">
      <div className=" h-[500px] md:h-[600px] border  border-black flex justify-between items-center flex-col">
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
          <img
            className="relative left-[120px] bottom-[220px] md:left-[220px] md:bottom-[220px]"
            src={blood}
            alt=""
          />
          <img
            className="relative right-[140px] bottom-[300px] md:right-[170px] md:bottom-[320px]"
            src={urine}
            alt=""
          />
          <img
            className="relative left-[140px] bottom-[210px] md:left-[110px] md:bottom-[160px]"
            src={test1}
            alt=""
          />
        </div>
      </div>
      <div className="h-[500px] md:h-[600px] border-t-[1px] border-r-[1px] border-b-[1px] border-black flex justify-between items-center flex-col">
        <div className="flex justify-center">
          <img src={drop2} className="h-[54px] w-[160px] self-start"></img>
          <div
            className={`mt-1 absolute text-[16px] w-[80px] text-center ${styles.text}`}
          >
            {"Coming soon"}
          </div>
        </div>
        <div className="flex flex-col justify-start items-center grow pt-[4%]">
          <strong>
            <h1 className={`${styles.text2} text-[48px]`}>Full Panel Kit</h1>
          </strong>
          <div className="w-[80%] text-center mb-7">
            {
              "Hep B & C, Trich, Chlamydia, Gonorrhea, HIV, Syphillis, Gonadotropin, HSVII, HcG, and HPV"
            }
          </div>
          <img src={box2} alt="" />
          <img
            className="relative bottom-[250px] right-[140px] md:bottom-[250px] md:right-[250px] "
            src={test1}
            alt=""
          />
          <img
            className="relative bottom-[250px] left-[140px] md:bottom-[250px] md:left-[160px]"
            src={urine}
            alt=""
          />
          <img
            className="relative bottom-[250px] right-[140px] md:bottom-[200px] md:right-[100px]"
            src={blood}
            alt=""
          />
        </div>
      </div>

      <div className="h-[500px] md:h-[600px] flex border-l-[1px] border-b-[1px]  border-r-[1px] border-black justify-between items-center flex-col">
        <div className="flex justify-center">
          <img src={drop3} className="h-[54px] w-[160px] self-start"></img>
          <div
            className={`mt-1 absolute text-[16px] w-[80px] text-center ${styles.text}`}
          >
            {"Coming soon"}
          </div>
        </div>
        <div className="flex flex-col justify-start items-center grow pt-[4%]">
          <strong>
            <h1 className={`${styles.text2} text-[48px]`}>Common Two</h1>
          </strong>
          <div className="w-[80%] text-center mt-5 mb-10">
            {"Chlamydia & Gonorrhoea"}
          </div>
          <img src={box1} alt="" />
          <img
            className="relative  bottom-[250px] right-[140px] md:bottom-[150px] md:right-[180px]"
            src={blood}
            alt=""
          />
        </div>
      </div>
      <div className="h-[500px] md:h-[600px] overflow-hidden border-b-[1px] border-r-[1px] border-black flex justify-between items-center flex-col">
        <div className="flex justify-center">
          <img src={drop4} className="h-[54px] w-[160px] self-start"></img>
          <div
            className={`mt-1 absolute text-[16px] w-[80px] text-center ${styles.text}`}
          >
            {"Coming soon"}
          </div>
        </div>
        <div className="flex flex-col justify-start items-center grow pt-[4%]">
          <strong>
            <h1 className={`${styles.text2} text-[48px]`}>{"HIV & others"}</h1>
          </strong>
          <div className="w-[80%] text-center mt-5 mb-10">
            {"HIV 1&2, Hep B, & Liver function"}
          </div>
          <img src={box2} alt="" />
          <img
            className="relative bottom-[250px] right-[140px] md:bottom-[250px] md:right-[250px] "
            src={test1}
            alt=""
          />
          <img
            className="relative bottom-[250px] left-[140px] md:bottom-[250px] md:left-[160px]"
            src={urine}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default BoxesScreen;
