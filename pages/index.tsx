import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Secondary from "../layout/secondary/secondary";
import Heading from "../components/heading/heading";
import Input from "../components/input/input";
import Button from "../components/buttons/button";
import Logo from "../public/icons/logo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Account created");
      router.push("/onboarding/1");
      setLoading(false);
    }, 2000);
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
              value={firstName}
              placeholder="First name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFirstName(e.target.value)
              }
              required
            />

            <Input
              value={lastName}
              placeholder="Last name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLastName(e.target.value)
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

            <Button text="Start planning" type="submit" loading={loading} />
          </form>
        </section>
      </Secondary>
    </motion.div>
  );
};

export default Login;
