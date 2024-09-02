import {
  findMyHomeImg,
  helpMeRelocateImg,
  homeTeamCardImg,
  sellMyHouseImg,
} from "../utils";

// Constant Content will be exported from here
export const homePageServices = [
  {
    id: 1,
    img: findMyHomeImg,
    title: "Find My Dream Home",
    description: "We can find you your Dream home",
  },
  {
    id: 2,
    img: sellMyHouseImg,
    title: "Sell My House",
    description: "You can sell your house in good price with us.",
  },
  {
    id: 3,
    img: helpMeRelocateImg,
    title: "Help Me Relocate",
    description: "We can help you to relocate in a good place.",
  },
];

export const homeSideCard = {
  id: 1,
  img: homeTeamCardImg,
  title: "Meet the Team",
  description1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  description2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  meetTeamBtn: true,
};
