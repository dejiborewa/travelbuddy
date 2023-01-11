import Image from "next/image";
import TripType from "../../types/trip.type";
import formatDate from "../../utils/formatDate";
import dateDiff from "../../utils/dateDiff";
import Heading from "../heading/heading";
import MenuSmall from "../../public/icons/menu-small";
import Friends from "../friends/friends";

const Trip = ({ data }: { data: TripType }) => {
  const today = new Date();
  return (
    <div className="bg-[#FFF7F0] shadow-tripcard flex p-4 rounded-[16px] mb-6 gap-6">
      <Image
        src={data.image}
        alt="data-image"
        className="rounded-[16px]"
        priority
      />

      <div>
        <div className="flex items-center justify-end gap-1">
          <span>{MenuSmall}</span>
          <span>{0}</span>
        </div>
        <div className="flex flex-col justify-around">
          <span className="my-2 text-xs">{`${formatDate(
            data.startDate
          )} - ${formatDate(data.endDate)}`}</span>
          <Heading className="leading-5">{data.name}</Heading>
          <Friends />
          <span className="text-xs  flex justify-end">
            {dateDiff(data.startDate, today)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Trip;
