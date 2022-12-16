import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Secondary from "../layout/secondary/secondary";
import Heading from "../components/heading/heading";
import Input from "../components/input/input";
import Button from "../components/buttons/button";

const Welcome = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Secondary backgroundImage="bg-welcome">
        <section className="absolute bottom-0 bg-white w-full px-6 pt-6 pb-12 rounded-t-[70px]">
          <div className=" relative w-[98px] h-[98px] mx-auto rounded-full bg-[#eae2b7]">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mukta font-[700]">
              Logo
            </span>
          </div>
          <Heading className="text-center mt-4">Welcome to TravelBuddy</Heading>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button text="Start planning" type="submit" />
          </form>
        </section>
      </Secondary>
    </motion.div>
  );
};

export default Welcome;
