import { LocationData } from "../components/location/location.props";
import { TravelData } from "../components/travel/travel.props";
import friend1 from "../public/images/friend1.png";
import friend2 from "../public/images/friend2.png";
import friend3 from "../public/images/friend3.png";
import sample1 from "../public/images/sample1.png";
import sample2 from "../public/images/sample2.png";
import TripImage from "../public/images/trip.png";
import visit1 from "../public/images/visit1.png";
import visit2 from "../public/images/visit2.png";
import TripType from "../types/trip.type";
import Like from "../components/actions/like";
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
const visit: TravelData[] = [
  {
    image: visit1,
    name: "Boucherie Union Square",
    rating: "4.6(2k)",
    pricing: "$$$",
    like: "bg-darkGrey"
  },
  {
    image: visit2,
    name: "Central Park ",
    rating: "4.6(244k)",
    pricing: "Free",
    like: "bg-darkGrey"
  },

  {
    image: visit1,
    name: "Boucherie Union Square",
    rating: "4.6(2k)",
    pricing: "$$$",
    like: "bg-darkGrey"
  }
];

const trips: TripType[] = [
  {
    startDate: new Date(),
    endDate: new Date(),
    image: TripImage,
    name: "Trip to New York with Friends"
  },
  {
    startDate: new Date(),
    endDate: new Date(),
    image: TripImage,
    name: "Trip to New York with Friends"
  },
  {
    startDate: new Date(),
    endDate: new Date(),
    image: TripImage,
    name: "Trip to New York with Friends"
  },
  {
    startDate: new Date(),
    endDate: new Date(),
    image: TripImage,
    name: "Trip to New York with Friends"
  },
  {
    startDate: new Date(),
    endDate: new Date(),
    image: TripImage,
    name: "Trip to New York with Friends"
  },
  {
    startDate: new Date(),
    endDate: new Date(),
    image: TripImage,
    name: "Trip to New York with Friends"
  }
];

export {
  countries,
  friendList,
  interestingPlaces,
  interestingPlaces2,
  trips,
  visit
};
