/*
 * @Author: 李佳修
 * @Date: 2022-04-12 17:49:45
 * @LastEditTime: 2022-04-21 21:41:24
 * @LastEditors: Shen
 * @FilePath: /bhpmJS/frontend/src/pages/auctions/BiddingTitle.js
 */

import { H2 } from "../../components/Typography";

//import { Typography } from "@mui/material";

export default function BiddingTitle(props) {
  return (
    <div style={{ width: "100%" }}>
      <H2>
        Lot #{props.lotNum} {props.title}
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
