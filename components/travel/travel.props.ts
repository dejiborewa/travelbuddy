import { StaticImageData } from "next/image";

export interface TravelData {
  id: number;
  name: string;
  rating: string;
  pricing: string;
  image: StaticImageData;
}

export default interface TravelProps {
  travelData: TravelData;
  className?: string;
  selected: boolean;
}
