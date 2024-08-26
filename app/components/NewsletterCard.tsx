"use client";
import React, { useState } from "react";
import Image from "next/image";

const NewsletterCard = () => {
  const [email, setEmail] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = () => {
    if (validateEmail(email)) {
      alert("You have subscribed to the newsletter");
      console.log(email);
    } else {
      alert("Please enter a valid email address");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full bg-white rounded-[4px] shadow-md h-auto md:h-[278px] overflow-hidden p-4 md:p-0 gap-4 mb-2">
      <div className="flex flex-col justify-center md:items-start md:gap-7 gap-12 md:ml-20 my-10 w-full h-full md:w-auto">
        <div className="flex flex-col justify-center items-start md:gap-6 gap-12 w-auto">
          <div className="flex flex-col justify-center items-start gap-3 w-auto h-auto">
            <p className="text-primary-blue font-medium leading-normal text-[18px] ml-2">
              Stay up to date
            </p>
            <h3 className="text-black text-[24px] md:text-[30px] font-bold leading-normal">
              Join Our Newsletter
            </h3>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 h-14 w-full">
            <input
              className="rounded-sm border-[1px] border-[#C9C9C9] p-4 flex-shrink-0 select-none w-full md:w-auto"
              placeholder="Enter your email.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="rounded-sm bg-primary-blue text-white flex-shrink-0 text-[18px] font-semibold leading-normal h-full w-full md:w-36 select-none hover:bg-blue-500"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <p className="text-[15px] font-normal leading-normal text-black">
          *You can unsubscribe anytime
        </p>
      </div>
      <Image
        src={"./group-circle.svg"}
        alt={"group-circle"}
        sizes="100vw"
        width={300}
        height={300}
        className="rounded-sm md:w-auto md:h-full md:block hidden"
      />
    </div>
  );
};

export default NewsletterCard;