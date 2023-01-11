import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Cancel from "../../components/actions/cancel";
import Heart from "../../components/actions/hearts";
import Like from "../../components/actions/like";
import Button from "../../components/buttons/button";
import Heading from "../../components/heading/heading";
import ProgressBar from "../../components/progressBar/progressBar";
import Main from "../../layout/main/main";

const OnBoardingFinal = () => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Main>
        <section>
          <div className="flex justify-between items-center">
            <Icon
              icon="mdi:arrow-back"
              className="text-2xl cursor-pointer"
              onClick={() => router.back()}
            />
            <span
              className="cursor-pointer"
              onClick={() => router.push("/home")}
            >
              Skip
            </span>
          </div>

          <Heading className="w-[70%] text-center mx-auto leading-5 mt-16 mb-12">
            Vote for activities with your travel buddies
          </Heading>
          <section className="w-[90%] mx-auto">
            <div className="flex justify-between w-[65%]">
              <Like color="bg-darkGrey" />
              <Cancel />
            </div>
            <div className="flex justify-between w-[65%] relative left-[30%] my-2">
              <Like color="bg-customYellow" />
              <Like color="bg-customYellow" />
            </div>
            <div className="relative flex justify-between w-[65%]">
              <Heart />
              <Like color="bg-darkGrey" className="absolute -top-3" />
            </div>
            <div className="flex justify-between w-[65%] mt-4">
              <Like color="bg-customYellow" />
              <Heart />
            </div>
            <div className="flex justify-between w-[65%] relative left-[30%] my-2">
              <Cancel />
              <Cancel />
            </div>
          </section>

          <Button text="Start planning" className="mt-8" />
          <ProgressBar state={3} />
        </section>
      </Main>
    </motion.div>
  );
};

export default OnBoardingFinal;
