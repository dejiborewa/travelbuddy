import { Icon } from "@iconify/react";
import Image from "next/image";
import { imageList } from "../../utils/contants";
// import Add from "../add/add";

const ImageList = () => {
  return (
    <div className="flex gap-2 my-4">
      {imageList.map((item, index) => (
        <Image
          src={item.image}
          priority
          key={index}
          alt={item.name}
          className="rounded-full"
        />
      ))}
      <div className="w-[59.9px] h-[59.9px] relative rounded-full shadow-lastGrey">
        <Icon
          icon="material-symbols:add"
          className="text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default ImageList;
