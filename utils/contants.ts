import { LocationData } from "../components/location/location.props";
import { TravelData } from "../components/travel/travel.props";
import sample1 from "../public/images/sample1.png";
import sample2 from "../public/images/sample2.png";
import TripImage from "../public/images/trip.png";
import visit1 from "../public/images/visit1.png";
import visit2 from "../public/images/visit2.png";
import city1 from "../public/images/vote1.png";
import city2 from "../public/images/vote2.png";
import city3 from "../public/images/vote3.png";
import TripType from "../types/trip.type";

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const friendList = [
  {
    firstName: "Maria",
    lastName: "Simi"
  },
  {
    firstName: "Sanaa",
    lastName: "Khaloan"
  },
  {
    firstName: "Ayo",
    lastName: "Akin"
  },
  {
    firstName: "Emeka",
    lastName: "Nwdo"
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
    id: 0,
    image: visit1,
    name: "Boucherie Union Square",
    rating: "4.6 (2k)",
    pricing: "$$$"
  },
  {
    id: 1,
    image: visit2,
    name: "Central Park ",
    rating: "4.6 (2k)",
    pricing: "$$$"
  },

  {
    id: 2,
    image: visit1,
    name: "Boucherie Union Square",
    rating: "4.6 (2k)",
    pricing: "$$$"
  },
  {
    id: 3,
    image: visit1,
    name: "Boucherie Union Square",
    rating: "4.6 (2k)",
    pricing: "$$$"
  },
  {
    id: 4,
    image: visit2,
    name: "Central Park ",
    rating: "4.6 (2k)",
    pricing: "Free"
  },

  {
    id: 5,
    image: visit1,
    name: "Boucherie Union Square",
    rating: "4.6(2k)",
    pricing: "$$$"
  }
];

const trips: TripType[] = [
  {
    startDate: new Date(),
    endDate: new Date(),
    image: TripImage,
    name: "Trip to New York with Friends"
  }
];

const previewCities = [
  {
    image: city1,
    name: "new york"
  },
  {
    image: city2,
    name: "lagos"
  },
  {
    image: city3,
    name: "beijing"
  }
];

export {
  countries,
  friendList,
  interestingPlaces,
  interestingPlaces2,
  trips,
  previewCities,
  visit
};
