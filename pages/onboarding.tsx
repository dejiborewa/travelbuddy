import React from "react";
import Heading from "../components/heading/heading";
import Location from "../components/location/location";
import { interestingPlaces } from "../utils/contants";
import Main from "../layout/main/main";
import ProgressBar from "../components/progressBar/progressBar";

const Onboarding = () => {
  return (
    <Main>
      <section className="bg-white">
        <div className="flex justify-end">
          <p className="w-max cursor-pointer text-[#6D6D6D]">Skip</p>
        </div>

        <Heading className="text-center my-6">Find Interesting places</Heading>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
          {interestingPlaces.map((data, index) => (
            <React.Fragment key={index}>
              <Location
                name={data.name}
                distance={data.distance}
                image={data.image}
              />
            </React.Fragment>
          ))}
        </div>

        <ProgressBar state={1} />
      </section>
    </Main>
  );
};

export default Onboarding;
