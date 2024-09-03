import {
  aboutOurCommitmentImg,
  aboutOurRealityImg,
  article1Img,
  article2Img,
  article3Img,
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
  btn: {
    link: "/",
    text: "Meet The Press",
  },
};
export const aboutRealityCardTop = {
  id: 2,
  img: aboutOurRealityImg,
  title: "About Odis Slone Realty",
  description1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  btn: {
    link: "/",
    text: "Contact Us",
  },
};

export const aboutCommitmentCardBottom = {
  id: 3,
  img: aboutOurCommitmentImg,
  title: "Our Commitment to You",
  description1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  description2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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

export const articles = [
  {
    id: 1,
    title: "Choosing the Perfect Home Location: Factors to Consider",
    description:
      "Explore key considerations for selecting the ideal neighborhood, including proximity to amenities, schools, and public transportation.",
    img: article1Img,
  },
  {
    id: 2,
    title: "Top Renovation Tips for Homes: Boosting Value and Comfort",
    description:
      "Discover essential renovation tips to enhance both the value and comfort of your home, from kitchen upgrades to bathroom remodels.",
    img: article2Img,
  },
  {
    id: 3,
    title: "Understanding Home Market Trends: A Comprehensive Guide",
    description:
      "Get insights into current real estate market trends, including pricing patterns, buyer preferences, and economic factors affecting the housing market.",
    img: article3Img,
  },
  {
    id: 4,
    title: "How to Secure Home Financing: A Step-by-Step Approach",
    description:
      "Learn the process of securing home financing, from improving your credit score to understanding mortgage options and securing the best rates.",
    img: article1Img,
  },
  {
    id: 5,
    title:
      "Benefits of Smart Home Features: Enhancing Convenience and Security",
    description:
      "Understand the advantages of integrating smart home technology, including increased convenience, energy efficiency, and enhanced security features.",
    img: article2Img,
  },
];
