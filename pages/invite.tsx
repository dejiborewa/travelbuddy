import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Secondary from "../layout/secondary/secondary";
import Heading from "../components/heading/heading";
import Add from "../components/add/add";

const Invite = () => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Secondary className="bg-invite h-screen">
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
          <div className="absolute top-[203px] left-1/2 -translate-x-1/2">
            <Add invert={true} />
          </div>
        </section>
      </Secondary>
    </motion.div>
  );
};

export default Invite;
