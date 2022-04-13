import React, { useEffect } from "react";
import { fetchLotss, selectAllLotss } from "../../redux/slice/lotsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../redux/slice/profileSlice";
import { H2 } from "../../components/Typography";
import SectionMyLot  from "../../components/fashion-shop/SectionMyLot";

export default function MyLot() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userAuth);
  const { username } = useSelector((state) => state.userAuth.user);
  const { user } = useSelector((state) => state.profile);
  console.log(user);
 /*  
 1. 数据库中添加属性： 我的收藏应该是放在profile里，然后在登陆后user的profile里应该有（myLot-我的收藏）这个属性，补充：这个属性id连接到lots的id，
 2. 获取登陆用户信息后，可以直接把 myLot 这个属性转为底下35行的lotss，map出来就是这个页面的主题内容
 问题： 我不知道怎么在数据库user的profile里添加这个属性。这只是我的想法，如果你有其他实现方法可以说说看。
 */
  useEffect(() => {
    if (!!username === true) {
      dispatch(getUserProfile({ username }));
    }
  }, [dispatch, username]);

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
      auctionItemID: lot.auctionItemID,
      price: lot.estimatedPriceMax,
      title: lot.auctionItem.title,
      imgUrl: lot.auctionItem.imgUrls[0],
      category: lot.auctionItem.categoryID,
      id: lot.id,
      startingPrice: lot.startingPrice,
    };
  });

  console.log(moreItemsRenderList);
  return (
    <>{moreItemsRenderList? <SectionMyLot moreItems={moreItemsRenderList}/> : <H2>Loading...</H2>}</>
  );
}
