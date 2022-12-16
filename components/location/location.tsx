import Image from "next/image";
import { motion } from "framer-motion";
import LocationProps from "./location.props";

const Location = (data: LocationProps) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
      <div className="w-full rounded-[10px] shadow-md border border-transparent cursor-pointer">
        <Image
          src={data.image}
          alt="sample1"
          className="w-full h-[180px] rounded-t-[10px]"
        />
        <div className="text-sm p-3">
          <div>
            <p className="font-[700]">{data.name}</p>
          </div>

          <p className="mt-1">{data.distance}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Location;
