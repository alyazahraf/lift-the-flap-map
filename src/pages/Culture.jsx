import React from "react";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";

const Culture = () => {
  return (
    <div className="container-1">
      <div className="p-8 gap-6 flex flex-col">
        <h1>Provinsi Lorem</h1>
        <div className="flex flex-row gap-14 ">
          <div>
            <div>
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/5c239685ecbea2c12fcb8ee661a04d0a9098e141.jpeg?region=0,0,600,600"
                width="300px"
                height="60px"
                className="rounded-tl-lg rounded-tr-lg"
              />
              <a href="/food">
                <div className="button-culture">
                  <label className="title-profile text-white">Makanan</label>
                  <div>
                    <FaAnglesRight className="text-white text-3xl" />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/5c239685ecbea2c12fcb8ee661a04d0a9098e141.jpeg?region=0,0,600,600"
                width="300px"
                height="600px"
                className="rounded-tl-lg rounded-tr-lg"
              />
              <a href="/house">
                <div className="button-culture flex flex-row">
                  <label className="title-profile text-white">Rumah Adat</label>
                  <FaAnglesLeft className="text-white text-3xl" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Culture;
