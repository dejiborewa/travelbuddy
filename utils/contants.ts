import { LocationData } from "../components/location/location.props";
import { TravelData } from "../components/travel/travel.props";
import friend1 from "../public/images/friend1.png";
import friend2 from "../public/images/friend2.png";
import friend3 from "../public/images/friend3.png";
import image1 from "../public/images/image1.png";
import image2 from "../public/images/image2.png";
import image3 from "../public/images/image3.png";
import sample1 from "../public/images/sample1.png";
import sample2 from "../public/images/sample2.png";
import TripImage from "../public/images/trip.png";
import visit1 from "../public/images/visit1.png";
import visit2 from "../public/images/visit2.png";
import TripType from "../types/trip.type";

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
    rating: "4.6 (2k)",
    pricing: "$$$",
    like: "bg-darkGrey"
  },
  {
    image: visit2,
    name: "Central Park ",
    rating: "4.6 (2k)",
    pricing: "$$$",
    like: "bg-darkGrey"
  },

  {
    image: visit1,
    name: "Boucherie Union Square",
    rating: "4.6 (2k)",
    pricing: "$$$",
    like: "bg-darkGrey"
  },
  {
    image: visit1,
    name: "Boucherie Union Square",
    rating: "4.6 (2k)",
    pricing: "$$$",
    like: "bg-darkGrey"
  },
  {
    image: visit2,
    name: "Central Park ",
    rating: "4.6 (2k)",
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

const tripActions = ["Create new trip", "Archive", "Delete"];

const imageList = [
  {
    image: image1,
    name: "image1"
  },
  {
    image: image2,
    name: "image2"
  },
  {
    image: image3,
    name: "image3"
  }
];

export {
  countries,
  friendList,
  imageList,
  interestingPlaces,
  interestingPlaces2,
  trips,
  tripActions,
  visit
};
