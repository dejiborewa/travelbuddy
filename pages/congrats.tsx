import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import Button from "../components/buttons/button";
import Heading from "../components/heading/heading";
import Input from "../components/input/input";
import Main from "../layout/main/main";
import { User } from "../public/icons/user";
import Meta from "../templates/meta";

const Congrats = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    router.push("/onboarding");
  };

  return (
    <>
      <Meta>
        <title>Congrats | TravelBuddy</title>
      </Meta>

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

          <form onSubmit={handleSubmit} className="mt-24">
            <Input
              value={name}
              placeholder="Your name"
              onChange={(event) => setName(event.target.value)}
              required
            />

            <Input
              type="email"
              value={email}
              placeholder="Your email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <Button text="Start planning" type="submit" />
          </form>
        </section>
      </Main>
    </>
  );
};

export default Congrats;
