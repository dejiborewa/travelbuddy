import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../components/buttons/button";
import { Option } from "../../components/dropdown/dropdown.props";
import ImageList from "../../components/imageList/imageList";
import MenuBar from "../../components/menubar/menubar";
import TripDetails from "../../components/tripDetails/tripDetails";
import Main from "../../layout/main/main";

const EditTrip = () => {
  const [dateData, setDateData] = useState({
    startDate: new Date().toDateString(),
    endDate: new Date().toDateString(),
    returnDate: "Return Date"
  });
  const [location, setLocation] = useState<null | Option>(null);

  const router = useRouter();
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "startDate") {
      setDateData({
        ...dateData,
        startDate: e.target.value
      });
    } else {
      setDateData({
        ...dateData,
        endDate: e.target.value,
        returnDate: new Intl.DateTimeFormat("en-GB").format(
          new Date(e.target.value)
        )
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/invite");
  };

  return (
    <Main>
      <TripDetails
        marginTop="mt-6"
        handleSubmit={handleSubmit}
        headerComponent={
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon
                icon="ion:arrow-back-sharp"
                className="text-2xl cursor-pointer "
                onClick={() => router.back()}
              />
              <span>Edit your trip</span>
            </div>

            <div className="relative z-10">
              <Icon icon="ph:trash-bold" className="text-3xl cursor-pointer" />
            </div>
          </div>
        }
        handleDateChange={handleDateChange}
        dateData={dateData}
        location={location}
        setLocation={setLocation}
        editable={true}
      />
      <section>
        <h1>Travel buddies</h1>
        <ImageList />
        <div>
          <h1>Your trip top votes</h1>
          <span className="text-xs leading-4 block mt-2">
            You have no places selected for your trip, create voting to know
            what your travel buddies think
          </span>

          <div className="flex items-center px-4 py-3 bg-[#FFFDFB] rounded-[16px] justify-between w-full shadow-yetAnotherGrey my-4">
            <span className="w-1/2">Itinerary voting</span>

            <button className="w-1/2 bg-primary border-0 outline-0 p-4 font-mukta text-white rounded-[12px] text-base hover:bg-btnHover active:bg-btnHover">
              Launch now
            </button>
          </div>
        </div>
        <Button
          text="Save changes"
          color="bg-[#C4C5C5]/70"
          hoverColor="bg-[#C4C5C5]/70"
          textColor="bg-[#6D6D6D]"
        />
      </section>
      <div className="-mx-[1.5em] absolute bottom-0 w-full">
        <MenuBar />
      </div>
    </Main>
  );
};

export default EditTrip;
