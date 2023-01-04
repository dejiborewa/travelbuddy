import Image from "next/image";
import { motion } from "framer-motion";
import type { FC } from "react";
import LocationProps from "./location.props";

const Location: FC<LocationProps> = ({ locationData, className }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
      <div
        className={`w-full rounded-[10px] shadow-md border border-transparent cursor-pointer ${className}`}
      >
        <Image
          src={locationData.image}
          alt="sample1"
          className="w-full h-[180px] rounded-t-[10px]"
        />
        <div className="text-sm p-3">
          <div>
            <p className="font-[700]">{locationData.name}</p>
          </div>

          <p className="mt-1">{locationData.distance}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Location;
