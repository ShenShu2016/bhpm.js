
import React, { useEffect } from "react";
import { fetchLotss, selectAllLotss } from "../../redux/slice/lotsSlice";
import { useDispatch, useSelector } from "react-redux";

import Section1 from "../../components/fashion-shop/Section1";
import Section11 from "../../components/fashion-shop/Section11";
import Section12 from "../../components/superstore-shop/Section12";

const mainCarouselData = [
  {
    title: "March 26th Auction",
    photoUrl:
      "https://bhpmjsaa65d4d2254e4b41a89df0d66c611dc0215255-dev.s3.us-west-1.amazonaws.com/public/image25.jpeg",
    description:
      "This product was discovered during Ming Dynasty. 2022年3月26日(星期六) 6:00pm",
    buttonText: "Bid Now",
    buttonLik: "/auctions/biddingtest/fdfa3b15-1731-43fc-b23e-30c1707b954c",
  },
  {
    title: "March 26th Auction",
    photoUrl:
      "https://bhpmjsaa65d4d2254e4b41a89df0d66c611dc0215255-dev.s3.us-west-1.amazonaws.com/public/image26.jpeg",
    description:
      "This product was discovered during Ming Dynasty. 2022年3月26日(星期六) 6:00pm",
    buttonText: "Bid Now",
    buttonLik: "/auctions/biddingtest/fdfa3b15-1731-43fc-b23e-30c1707b954c",
  },
  {
    title: "March 26th Auction",
    photoUrl:
      "https://bhpmjsaa65d4d2254e4b41a89df0d66c611dc0215255-dev.s3.us-west-1.amazonaws.com/public/image27.jpeg",
    description:
      "This product was discovered during Ming Dynasty. 2022年3月26日(星期六) 6:00pm",
    buttonText: "Bid Now",
    buttonLik: "/auctions/biddingtest/fdfa3b15-1731-43fc-b23e-30c1707b954c",
  },
  {
    title: "March 26th Auction",
    photoUrl:
      "https://bhpmjsaa65d4d2254e4b41a89df0d66c611dc0215255-dev.s3.us-west-1.amazonaws.com/public/image12.jpeg",
    description:
      "This product was discovered during Ming Dynasty. 2022年3月26日(星期六) 6:00pm",
    buttonText: "Bid Now",
    buttonLik: "/auctions/biddingtest/fdfa3b15-1731-43fc-b23e-30c1707b954c",
  },
  {
    title: "March 26th Auction",
    photoUrl:
      "https://bhpmjsaa65d4d2254e4b41a89df0d66c611dc0215255-dev.s3.us-west-1.amazonaws.com/public/image3.jpeg",
    description:
      "This product was discovered during Ming Dynasty. 2022年3月26日(星期六) 6:00pm",
    buttonText: "Bid Now",
    buttonLik: "/auctions/biddingtest/fdfa3b15-1731-43fc-b23e-30c1707b954c",
  },
];

export default function Home() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userAuth);
  useEffect(() => {
    if (isAuthenticated !== null) {
      dispatch(
        fetchLotss({
          isAuthenticated,
          auctionsID: "fdfa3b15-1731-43fc-b23e-30c1707b954c",
        })
      );
    }
  }, [dispatch, isAuthenticated]);
  const lotss = useSelector(selectAllLotss);

  const moreItemsRenderList = lotss.map((lot) => {
    return {
      price: lot.estimatedPriceMax,
      title: lot.auctionItem.title,
      imgUrl: lot.auctionItem.imgUrl,
      category: lot.auctionItem.categoryID,
      unit: "kg",
      discount: 8,
      id: lot.id,
      rating: 5,
    };
  });

  console.log(moreItemsRenderList);

  return (
    <>
      <Section1 carouselData={mainCarouselData} />
      <Section11 moreItems={moreItemsRenderList} />
      <Section12 />
    </>
  );
}
