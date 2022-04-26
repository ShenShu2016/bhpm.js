import { Box, Container, styled } from "@mui/material";

import Navbar from "../../components/navbar/Navbar";
import React from "react";

export default function AboutUs() {

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
        <h1>服務項目</h1>
          <p>
          古代藝術品拍賣，藝術品鑒定，估價。
          </p>
          <br /><br />
        </Box>
      </InnerContainer>
    </>
  );
}
