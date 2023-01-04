import { LocationData } from "../components/location/location.props";
import friend1 from "../public/images/friend1.png";
import friend2 from "../public/images/friend2.png";
import friend3 from "../public/images/friend3.png";
import sample1 from "../public/images/sample1.png";
import sample2 from "../public/images/sample2.png";

const friendList = [
  {
    image: friend1,
    label: "Maria"
  },
  {
    image: friend2,
    label: "Sanaa"
  },
  {
    image: friend3,
    label: "Ayo"
  },
  {
    image: friend3,
    label: "Emeka"
  }
];

const interestingPlaces: LocationData[] = [
  { image: sample1, name: "Chrysler Building", distance: "400km away" },
  { image: sample2, name: "Santa Monica", distance: "826km away" },
  { image: sample1, name: "Chrysler Building", distance: "400km away" },
  { image: sample2, name: "Santa Monica", distance: "826km away" }
];

const interestingPlaces2: LocationData[] = [
  { image: sample1, name: "Chrysler Building", distance: "400km away" },
  { image: sample2, name: "Santa Monica", distance: "826km away" },
  { image: sample1, name: "Chrysler Building", distance: "400km away" }
];

const countries = [
  { label: "France", value: "france" },
  { label: "USA", value: "usa" }
];

export { countries, friendList, interestingPlaces, interestingPlaces2 };
