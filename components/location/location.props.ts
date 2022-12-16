import { StaticImageData } from "next/image";

export default interface LocationProps {
  name: string;
  distance: string;
  image: StaticImageData;
}
