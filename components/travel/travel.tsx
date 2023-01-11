import Image from "next/image";
import type { FC } from "react";
import { Icon } from "@iconify/react";
import TravelProps from "./travel.props";
import styles from "./travel.module.scss";
import Like from "../actions/like";

const Travel: FC<TravelProps> = ({ travelData, className }) => {
  return (
    <div>
      <div
        className={` bg-gray-150 flex w-full rounded-[10px] shadow-md border border-transparent cursor-pointer ${className}`}
      >
        <div className={styles.top}>
          <div className="  text-sm p-3">
            <Image
              src={travelData.image}
              alt="travel"
              className="w-20.5 h-[120px] rounded-t-[10px]"
            />
          </div>
          <div className={styles.top2}>
            <span className={styles.top3}>
              <Icon
                className={styles.icon}
                icon="material-symbols:star-rounded"
                color="gold"
              />
              <p>{travelData.rating}</p>

              <p>{travelData.pricing}</p>
            </span>

            <div className="">
              <h1>{travelData.name}</h1>
            </div>
            <div>
              <button className={styles.btn}>Restaurant</button>
              <Like className={styles.likes} color={travelData.like} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
