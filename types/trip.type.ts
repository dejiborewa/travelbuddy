import { StaticImageData } from "next/image";

interface TripType {
  startDate: Date;
  endDate: Date;
  image: StaticImageData;
  name: string;
}

export default TripType;
