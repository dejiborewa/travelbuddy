import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../components/buttons/button";
import { Option } from "../../components/dropdown/dropdown.props";
import MenuBar from "../../components/menubar/menubar";
import TripDetails from "../../components/tripDetails/tripDetails";
import Main from "../../layout/main/main";

const CreateTrip = () => {
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
        headerComponent={
          <div className="flex items-center gap-2">
            <Icon
              icon="ion:arrow-back-sharp"
              className="text-3xl cursor-pointer"
              onClick={() => router.back()}
            />
            <span className="text-[18px]">Create new Trip</span>
          </div>
        }
        handleSubmit={handleSubmit}
        handleDateChange={handleDateChange}
        marginTop="mt-12"
        dateData={dateData}
        location={location}
        locationPlaceholder={
          <span className="mx-auto flex items-center">
            Where are you travelling?
          </span>
        }
        setLocation={setLocation}
        editable={true}
      >
        <div className="-mx-[1.5em] absolute bottom-0 w-full">
          <div className="m-[1.5em]">
            <Button type="submit" text="Save Trip" />
          </div>
          <MenuBar />
        </div>
      </TripDetails>
    </Main>
  );
};

export default CreateTrip;
