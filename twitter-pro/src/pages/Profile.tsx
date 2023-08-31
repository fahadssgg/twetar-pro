import React from "react";

export default function Profile() {
  return (
    <div>
      <div className="flex justify-center gap-20 bg-black py-10">
        <img
          className="rounded-full w-52 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWIUTEbl3Km2gu10Jsib39To4S4IYsn8QhA&usqp=CAU"
        />
        <h1 className="font-bold text-2xl text-white mt-20">Name:</h1>
      </div>
    </div>
  );
}
