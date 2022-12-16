import { Icon } from "@iconify/react";

const Heart = () => {
  return (
    <div
      className="bg-[#31D0B2]
      w-[60px] h-[60px] rounded-full relative cursor-pointer"
    >
      <Icon
        icon="mdi:cards-heart-outline"
        className="absolute text-white text-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default Heart;
