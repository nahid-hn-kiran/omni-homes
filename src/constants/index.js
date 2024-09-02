import {
  findMyHomeImg,
  helpMeRelocateImg,
  homeTeamCardImg,
  janeImg,
  johnImg,
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

export const testimonialData = [
  {
    id: 1,
    img: johnImg,
    author: "Mr John Doe",
    comment:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Omni Homes offers exceptional service and expertise. They ensure a smooth real estate experience.",
  },
  {
    id: 2,
    img: janeImg,
    author: "Ms. Jane Doe",
    comment:
      " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Omni Homes excels in client care and market knowledge. They make transactions hassle-free.",
  },
  {
    id: 3,
    img: johnImg,
    author: "Mr. Jeff Doe",
    comment:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Omni Homes provides reliable real estate services. Their attention to detail ensures seamless transactions.",
  },
  {
    id: 4,
    img: janeImg,
    author: "Ms. Jeffer Doe",
    comment:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Omni Homes is known for efficient service and deep insights. Their personalized approach ensures a smooth process.",
  },
];
