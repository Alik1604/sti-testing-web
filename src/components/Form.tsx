import { isRegularExpressionLiteral } from "typescript";
import userIcon from "../img/userIcon.jpg";
import { useState } from "react";
import React from "react";
import Button from "./Button";
import cancel from "../img/cancel.png";

type FormData = {
  title: string;
  message: string;
  tags: string;
  image: FileList;
};

interface Props {
  makeFormInvisible: () => void;
}

const Form: React.FC<Props> = ({ makeFormInvisible }) => {
  const clearForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <form
      onClick={(e) => e.stopPropagation()}
      className="bg-[#FCFCF0] relative  w-[400px]  rounded-[10px] flex flex-col items-start gap-4 pl-[5%] p-10"
    >
      <img
        onClick={makeFormInvisible}
        className="self-end"
        src={cancel}
        alt=""
      />
      <strong>About</strong>
      <strong>How it works</strong>
      <strong>Blog</strong>
      <Button className="mt-4" disabled={false} sorce={userIcon}></Button>
    </form>
  );
};
export default Form;
