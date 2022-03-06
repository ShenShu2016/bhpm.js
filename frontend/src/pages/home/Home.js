import React from "react";
import Section1 from "../../components/fashion-shop/Section1";

const mainCarouselData = [
  {
    title: "aaaaMarch 26th Auction",
    photoUrl:
      "https://uwcssabucket53243-master.s3.us-east-2.amazonaws.com/public/article/qrCode/2248b9ef-2575-4119-8348-6cd6b35a4a83.jpg",
    description:
      "This product was discovered during Ming Dynasty. 2022年3月26日(星期六) 6:00pm",
    buttonText: "Bid Now",
    buttonLik: "/auctions/biddingtest/fdfa3b15-1731-43fc-b23e-30c1707b954c",
  },
  {
    title: "aaaaMarch 26th Auction",
    photoUrl:
      "https://uwcssabucket53243-master.s3.us-east-2.amazonaws.com/public/article/qrCode/2248b9ef-2575-4119-8348-6cd6b35a4a83.jpg",
    description:
      "This product was discovered during Ming Dynasty. 2022年3月26日(星期六) 6:00pm",
    buttonText: "Bid Now",
    buttonLik: "/auctions",
  },
  {
    title: "aaaaMarch 26th Auction",
    photoUrl:
      "https://uwcssabucket53243-master.s3.us-east-2.amazonaws.com/public/article/qrCode/2248b9ef-2575-4119-8348-6cd6b35a4a83.jpg",
    description:
      "This product was discovered during Ming Dynasty. 2022年3月26日(星期六) 6:00pm",
    buttonText: "Bid Now",
    buttonLik: "/auctions",
  },
  {
    title: "aaaaMarch 26th Auction",
    photoUrl:
      "https://uwcssabucket53243-master.s3.us-east-2.amazonaws.com/public/article/qrCode/2248b9ef-2575-4119-8348-6cd6b35a4a83.jpg",
    description:
      "This product was discovered during Ming Dynasty. 2022年3月26日(星期六) 6:00pm",
    buttonText: "Bid Now",
    buttonLik: "/auctions",
  },
  {
    title: "aaaaMarch 26th Auction",
    photoUrl:
      "https://uwcssabucket53243-master.s3.us-east-2.amazonaws.com/public/article/qrCode/2248b9ef-2575-4119-8348-6cd6b35a4a83.jpg",
    description:
      "This product was discovered during Ming Dynasty. 2022年3月26日(星期六) 6:00pm",
    buttonText: "Bid Now",
    buttonLik: "/auctions",
  },
];
export default function Home() {
  console.log("Home");
  return (
    <>
      <Section1 carouselData={mainCarouselData} />
    </>
  );
}
