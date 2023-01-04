import { Icon } from "@iconify/react";

const Add = ({ invert }: { invert?: boolean }) => {
  return (
    <div
      className={`${
        invert ? "bg-white" : "bg-green"
      } w-[74px] h-[74px] mx-auto relative rounded-full cursor-pointer`}
    >
      <Icon
        icon="material-symbols:add"
        className={`text-[3em] ${
          invert ? "text-green" : "text-white"
        } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      />
    </div>
  );
};

export default Add;
