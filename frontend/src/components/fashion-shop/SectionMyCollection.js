/*
 * @Author: Shen Shu
 * @Date: 2022-04-18 00:03:49
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-25 21:37:01
 * @FilePath: \bhpmJS\frontend\src\components\fashion-shop\SectionMyCollection.js
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
import MyCollectionCard1 from "../product-cards/MyCollectionCard1";
import React from "react";
import Stack from "@mui/material/Stack";
import { selectAllMyCollection } from "../../redux/slice/myCollectionSlice";
import { setAlert } from "../../redux/slice/generalSlice";

const SectionMyCollection = () => {
  //console.log(moreItems);
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.general.alert);
  const myCollections = useSelector(selectAllMyCollection);

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
      <CategorySectionHeader title="Your Collections" />
      {myCollections.length !== 0 ? (
        <Grid container spacing={3}>
          {myCollections.map((item, ind) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
              <MyCollectionCard1 off={25} hoverEffect item={item} />
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

export default SectionMyCollection;
