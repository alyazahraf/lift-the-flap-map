import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";

const AnswerPT = () => {
  return (
    <div className="container-1">
      <div className="container-test ">
        <h1>Post-Test</h1>
        <div className="bg-button-gray rounded-4xl py-60 px-40">
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
