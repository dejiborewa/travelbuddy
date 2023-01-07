import { FC } from "react";
import Add from "../add/add";
import Trip from "../trip/trip";
import AvailableTripsProps from "./availableTrips.props";

const AvailableTrips: FC<AvailableTripsProps> = ({ trips }) => {
  return (
    <>
      <section className="mt-4">
        {trips.map((trip, index) => (
          <div key={index}>
            <Trip data={trip} />
          </div>
        ))}
      </section>
      <Add />
    </>
  );
};

export default AvailableTrips;
