import { Icon } from "@iconify/react";
import { FC, PropsWithChildren } from "react";
import { countries } from "../../utils/contants";
import Dropdown from "../dropdown/dropdown";
import Input from "../input/input";
import TripDetailsType from "./tripDetails.props";

const TripDetails: FC<PropsWithChildren<TripDetailsType>> = ({
  children,
  headerComponent,
  handleSubmit,
  handleDateChange,
  dateData,
  marginTop = "mt-12",
  location,
  setLocation,
  locationPlaceholder,
  editable
}) => {
  return (
    <section>
      {headerComponent}
      <div className={`flex items-center gap-2 ${marginTop}`}>
        {editable ? (
          <Icon
            icon="material-symbols:edit-outline-rounded"
            className="text-2xl"
          />
        ) : (
          <></>
        )}

        <div className="text-[18px]">Trip to NY with friends</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="w-full mt-4">
          {editable && location !== undefined && setLocation ? (
            <Dropdown
              options={countries}
              onChange={(value) => setLocation(value)}
              value={location}
              placeholder={locationPlaceholder}
            />
          ) : (
            <div className="border border-black h-[47px] rounded-[47.915px] mb-6 px-2 flex items-center">
              {locationPlaceholder}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between -mt-3">
          {editable && handleDateChange ? (
            <div className="w-[48%]">
              <Input
                type="date"
                value={dateData.startDate}
                id="startDate"
                onChange={handleDateChange}
              />
            </div>
          ) : (
            <div className="w-[48%]">
              <div className="border border-black p-2 rounded-[24px] flex items-center justify-between">
                {dateData.startDate}
                <Icon
                  icon="material-symbols:date-range"
                  className="text-[18px] cursor-pointer"
                />
              </div>
            </div>
          )}

          <div className="w-[48%]">
            <div className="relative border border-black p-2 rounded-[24px]">
              <span className="flex items-center justify-between">
                {editable ? dateData.returnDate : dateData.endDate}
                <Icon
                  icon="material-symbols:date-range"
                  className="text-[18px] cursor-pointer"
                />
              </span>

              {editable && handleDateChange ? (
                <Input
                  type="date"
                  value={dateData.endDate}
                  id="endDate"
                  onChange={handleDateChange}
                  className="absolute opacity-0 top-0 bottom-0 right-0 left-0"
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        {children}
      </form>
    </section>
  );
};

export default TripDetails;
