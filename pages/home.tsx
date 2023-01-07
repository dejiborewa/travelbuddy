import { useRouter } from "next/router";
import Add from "../components/add/add";
import AvailableTrips from "../components/availableTrips/availableTrips";
import Heading from "../components/heading/heading";
import MenuBar from "../components/menubar/menubar";
import Main from "../layout/main/main";
import NoTrips from "../public/icons/notrips";
import { trips } from "../utils/contants";

const Home = () => {
  const router = useRouter();
  const hasTrips = true;

  return (
    <Main>
      <section className="h-[85vh] w-full overflow-y-scroll overflow-x-visible px-2">
        <Heading className="font-mukta text-center">My Trips</Heading>
        {hasTrips ? (
          <AvailableTrips trips={trips} />
        ) : (
          <>
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
          </>
        )}
        <div className="-mx-[2.0em] absolute bottom-0 w-full">
          <MenuBar />
        </div>
      </section>
    </Main>
  );
};

export default Home;
