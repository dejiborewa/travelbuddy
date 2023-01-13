import { Icon } from "@iconify/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { previewCities } from "../../utils/contants";

const TopVotes = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-4 gap-3 mt-6 mb-4">
      {previewCities.map((city, index) => (
        <figure key={index} className="relative">
          <Image
            src={city.image}
            alt={city.name}
            fill
            priority
            className="rounded-[8px] object-cover"
          />
          {false && <span className="absolute top-[105%] font-bold">100%</span>}
        </figure>
      ))}
      <div
        className="shadow-yetAnotherGrey rounded-[8px] cursor-pointer"
        onClick={() => router.push("/vote")}
      >
        <div className="p-2">
          <div className="leading-4 w-max mx-auto text-center">
            <span className="text-primary w-[75px] bg-[ #FFFDFB]">Vote</span>
            <span className="text-primary w-[75px] bg-[ #FFFDFB] block">
              now
            </span>
          </div>

          <Icon
            icon="material-symbols:arrow-right-alt"
            className="block text-3xl text-primary mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TopVotes;
