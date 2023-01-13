import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import ImageList from "../../components/imageList/imageList";
import MenuBar from "../../components/menubar/menubar";
import TopVotes from "../../components/topVotes/topVotes";
import TripDetails from "../../components/tripDetails/tripDetails";
import { DateData } from "../../components/tripDetails/tripDetails.props";
import Main from "../../layout/main/main";

const ViewTrip = () => {
  const router = useRouter();
  const location = "New York City";

  const dateData: DateData = {
    startDate: new Date().toDateString(),
    endDate: new Date().toDateString()
  };

  return (
    <Main>
      <TripDetails
        marginTop="mt-6"
        headerComponent={
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon
                icon="ion:arrow-back-sharp"
                className="text-2xl cursor-pointer "
                onClick={() => router.back()}
              />
              <span className="text-[18px]">My Trip</span>
            </div>
          </div>
        }
        dateData={dateData}
        locationPlaceholder={
          <div className="flex items-center gap-4">
            <Icon
              icon="material-symbols:location-on-rounded"
              className="text-3xl"
            />
            <span>{location}</span>
          </div>
        }
        editable={false}
      />
      <section className="mt-6">
        <h1 className="text-[18px]">Travel buddies</h1>
        <ImageList editable={false} />
        <div>
          <h1 className="text-[18px]">Your trip top votes</h1>
          <span className="text-xs leading-4 block mt-1">
            Your travel buddies voted for it, it is your turn now{" "}
          </span>
          <TopVotes />
        </div>
      </section>
      <div className="-mx-[1.5em] absolute bottom-0 w-full">
        <MenuBar />
      </div>
    </Main>
  );
};

export default ViewTrip;
