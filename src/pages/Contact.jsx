import React from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <main className="w-full mb-16">
      <div className="w-11/12 mx-auto flex lg:flex-row md:flex-row flex-col justify-between">
        <div className="lg:w-[20%] md:w-[20%] w-full">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold mt-6 pb-5">Get in touch</h1>
            <p className="mt-4 text-sm">
              Do you have questions/complaints or you want to make inquiries?
              Kindly contact us via the available mediums below.
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold mt-6 pb-4">Headquarters</h1>
            <div className="flex gap-4">
              <BiHomeAlt2 size={30} />
              <span className="text-sm">20 University road, unilag</span>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold mt-6 pb-3">Phone</h1>
            <div className="flex gap-4">
              <AiOutlinePhone size={30} />
              <span className="text-sm">08122337738</span>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold mt-6 pb-3">Support</h1>
            <div className="flex gap-4">
              <MdOutlineMailOutline size={30} />
              <span className="text-sm">admin@thrivia.ng</span>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] md:w-[50%] w-full">
          <form className="bg-green-700 p-8 rounded-lg mt-8 mb-9">
            <h1 className="text-white text-xl">Send a message</h1>
            <div className="mt-6 flex flex-row flex-wrap gap-9 justify-between">
              <input
                type="text"
                className="rounded h-11 lg:w-[45%] md:w-[45%] w-full text-[#958080] pl-3"
                placeholder="First Name"
              />
              <input
                type="text"
                className="rounded h-11 lg:w-[45%] md:w-[45%] w-full text-[#958080] pl-3"
                placeholder="Last Name"
              />
              <input
                type="email"
                className="rounded h-11 lg:w-[45%] md:w-[45%] w-full text-[#958080] pl-3"
                placeholder="Email Address"
                required
              />
              <input
                type="text"
                className="rounded h-11 lg:w-[45%] md:w-[45%] w-full text-[#958080] pl-3"
                placeholder="Phone Number"
              />
            </div>
            <input
              type="text"
              className="rounded h-11 w-full text-[#958080] pl-3 mt-8"
              placeholder="Subject"
            />
            <textarea
              placeholder="How can we help?"
              className="rounded h-48 w-full text-[#958080] pl-3 pt-5 mt-8"
            ></textarea>

            <button
              className="p-3 rounded-xl w-56 bg-white text-black mx-auto block mt-9"
              onClick={(event) => {
                event.preventDefault();
                alert(
                  "This method is currently unavailable. Kindly send your message via email to admin@waste.ng. Thank you"
                );
              }}
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
export default Contact;
