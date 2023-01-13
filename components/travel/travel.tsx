import Image from "next/image";
import type { FC } from "react";
import { Icon } from "@iconify/react";
import TravelProps from "./travel.props";
import styles from "./travel.module.scss";
import Like from "../actions/like";

const Travel: FC<TravelProps> = ({ travelData, className, selected }) => {
  return (
    <div className="relative">
      <div
        className={`bg-gray-150 flex w-full rounded-[10px] shadow-md border border-transparent cursor-pointer ${className}`}
      >
        <div className={styles.top}>
          <div className="relative text-sm w-[70%] h-[160px] overflow-hidden">
            <Image
              src={travelData.image}
              alt="travel"
              className="rounded-[12px] object-cover"
              fill={true}
              priority
            />
          </div>
          <div className="w-full relative">
            <div className="flex items-center justify-between">
              <span className="flex items-center">
                <Icon
                  className={styles.icon}
                  icon="material-symbols:star-rounded"
                  color="gold"
                />
                <span>{travelData.rating}</span>
              </span>

              <span className="text-sm  font-mukta">{travelData.pricing}</span>
            </div>

            <div>
              <h1 className="w-[70%] text-[16px] leading-5 my-2">
                {travelData.name}
              </h1>
            </div>

            <div className="absolute bottom-2">
              <span className="text-sm  font-mukta bg-white px-2">
                Restaurant
              </span>
            </div>
          </div>
        </div>
      </div>
      <Like
        className={styles.likes}
        color={selected ? "bg-customYellow" : "bg-darkGrey"}
      />
    </div>
  );
};

export default Travel;
