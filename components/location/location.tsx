import Image from "next/image";
import LocationProps from "./location.props";

const Location = (data: LocationProps) => {
  return (
    <div className="w-full rounded-[10px] shadow-md border border-transparent">
      <Image
        src={data.image}
        alt="sample1"
        className="w-full h-[180px] rounded-t-[10px]"
      />
      <div className="text-sm p-3">
        <div>
          <p className="font-[700]">{data.name}</p>
        </div>

        <p className="mt-1">{data.distance}</p>
      </div>
    </div>
  );
};

export default Location;
