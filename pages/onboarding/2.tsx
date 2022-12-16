import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Heading from "../../components/heading/heading";
import ProgressBar from "../../components/progressBar/progressBar";
import Secondary from "../../layout/secondary/secondary";

const Invite = () => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Secondary backgroundImage="bg-invite">
        <section className="absolute top-0 bg-green p-6 w-full text-white h-[240px] rounded-b-[60px]">
          <div className="flex justify-between items-center">
            <Icon
              icon="mdi:arrow-back"
              className="text-2xl cursor-pointer"
              onClick={() => router.back()}
            />
            <span
              className="cursor-pointer"
              onClick={() => router.push("/onboarding/3")}
            >
              Skip
            </span>
          </div>
          <Heading className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center leading-5">
            Invite your travel buddies to join your trip
          </Heading>
        </section>
        <ProgressBar state={2} shadow={true} />
      </Secondary>
    </motion.div>
  );
};

export default Invite;
