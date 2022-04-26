/*
 * @Author: 李佳修
 * @Date: 2022-04-12 17:49:45
 * @LastEditTime: 2022-04-26 13:46:45
 * @LastEditors: Shen Shu
 * @FilePath: \bhpmJS\frontend\src\components\bidding\BiddingTitle.js
 */

import { H2 } from "../../components/Typography";
import { useSelector } from "react-redux";

//import { Typography } from "@mui/material";

export default function BiddingTitle({ item }) {
  console.log(item);
  const { currentLanguage } = useSelector((state) => state.general.language);
  return (
    <div style={{ width: "100%" }}>
      <H2>
        Lot #{item.lot}{" "}
        {currentLanguage === "zh_hk"
          ? item.auctionItem.title
          : item.auctionItem.titleEng}
      </H2>
      {/* <Typography sx={{ color: "gray", fontSize: "12px" }}>
        {props.description}
      </Typography> */}
      {/* <Typography sx={{ color: "gray", fontSize: "12px" }}>
        创建时间：{Date(props.createdAt)}
      </Typography> */}
    </div>
  );
}
