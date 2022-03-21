
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
         <h1>宝华介绍</h1>
          <p>
           创始人具有多年亚洲艺术品收藏经验，通过对艺术品非常严谨的判断和学习，得到欧美和亚洲收藏界以及国际亚洲艺术经纪的认可，
           其收藏涵盖高古玉器，瓷器，家具，书画等等，其倾注热情和心血搭建了宝华拍卖平台，
           旨在给收藏爱好者提供良好的交流环境，促进亚洲艺术在全世界的传播。
          </p>
          <br /><br />
        </Box>
      </InnerContainer>

      <Section12 />
    </>
  );
}
