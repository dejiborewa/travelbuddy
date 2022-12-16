import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Heading from "../../components/heading/heading";
import Location from "../../components/location/location";
import { interestingPlaces } from "../../utils/contants";
import Main from "../../layout/main/main";
import ProgressBar from "../../components/progressBar/progressBar";

const Onboarding = () => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Main>
        <section className="bg-white">
          <div className="flex justify-end">
            <p
              className="w-max cursor-pointer text-[#6D6D6D]"
              onClick={() => router.push("/invite")}
            >
              Skip
            </p>
          </div>

          <Heading className="text-center my-6">
            Find Interesting places
          </Heading>
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
    </motion.div>
  );
};

export default Onboarding;
