import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import { FaQuestion } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="pt-7 pb-20 px-9">
      <div className="flex flex-end justify-end">
        <button className="text-5xl font-bold px-3 py-3 bg-gray rounded-full">
          <FaQuestion className="text-4xl " />
        </button>
      </div>
      <div className="px-20">
        <div className="container-2 py-28 px-16">
          <h1>Profil</h1>
          <div>
            <div className="flex flex-row gap-40 items-center justify-center">
              <div className="flex flex-row">
                <label className="text-5xl font-bold -rotate-90 flex flex-row items-end">
                  MAHASISWA
                </label>
                <div>
                  <img
                    src="https://lumiere-a.akamaihd.net/v1/images/5c239685ecbea2c12fcb8ee661a04d0a9098e141.jpeg?region=0,0,600,600"
                    width="327px"
                    height="386px"
                  />
                  <div className="flex flex-col">
                    <label className="text-3xl">Nama : Lorem</label>
                    <label className="text-xl">Usia: 90</label>
                    <label className="text-xl">Alamat: Lorem</label>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <label className="title-profile">DOSEN</label>
                <div>
                  <img
                    src="https://i.pinimg.com/736x/d6/a3/df/d6a3df974f4e15cf77d889e94ace5133.jpg"
                    width="327px"
                    height="386px"
                  />
                  <div className="flex flex-col">
                    <label className="text-3xl">Nama : Lorem</label>
                    <label className="text-xl">Usia: 90</label>
                    <label className="text-xl">Alamat: Lorem</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="/island">
            <ButtonPrimary />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Profile;
