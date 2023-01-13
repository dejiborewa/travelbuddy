import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Secondary from "../layout/secondary/secondary";
import Heading from "../components/heading/heading";
import Input from "../components/input/input";
import Button from "../components/buttons/button";
import Logo from "../public/icons/logo";

const Login = () => {
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
      <Secondary className="bg-welcome h-screen">
        <section className="absolute bottom-0 bg-white w-full px-6 pt-6 pb-12 rounded-t-[70px]">
          <div className="mx-auto w-max my-2">{Logo}</div>

          <Heading className="text-center mt-4">Login to TravelBuddy</Heading>
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

export default Login;
