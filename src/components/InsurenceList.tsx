import React from "react";
import blueCross from "../img/blue-cross.png";
import cigna from "../img/Cigna.png";
import UHC from "../img/unitedhealthcare.png";
import aetna from "../img/aetna.png";
import Button from "./Button";

type Props = {};

function InsurenceList({}: Props) {
  return (
    <div className="flex h-[250px] md:h-[150px] lg:h-[120px] flex-col md:flex-row items-center justify-between pb-[30px] md:pb-0 md:px-[5%]">
      <div className="flex w-[100%] md:py-2 md:w-[80%] md:gap-[10%] flex-wrap justify-center p-1">
        <img src={blueCross} alt="" />
        <img src={cigna} alt="" />
        <img src={UHC} alt="" />
        <img src={aetna} alt="" />
      </div>
      <Button
        disabled={false}
        buttonText="Check insurance"
        sorce={null}
        className="bg-[#F5CABF] px-[27px] z-2"
      ></Button>
    </div>
  );
}

export default InsurenceList;
