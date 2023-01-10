import { StaticImageData } from "next/image";

export interface TravelData {
  name: string;
  rating: string;
  pricing: string;
  image: StaticImageData;
  like: string;
}

export default interface TravelProps {
  travelData: TravelData;
  className?: string;
}
