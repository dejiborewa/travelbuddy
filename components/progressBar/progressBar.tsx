import { useRouter } from "next/router";
import { FC } from "react";
import ProgressBarProps from "./progressBar.props";

const ProgressBar: FC<ProgressBarProps> = ({ state, shadow }) => {
  const router = useRouter();
  return (
    <div className="flex justify-center mt-6 gap-2 absolute bottom-0 mb-8 left-1/2 -translate-x-1/2">
      <div
        className={`bg-grey w-[34px] h-[14px] rounded-[7px] cursor-pointer ${
          state === 1 ? "bg-yellow w-[76px] h-[14px}" : ""
        }`}
        onClick={() => router.push("/onboarding/1")}
      ></div>
      <div
        className={`bg-grey w-[34px] h-[14px] rounded-[7px] cursor-pointer ${
          shadow ? "shadow-red" : ""
        } ${state === 2 ? "bg-yellow w-[76px] h-[14px}" : ""}`}
        onClick={() => router.push("/onboarding/2")}
      ></div>
      <div
        className={`bg-grey w-[34px] h-[14px] rounded-[7px] cursor-pointer ${
          state === 3 ? "bg-yellow w-[76px] h-[14px}" : ""
        }`}
        onClick={() => router.push("/onboarding/3")}
      ></div>
    </div>
  );
};

export default ProgressBar;
