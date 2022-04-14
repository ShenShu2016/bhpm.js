import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { H2 } from "../../components/Typography";
import SectionMyCollection  from "../../components/fashion-shop/SectionMyCollection";
import { getUserProfile } from "../../redux/slice/profileSlice";
import { fetchMyCollection, selectAllMyCollection } from "../../redux/slice/myCollectionSlice";

export default function MyCollection() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userAuth);
  const { username } = useSelector((state) => state.userAuth.user);
  const { user } = useSelector((state) => state.profile);
  console.log(user);

  useEffect(() => {
    if (!!username === true) {
      dispatch(getUserProfile({ username }));
    }
  }, [dispatch, username]);

  useEffect(() => {
    if (isAuthenticated !== null) {
      dispatch(
        fetchMyCollection({
          isAuthenticated,
        })
      );
    }
  }, [dispatch, isAuthenticated]);
const myCollections = useSelector(selectAllMyCollection);
  console.log(myCollections);

  const moreItemsRenderList = myCollections?.map((lot) => {
    return {
      auctionItemID: lot.lots.auctionItemID,
      price: lot.lots.estimatedPriceMax,
//      title: lot.lots.auctionItem.title,
 //     imgUrl: lot.lots.auctionItem.imgUrls[0],
  //    category: lot.lots.auctionItem.categoryID,
      id: lot.lots.id,
      startingPrice: lot.lots.startingPrice,
    };
  });

  console.log(moreItemsRenderList);
  return (
    <>{moreItemsRenderList? <SectionMyCollection moreItems={moreItemsRenderList}/> : <H2>Loading...</H2>}</>
  );
}
