import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import { FaQuestion } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="py-7 px-9">
      <div className="px-6 py-2 bg-gray w-max rounded-full flex items-end justify-end">
        <FaQuestion className="text-4xl" />
      </div>
      <div className="container-2 py-28 px-16">
        <h1>Profil</h1>
        <div>
          <div className="flex flex-row gap-40 items-center justify-center">
            <div>
              <label className="title-profile">MAHASISWA</label>
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
            <div>
              <label className="title-profile">DOSEN</label>
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
        <a href="/island">
          <ButtonPrimary />
        </a>
      </div>
    </div>
  );
};
export default Profile;
