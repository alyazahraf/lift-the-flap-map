import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";

const Instruction = () => {
  return (
    <div className="container-1">
      <div className=" container-2 flex flex-col justify-around">
        <h1>Petunjuk</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          voluptatem reiciendis, laborum expedita natus nihil facilis quisquam
          velit voluptates eveniet quam libero deleniti odio accusantium beatae
          provident iste, itaque nemo.
        </h2>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          vel cumque asperiores laboriosam ut nihil expedita neque nobis
          distinctio reiciendis culpa, fuga aliquam id impedit voluptatibus
          magnam. Quas, magni debitis.
        </h2>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laborum
          dolorum ullam voluptatem laboriosam dolores in iusto similique harum
          quisquam cumque optio totam ducimus hic provident sed ad, commodi
          officiis?
        </h2>
        <a href="/profile">
          <ButtonPrimary />
        </a>
      </div>
    </div>
  );
};

export default Instruction;
