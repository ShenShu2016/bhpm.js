/*
 * @Author: Shen Shu
 * @Date: 2022-04-18 00:03:49
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-26 15:37:11
 * @FilePath: \bhpmJS\frontend\src\components\fashion-shop\SectionMyFavorite.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/material/Button";
import CategorySectionHeader from "../CategorySectionHeader";
import { H3 } from "../Typography";
import { Link } from "react-router-dom";
import MyFavoriteCard1 from "../product-cards/MyFavoriteCard1";
import React from "react";
import Stack from "@mui/material/Stack";
import { selectAllMyFavorite } from "../../redux/slice/myFavoriteSlice";
import { setAlert } from "../../redux/slice/generalSlice";

const SectionMyFavorite = () => {
  //console.log(moreItems);
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.general.alert);
  const myFavorites = useSelector(selectAllMyFavorite);

  const toggleAlert = async () => {
    if (alert === false) {
      dispatch(setAlert());
    }
  };
  return (
    <Container
      sx={{
        mt: "35px",
        mb: "70px",
      }}
    >
      <CategorySectionHeader title="Your Favorites" />
      {myFavorites.length !== 0 ? (
        <Grid container spacing={3}>
          {myFavorites.map((item, ind) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
              <MyFavoriteCard1 off={25} hoverEffect item={item} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Link to={`/`}>
            <H3
              className="title"
              fontSize="16px"
              textAlign="left"
              fontWeight="600"
              color="secondary.main"
              mb={1}
              mt={1}
            >
              Empty! Go to collect your favorites!
            </H3>
          </Link>
          <Button
            disabled={alert}
            variant="outlined"
            onClick={() => {
              toggleAlert();
            }}
          >
            Toggle Alert
          </Button>
        </Stack>
      )}
    </Container>
  );
};

export default SectionMyFavorite;
