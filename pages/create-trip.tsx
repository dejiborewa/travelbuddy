import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../components/buttons/button";
import Dropdown from "../components/dropdown/dropdown";
import Input from "../components/input/input";
import MenuBar from "../components/menubar/menubar";
import Main from "../layout/main/main";
import { countries } from "../utils/contants";

const CreateTrip = () => {
  const [startDate, setStartDate] = useState(new Date().toDateString());
  const [endDate, setEndDate] = useState(new Date().toDateString());
  const [returnDate, setReturnDate] = useState("Return Date");

  const router = useRouter();

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const dateInstance = new Date(e.target.value);
    setEndDate(dateInstance.toDateString());
    setReturnDate(new Intl.DateTimeFormat("en-GB").format(dateInstance));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/invite");
  };

  return (
    <Main>
      <section>
        <div className="flex items-center gap-2">
          <Icon
            icon="ion:arrow-back-sharp"
            className="text-2xl cursor-pointer"
            onClick={() => router.back()}
          />
          <span>Create new Trip</span>
        </div>
        <div className="flex items-center gap-2 mt-16">
          <Icon
            icon="material-symbols:edit-outline-rounded"
            className="text-2xl"
          />
          <div>Trip to NY with friends</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="w-full mt-4">
            <Dropdown
              options={countries}
              placeholder={"Where are you travelling?"}
            />
          </div>
          <div className="flex items-center justify-between -mt-3">
            <div className="w-[48%]">
              <Input
                type="date"
                value={startDate}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setStartDate(e.target.value)
                }
              />
            </div>

            <div className="w-[48%]">
              <div className="relative border border-black p-2 rounded-[24px]">
                <span className="flex items-center justify-between">
                  {returnDate}
                  <Icon
                    icon="material-symbols:date-range"
                    className="text-[18px]"
                  />
                </span>
                <Input
                  type="date"
                  value={endDate}
                  onChange={handleDateChange}
                  className="absolute opacity-0 top-0 bottom-0 right-0 left-0"
                />
              </div>
            </div>
          </div>

          <div className="-mx-[1.5em] absolute bottom-0 w-full">
            <div className="m-[1.5em]">
              <Button type="submit" text="Save Trip" />
            </div>
            <MenuBar />
          </div>
        </form>
      </section>
    </Main>
  );
};

export default CreateTrip;
