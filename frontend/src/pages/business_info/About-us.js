/*
 * @Author: Yang Liu
 * @Date: 2022-03-24 23:18:13
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-29 13:59:59
 * @FilePath: \bhpmJS\frontend\src\pages\business_info\About-us.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { Box, Container, styled } from "@mui/material";

import BackToPrePageButton from "../../components/BackToPrePageButton";
import Navbar from "../../components/navbar/Navbar";
import React from "react";
import { useSelector } from "react-redux";

//import Section12 from "../../components/superstore-shop/Section12";

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
            {currentLanguage === "zh_hk"
              ? "寶華介紹"
              : "Bowell Gemology Inc. information"}
          </h1>
          <p>
            {currentLanguage === "zh_hk"
              ? "創始人具有多年亞洲藝術品收藏經驗，通過對藝術品非常嚴謹的判斷和學習，得到歐美和亞洲收藏界以及國際亞洲藝術經紀的認可，其收藏涵蓋高古玉器，瓷器，家具，書畫等等，其傾註熱情和心血搭建了寶華拍賣平臺，旨在給收藏愛好者提供良好的交流環境，促進亞洲藝術在全世界的傳播。"
              : "Founders have many years of experience in Asian art collection. Through years of very precise judgment and learning it has been recognized by collectors in Europe, America and Asia as well as international Asian art brokers. The collection covers ancient jade, porcelain, furniture, painting and calligraphy, and so on. With the passion he has been set up a platform which aims to provide good communication environment for collect lover and to promote the spread of Asian art throughout the world."}
          </p>
          <br />
          <br />
        </Box>
      </InnerContainer>
    </>
  );
}
