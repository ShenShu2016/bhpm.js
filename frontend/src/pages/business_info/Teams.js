/*
 * @Author: Yang Liu
 * @Date: 2022-03-24 23:18:13
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-29 13:48:58
 * @FilePath: \bhpmJS\frontend\src\pages\business_info\Teams.js
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
            {currentLanguage === "zh_hk" ? "團隊介紹" : "Team information"}
          </h1>
          <p>
            {currentLanguage === "zh_hk"
              ? "創由考古專家，學者，以及多年收藏經驗的人士組成的團隊專業，嚴謹，真實，盡量做到每件拍品以其真實性展現給藝術愛好者。"
              : "The team composed of archeologists, scholars and people with many years of collecting experience is professional, rigorous and authentic. Trying to make every piece of the auction shows its authenticity to art lovers."}
          </p>
          <br />
          <br />
        </Box>
      </InnerContainer>
    </>
  );
}
