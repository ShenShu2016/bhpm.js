
import React, { useEffect } from "react";
import { fetchLotss } from "../../redux/slice/lotsSlice";
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
        <h1>團隊介紹</h1>
          <p>
           創由考古專家，學者，以及多年收藏經驗的人士組成的團隊專業，嚴謹，真實，盡量做到每件拍品以其真實性展現給藝術愛好者。
          </p>
          <br /><br />
        </Box>
      </InnerContainer>

      <Section12 />
    </>
  );
}
