import React from "react";
import img from "../static/img_hero.png";
import { motion } from "framer-motion";
const LandingPortion = () => {
  return (
    <div className="flex container mx-auto justify-between items-center p-7 mt-4">
      <motion.div
        initial={{ x: -300 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2, type: "spring" }}
      >
        <h1 className="text-6xl w-[70%]">
          Enjoy your
          <p className="text-[#FF902B] inline m-0 p-0"> coffee </p>
          before your activity
        </h1>
        <h2 className="text-slate-600 mt-5">
          Boost your productivity and build your mood with a glass of coffee in
          the morning
        </h2>
        <div className="flex gap-1 mt-3">
          <button className="mr-2 w-32 bg-[#2f2105] text-white p-2 border border-[#2f2105] rounded-3xl hover:bg-transparent hover:text-[#2f2105] hover:scale-110 transition ease-in-out duration-500">
            Order Now
          </button>
          <button className="w-32 text-[#FF902B] p-2 rounded-3xl hover:bg-[#2f2105] hover:text-white transform hover:border-white ease-in-out duration-1000">
            More
          </button>
        </div>
      </motion.div>
      <motion.figure
        className="w-[700px] h-[415px] p-1"
        initial={{ x: 300 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2, type: "spring" }}
      >
        <img src={img} />
      </motion.figure>
    </div>
  );
};

export default LandingPortion;
