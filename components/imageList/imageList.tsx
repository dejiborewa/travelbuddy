import { Icon } from "@iconify/react";
import { friendList } from "../../utils/contants";

const ImageList = ({ editable }: { editable: boolean }) => {
  const color = ["bg-[#ADECE0]", "bg-[#FBE9B3]", "bg-[#FAC9C5]"];

  return (
    <div className="flex gap-2 my-4">
      {friendList.map((friend, index) => (
        <div
          key={index}
          className={`-ml-1 relative w-[62px] h-[62px] rounded-full border border-black ${
            color[index] ? color[index] : color[0]
          }`}
        >
          <span className="text-[18px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{`${friend.firstName[0].toUpperCase()}${friend.lastName[0].toUpperCase()}`}</span>
        </div>
      ))}
      {editable ? (
        <div className="w-[59.9px] h-[59.9px] relative rounded-full shadow-lastGrey">
          <Icon
            icon="material-symbols:add"
            className="text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImageList;
