import { FC } from "react";
import ProgressBarProps from "./progressBar.props";

const ProgressBar: FC<ProgressBarProps> = ({ state }) => {
  return (
    <div className="flex justify-center mt-6 gap-2">
      <div
        className={`bg-grey w-[34px] h-[14px] rounded-[7px] ${
          state === 1 ? "bg-yellow w-[76px] h-[14px}" : ""
        }`}
      ></div>
      <div
        className={`bg-grey w-[34px] h-[14px] rounded-[7px] ${
          state === 2 ? "bg-yellow w-[76px] h-[14px}" : ""
        }`}
      ></div>
      <div
        className={`bg-grey w-[34px] h-[14px] rounded-[7px] ${
          state === 3 ? "bg-yellow w-[76px] h-[14px}" : ""
        }`}
      ></div>
    </div>
  );
};

export default ProgressBar;
