import React from "react";
import styles from "../../styles/SliderScreen.module.scss";
import drop from "../../img/Drop.png";
import appointment from "../../img/appointment.png";
import kit from "../../img/kit.png";
import results from "../../img/results.png";
import Button from "../Button";

type Props = {};

const SliderScreen = (props: Props) => {
  return (
    <div>
      <div
        className={`flex flex-col border-t-[1px] border-black h-[660px] w-[100%] ${styles.sectionItem} sticky top-[120px]`}
      >
        <div className="flex justify-center">
          <img src={drop} className="h-[54px] w-[160px] self-start"></img>
          <div className="mt-3 absolute">{"1/3"}</div>
        </div>
        <div className="flex  md:flex-row flex-col justify-center grow w-full gap-[10%] md:gap-[15%]">
          <div className="self-center p-[13px] md:p-0">
            <div className=" md:hidden text-[14px] my-[20px] text-[#FCFCF0]">
              Emphasize PrEP
            </div>
            <strong className="text-white md:mt-0 w-[495px] text-[36px] md:text-[48px] leading-none">
              {"Speak "}
              <p className={`${styles.text}`}>
                <p className="inline text-[#F5CABF]">to a doctor</p>
              </p>
            </strong>
            <p className="text-white md:w-[380px] mt-[5%] text-[18px]">
              Book a visit today and get in touch with a doctor through video.
              Our team will confirm you’re in-network to make things easier.
            </p>
          </div>
          <div className="flex w-[354px] h-[222px] md:w-[540px] md:h-[338px]  self-center">
            <img className="" src={appointment} />
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col border-t-[1px] border-black h-[660px] w-[100%] ${styles.sectionItem} sticky top-[120px]`}
      >
        <div className="flex justify-center">
          <img src={drop} className="h-[54px] w-[160px] self-start"></img>
          <div className="mt-3 absolute">{"2/3"}</div>
        </div>
        <div className="flex md:flex-row flex-col-reverse justify-between md:justify-center grow w-full md:gap-[10%]">
          <div className="flex w-[280px] h-[250px] md:w-[596px] md:h-[507px] md:self-end">
            <img className="" src={kit} />
          </div>
          <div className="self-center p-[13px] md:p-0">
            <strong className="text-white w-[450px] text-[36px] md:text-[48px] leading-none">
              {"Your kit "}
              <p className={`${styles.text} inline`}>
                <p className="inline text-[#F5CABF]">is mailed</p>
              </p>
            </strong>
            <p className="text-white md:w-[380px] mt-[5%] text-[18px]">
              After the appointment we'll mail you an STI kit to your home with
              easy steps to follow. If there are any additional questions
              needed, our medical team is here.
            </p>
            <Button
              disabled={false}
              sorce={null}
              buttonText="Get kit"
              className="mt-5 bg-[#F5CABF] px-[50px]"
            ></Button>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col overflow-hidden border-t-[1px] border-black h-[660px] w-[100%] ${styles.sectionItem} sticky top-[120px]`}
      >
        <div className="flex justify-center">
          <img src={drop} className="h-[54px] w-[160px] self-start"></img>
          <div className="mt-3 absolute">{"3/3"}</div>
        </div>
        <div className="flex md:flex-row flex-col justify-center grow w-full gap-[12%]">
          <div className="self-center p-[13px] md:p-0">
            <strong className="text-white w-[495px] text-[36px] md:text-[48px] leading-none">
              {"Get "}
              <div className={`${styles.text} inline`}>
                <div className="inline text-[#F5CABF]">results</div>
              </div>
            </strong>
            <div className="text-white md:w-[500px] mt-[5%] text-[18px]">
              Order a test online, collect your sample at home, and then return
              your sample to our lab. We’ll review it and send you results
              within 2-4 days. If positive, we’ll prescribe you a treatment plan
              to pickup at the nearest pharmacy.
            </div>
            <Button
              disabled={false}
              sorce={null}
              buttonText="Get started"
              className="mt-5 bg-[#8ABADD] px-[36px]"
            ></Button>
          </div>
          <div className="flex w-[280px] h-[300px] md:w-[546px] md:h-[634px]  self-center">
            <img className="" src={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderScreen;
