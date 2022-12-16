import { Icon } from "@iconify/react";

const Like = ({ color, className }: { color: string; className?: string }) => {
  return (
    <div
      className={`${color} w-[60px] h-[60px] rounded-full relative cursor-pointer  ${className}`}
    >
      <Icon
        icon="uil:thumbs-up"
        className="absolute text-white text-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default Like;
