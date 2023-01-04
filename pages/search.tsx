import React from "react";
import Secondary from "../layout/secondary/secondary";
import Heading from "../components/heading/heading";
import { interestingPlaces2 } from "../utils/contants";
import Location from "../components/location/location";
import MenuBar from "../components/menubar/menubar";

const Search = () => {
  return (
    <Secondary className="bg-home h-[135vh]">
      <section className="bg-white absolute bottom-0 w-full h-max rounded-t-[55px] pt-4 px-4">
        <Heading className="text-center mb-8">Explore places</Heading>

        <p className="my-4 mt-0 mb-2">Travel Ideas you'll love</p>
        <div className="flex overflow-x-scroll py-3 gap-3 w-full">
          {interestingPlaces2.map((data, index) => (
            <div key={index} className="min-w-[45%]">
              <Location locationData={data} />
            </div>
          ))}
        </div>

        <p className="my-4 mt-0 mb-2">Restaurants</p>
        <div className="flex overflow-x-scroll py-3 gap-3 w-full">
          {interestingPlaces2.map((data, index) => (
            <div key={index} className="min-w-[45%]">
              <Location locationData={data} />
            </div>
          ))}
        </div>
        <div className="-mx-4 ">
          <MenuBar />
        </div>
      </section>
    </Secondary>
  );
};

export default Search;
