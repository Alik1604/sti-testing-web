import React from "react";
import styles from "../../styles/ContactScreen.module.scss";
import ContactInput from "../ContactInput";
import love from "../../img/love.png";
import contact from "../../img/comment.png";
import like from "../../img/like.png";

type Props = {};

function ContactScreen({}: Props) {
  return (
    <div
      className={`h-[670px] w-full flex justify-center gap-[5%] md:gap-[5%] items-center  flex-col ${styles.screen}`}
    >
      <div className="flex w-full justify-center md:gap-[3%]">
        <img
          className="max-w-[100px] h-[90px] md:max-w-[130px] md:h-[120px] mt-[10%] md:mt-[2%]"
          src={love}
          alt=""
        />
        <img
          className="ml-4 w-[160px] h-[100px] md:max-w-[200px] md:h-[135px]"
          src={contact}
          alt=""
        />
        <img
          className="max-w-[115px] h-[117px] mt-[10%] md:mt-[2%]"
          src={like}
          alt=""
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="text-[38px] md:text-[60px] text-[#F68D2E]">
          Join the Waitlist
        </div>
        <strong
          className={`w-full text-center text-[26px] md:text-[48px] ${styles.text}`}
        >
          Your partner will appreciate you.
        </strong>
        <div className="text-center mt-4 w-[60%]">
          Sign up with your email address to receive news and updates.
        </div>
      </div>
      <ContactInput disabled={false}></ContactInput>
    </div>
  );
}

export default ContactScreen;
