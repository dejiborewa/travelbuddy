import { useRouter } from "next/router";
import Button from "../components/buttons";
import Meta from "../templates/meta";
import Friends from "../components/friends/friends";
import Heading from "../components/heading";
import Intro from "../layout/intro";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Meta>
        <title>Login | TravelBuddy</title>
      </Meta>
      <Intro>
        <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]">
          <div className="relative rounded-[40px] bg-white h-[400px] text-center p-4">
            <p className="mb-4">You've been invited to join</p>

            <Heading>Trip to New York with friends</Heading>

            <div className="my-4">
              <p className="mb-2">Dec 12 - Dec 31, 2022</p>
              <p>New York</p>
            </div>

            <Friends />

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full mb-12">
              <p className="mb-1">
                Maria invited you to join a Trip to New York
              </p>
              <p>Join now to begin planning!</p>
            </div>
          </div>
          <Button
            text="Accept and join the trip"
            onClick={() => router.push("/congrats")}
            type="button"
          />
        </section>
      </Intro>
    </>
  );
}
