import { useRouter } from "next/router";
import { FC } from "react";
import Add from "../add/add";
import Trip from "../trip/trip";
import AvailableTripsProps from "./availableTrips.props";

const AvailableTrips: FC<AvailableTripsProps> = ({ trips }) => {
  const router = useRouter();

  const role = "ADMIN";

  return (
    <>
      <section className="mt-4 px-1">
        {trips.map((trip, index) => (
          <div
            key={index}
            onClick={
              role === "ADMIN"
                ? () => router.push("/trip/edit-trip")
                : () => router.push("/trip/view-trip")
            }
          >
            <Trip data={trip} />
          </div>
        ))}
      </section>
      <div
        className="my-16 w-max mx-auto"
        onClick={() => router.push("/trip/create-trip")}
      >
        <Add />
      </div>
    </>
  );
};

export default AvailableTrips;
