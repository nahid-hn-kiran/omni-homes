import { findMyHomeImg, helpMeRelocateImg, sellMyHouseImg } from "../utils";

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
