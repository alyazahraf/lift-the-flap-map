import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import { FaQuestion } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="py-3 px-20">
      <div className="flex flex-end justify-end">
        <button className="px-3 py-3 bg-gray rounded-full">
          <FaQuestion className="text-2xl " />
        </button>
      </div>
      <div className="px-20">
        <div className="container-2 py-28 px-16 w-full">
          <h1>Profil</h1>
          <div>
            <div className="flex flex-row gap-40 items-center justify-center">
              <div class="flex flex-row items-center">
                <label class="text-4xl font-bold transform -rotate-90 w-[50px] mt-[6.8rem]">
                  MAHASISWA
                </label>
                <div class="flex flex-col ml-0">
                  <img
                    src="https://lumiere-a.akamaihd.net/v1/images/5c239685ecbea2c12fcb8ee661a04d0a9098e141.jpeg?region=0,0,600,600"
                    width="200px"
                    height="270px"
                  />
                  <div class="flex flex-col">
                    <label class="text-3xl">Nama : Lorem</label>
                    <label class="text-xl">Usia: 90</label>
                    <label class="text-xl">Alamat: Lorem</label>
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-center">
                <div className="text-4xl font-bold transform -rotate-90 w-[50px] mt-[-6.5rem]">
                  <label>DOSEN</label>
                </div>
                <div class="flex flex-col ml-0">
                  <img
                    src="https://i.pinimg.com/736x/d6/a3/df/d6a3df974f4e15cf77d889e94ace5133.jpg"
                    width="200px"
                    height="280px"
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
