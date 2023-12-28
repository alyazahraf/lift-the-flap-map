import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";

const AnswerPT = () => {
  return (
    <div className="py-10 px-28">
      <div className="container-test py-7">
        <h1>Post-Test</h1>
        <div className="bg-button-gray rounded-4xl py-28 px-8">
          <h1>Lorem Ipsum</h1>
        </div>
        <a href="/question-posttest">
          <ButtonPrimary />
        </a>
      </div>
    </div>
  );
};

export default AnswerPT;
