import React from "react";
import { FaAnglesLeft } from "react-icons/fa6";
// import { FaAnglesLeft } from "react-icons/fa6";

const Food = () => {
  return (
    <div className="container-1">
      <div className=" px-[8rem] gap-6 flex flex-col">
        <h1>Provinsi Lorem</h1>
        {/* <div> */}
        <div>
          <div className="container-culture ">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/5c239685ecbea2c12fcb8ee661a04d0a9098e141.jpeg?region=0,0,600,600"
              width="330px"
              height="70px"
              className="rounded-tl-3xl"
            />
            <div className="pt-8 gap-1">
              <label className="title-profile">Lorem Ipsum</label>
              <p className="pr-14 text-justify text-2xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi excepturi natus nisi repellendus beatae, voluptatibus
                pariatur quia a quos aliquam dolore autem vero, totam nemo error
                aperiam recusandae, maxime cum.
              </p>
            </div>
          </div>
          <div>
            <a href="/food">
              <div className="button-culture">
                <label className="title-profile text-white">Makanan</label>
                <div>
                  <FaAnglesLeft className="text-white text-5xl" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Food;
