/*
 * @Author: Yang Liu
 * @Date: 2022-03-24 23:18:13
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-29 13:49:39
 * @FilePath: \bhpmJS\frontend\src\pages\business_info\Services.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { Box, Container, styled } from "@mui/material";

import Navbar from "../../components/navbar/Navbar";
import React from "react";
import { useSelector } from "react-redux";

export default function AboutUs() {
  const { currentLanguage } = useSelector((state) => state.general.language);
  const InnerContainer = styled(Container)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  }));

  return (
    <>
      <Navbar />

      <InnerContainer
        sx={{
          justifyContent: "left",
        }}
      >
        <Box>
          <h1>
            {currentLanguage === "zh_hk" ? "服務項目" : "Service information"}
          </h1>
          <p>
            {currentLanguage === "zh_hk"
              ? "古代藝術品拍賣，藝術品鑒定，估價。"
              : "Ancient art auction, art appraisal, estimate."}
          </p>
          <br />
          <br />
        </Box>
      </InnerContainer>
    </>
  );
}
