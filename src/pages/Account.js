import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src='https://assets.nflxext.com/ffe/siteui/vlv3/0678255b-ecfd-4775-999a-0680d539f07c/1969b84b-b0b7-4303-98f8-e280d4b922d7/RS-hr-20221128-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt="image"
        />

        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>

        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>

      <SavedShows />
    </>
  );
};

export default Account;