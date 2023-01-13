import { friendList } from "../../utils/contants";

const Friends = () => {
  const color = ["#ADECE0", "#FBE9B3", "#FAC9C5"];
  return (
    <div className="w-max flex my-4">
      {friendList.map((friend, index) => (
        <div
          key={index}
          className={`-ml-1 relative w-[28px] h-[28px] rounded-full border border-black bg-[${
            color[index] ? color[index] : color[0]
          }]`}
        >
          <span className="text-[10px]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{`${friend.firstName[0].toUpperCase()}${friend.lastName[0].toUpperCase()}`}</span>
        </div>
      ))}
    </div>
  );
};

export default Friends;
