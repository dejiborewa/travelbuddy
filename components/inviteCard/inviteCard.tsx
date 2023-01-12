import { FC } from "react";
import styles from "./inviteCard.module.scss";
import InviteCardProps from "./inviteCard.props";

const InviteCard: FC<InviteCardProps> = ({ heading, text, rightComponent }) => {
  return (
    <div className={styles.card}>
      <div className="w-[70%]">
        <h1 className="text-[14px] font-bold">{heading}</h1>
        <p className="font-[400] text-[10px] leading-3 mt-[2px] text-[#051512]">
          {text}
        </p>
      </div>
      <div>{rightComponent}</div>
    </div>
  );
};

export default InviteCard;
