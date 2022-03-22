
import React, { useEffect } from "react";
import { fetchLotss} from "../../redux/slice/lotsSlice";
import { useDispatch, useSelector } from "react-redux";

import { Box, Container, styled } from "@mui/material";

import Navbar from "../../components/navbar/Navbar";
import Section12 from "../../components/superstore-shop/Section12";

export default function AboutUs() {
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
        <Box >
        <h1>寶華介紹</h1>
          <p>
           創始人具有多年亞洲藝術品收藏經驗，通過對藝術品非常嚴謹的判斷和學習，得到歐美和亞洲收藏界以及國際亞洲藝術經紀的認可，
           其收藏涵蓋高古玉器，瓷器，家具，書畫等等，其傾註熱情和心血搭建了寶華拍賣平臺，
           旨在給收藏愛好者提供良好的交流環境，促進亞洲藝術在全世界的傳播。
          </p>
          <br /><br />
        </Box>
      </InnerContainer>

      <Section12 />
    </>
  );
}
