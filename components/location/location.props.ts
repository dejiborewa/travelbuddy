import { StaticImageData } from "next/image";

export interface LocationData {
  name: string;
  distance: string;
  image: StaticImageData;
}
export default interface LocationProps {
  locationData: LocationData;
  className?: string;
}
