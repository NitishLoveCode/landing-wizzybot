import React from "react";
import { Link } from "react-router-dom";

export default function User_popup_info() {
  return (
    <>
      <div className="absolute z-50 shadow-xl gap-1 flex flex-col right-2 sm:right-10 top-12 sm:top-[67px] rounded-md w-[70vw] md:w-[20vw] sm:w-[17vw] h-fit border-2 bg-white">
        <div className="w-full h-12 border-b pl-2 cursor-pointer flex flex-col justify-start items-center">
          <h3>Signed in as</h3>
          <p>TechyWeb@gmail.com</p>
        </div>
        <Link to={"/profile/personal-information"}>
          <div className="w-full h-12 active:scale-95 border-b pl-2 cursor-pointer flex items-center hover:bg-gray-100">
            <h3>Nitish Kumar's Workspace</h3>
          </div>
        </Link>
        <Link to={"/profile/personal-information"}>
          <div className="w-full h-12 active:scale-95 border-b pl-2 cursor-pointer flex items-center hover:bg-gray-100">
            <h3>Your Profile</h3>
          </div>
        </Link>
        <Link to={"/profile/team"}>
          <div className="w-full h-12 active:scale-95 border-b pl-2 cursor-pointer flex items-center hover:bg-gray-100">
            <h3>Teammates</h3>
          </div>
        </Link>
        {/* ---------------Billing section------------------------ */}
        <div className="w-full h-12 active:scale-95 border-b pl-2 cursor-pointer flex items-center hover:bg-gray-100">
          <h3>Billing</h3>
        </div>
        <div className="w-full h-12 active:scale-95 pl-2 cursor-pointer flex items-center hover:bg-gray-100">
          <h3>Sing out</h3>
        </div>
      </div>
    </>
  );
}
