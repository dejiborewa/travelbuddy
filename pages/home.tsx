import { useRouter } from "next/router";
import Add from "../components/add/add";
import Heading from "../components/heading/heading";
import MenuBar from "../components/menubar/menubar";
import Main from "../layout/main/main";
import NoTrips from "../public/icons/notrips";

const Home = () => {
  const router = useRouter();
  return (
    <Main>
      <section>
        <Heading className="font-mukta text-center">My Trips</Heading>
        <div className="mt-[5em] mb-[1em]">{NoTrips}</div>
        <div className="text-center">
          <p className="text-[18px]">No trips planned </p>
          <p className="text-[13px]">Create the first trip, hit the plus</p>
        </div>
        <div
          className="my-16 w-max mx-auto"
          onClick={() => router.push("/create-trip")}
        >
          <Add />
        </div>
        <div className="-mx-[1.5em] absolute bottom-0 w-full">
          <MenuBar />
        </div>
      </section>
    </Main>
  );
};

export default Home;
