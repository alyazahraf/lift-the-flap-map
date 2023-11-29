import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";

const Culture = () => {
  return (
    <div className="container-1">
      <div className="p-8 gap-6 flex flex-col">
        <h1>Provinsi</h1>
        <div className="flex flex-row justify-around">
          <div>
            <div>
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/5c239685ecbea2c12fcb8ee661a04d0a9098e141.jpeg?region=0,0,600,600"
                width="500px"
                height="60px"
                className="rounded-tl-lg rounded-tr-lg"
              />
              <div className="button-culture flex flex-row">
                <label className="title-profile text-white">Makanan</label>
                <FaAnglesRight className="text-white text-5xl" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/5c239685ecbea2c12fcb8ee661a04d0a9098e141.jpeg?region=0,0,600,600"
                width="500px"
                height="600px"
                className="rounded-tl-lg rounded-tr-lg"
              />
              <div className="button-culture flex flex-row">
                <label className="title-profile text-white">Rumah Adat</label>
                <FaAnglesLeft className="text-white text-5xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Culture;
