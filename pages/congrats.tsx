import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import React, { useState, FormEvent, useEffect } from "react";
import { motion } from "framer-motion";

import Button from "../components/buttons/button";
import Heading from "../components/heading/heading";
import Input from "../components/input/input";
import Main from "../layout/main/main";
import User from "../public/icons/user";

import Meta from "../templates/meta";
import { register } from "../redux/actions/authAction";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

const Congrats = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useAppDispatch();

  const router = useRouter();
  const { auth } = useAppSelector((state) => state);

  useEffect(() => {
    if (auth.token) router.push("/onboarding/1");
  }, [auth.token, router]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(register({ userName, email }));
  };

  return (
    <>
      <Meta>
        <title>Congrats | TravelBuddy</title>
      </Meta>
      <motion.main
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Main>
          <section className="text-center">
            <h2 className="text-[18px]">Congratulations</h2>
            <p className="text-[18px]">You've joined a trip created by Maria</p>

            <Heading className="my-8">Trip to New York with friends</Heading>
            <div className="relative bg-[#E1E2E2] w-[80px] h-[80px] rounded-full mx-auto cursor-pointer">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {User}
              </span>
              <div className="absolute -right-2 top-0 bg-white rounded-full shadow-grey w-[30px] h-[30px]">
                <Icon
                  icon="material-symbols:add"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>

            <form className="mt-24" onSubmit={handleSubmit}>
              <Input
                value={userName}
                placeholder="Your name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUserName(e.target.value)
                }
                required
              />

              <Input
                type="email"
                value={email}
                placeholder="Your email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                required
              />

              <Button text="Start planning" type="submit" />
            </form>
          </section>
        </Main>
      </motion.main>
    </>
  );
};

export default Congrats;
