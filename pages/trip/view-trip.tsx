import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import ImageList from "../../components/imageList/imageList";
import MenuBar from "../../components/menubar/menubar";
import TripDetails from "../../components/tripDetails/tripDetails";
import { DateData } from "../../components/tripDetails/tripDetails.props";
import Main from "../../layout/main/main";

const ViewTrip = () => {
  const router = useRouter();
  const role = "ADMIN" || "TRAVELBUDDY";

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
              {role === "ADMIN" ? (
                <span>Edit your Trip</span>
              ) : (
                <span>My Trip</span>
              )}
            </div>

            <div className="relative z-10">
              <Icon icon="ph:trash-bold" className="text-3xl cursor-pointer" />
            </div>
          </div>
        }
        dateData={dateData}
        editable={true}
      />
      <section>
        <h1>Travel buddies</h1>
        <ImageList />
        <div>
          <h1>Your trip top votes</h1>
          {role === "ADMIN" ? (
            <span className="text-xs leading-4 block mt-2">
              You have no places selected for your trip, create voting to know
              what your travel buddies think
            </span>
          ) : (
            <span className="text-xs leading-4 block mt-2">
              Your travel buddies voted for it, it is your turn now{" "}
            </span>
          )}

          <div className="flex items-center px-4 py-3 bg-[#FFFDFB] rounded-[16px] justify-between w-full shadow-yetAnotherGrey my-4">
            <span className="w-1/2">Itinerary voting</span>

            <button className="w-1/2 bg-primary border-0 outline-0 p-4 font-mukta text-white rounded-[12px] text-base hover:bg-btnHover active:bg-btnHover">
              Launch now
            </button>
          </div>
        </div>
      </section>
      <div className="-mx-[1.5em] absolute bottom-0 w-full">
        <MenuBar />
      </div>
    </Main>
  );
};

export default ViewTrip;
