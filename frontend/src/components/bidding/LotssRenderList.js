/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-23 00:43:39
 * @FilePath: \bhpmJS\frontend\src\components\bidding\LotssRenderList.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { Box, Container, Typography } from "@mui/material";

import React from "react";

export default function lotssRenderList({ lotss }) {
  return (
    <div>
      <Container
        sx={{
          borderStyle: "solid",
          display: "flex",
          flexWrap: "wrap",
          margin: "auto",
          justifyContent: "space-around",
        }}
      >
        {lotss &&
          lotss.map((lotItem) => {
            return (
              <Box sx={{ width: "400px" }} key={lotItem.id}>
                <Typography variant="h5" sx={{ whiteSpace: "pre-wrap" }}>
                  lot number: {lotItem.lot}
                </Typography>
                {/* <Typography variant="body1"> */}
                <Typography variant="body1">
                  {JSON.stringify(lotItem, 1, 2)}
                </Typography>
                {/* </Typography> */}
                {/* <Typography variant="body1">
                        startingPrice: {lotItem.startingPrice}
                      </Typography>
                      <Typography variant="body1">
                        estimatedPriceMin: {lotItem.estimatedPriceMin}
                      </Typography>
                      <Typography variant="body1">
                        estimatedPriceMax: {lotItem.estimatedPriceMax}
                      </Typography>
                      <Typography variant="body1">
                        status: {lotItem.lotsStatus}
                      </Typography>
                      <Typography variant="body1">
                        name: {lotItem.auctionItem.name}
                      </Typography>
                      <Typography variant="body1">
                        title: {lotItem.auctionItem.title}
                      </Typography>
                      <Typography variant="body1">
                        description: {lotItem.auctionItem.description}
                      </Typography>
                      <Typography variant="body1">
                        categoryID: {lotItem.auctionItem.categoryID}
                      </Typography>  */}
                <img
                  src={lotItem.auctionItem.imgUrl}
                  alt={lotItem.auctionItem.name}
                  style={{ width: "360px" }}
                />
              </Box>
            );
          })}
      </Container>
    </div>
  );
}
