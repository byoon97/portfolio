import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Skill from "./Skill";
import { imgArr } from "../../data/images";

type Props = {};

type Image = {
  name: string;
  img: string;
  id: number;
};

export default function Skills({}: Props) {
  useEffect(() => {
    console.log(imgArr);
  }, []);

  return (
    <motion.div className="flex relative flex-row text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {imgArr.map((img: Image) => {
          return <Skill key={img.id} img={img} />;
        })}
      </div>
    </motion.div>
  );
}
