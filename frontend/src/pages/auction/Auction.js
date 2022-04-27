/*
 * @Author: Shen Shu
 * @Date: 2022-03-24 23:14:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-27 16:57:11
 * @FilePath: \bhpmJS\frontend\src\pages\auction\Auction.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import React, { useEffect } from "react";
import {
  fetchCategories,
  selectAllCategories,
} from "../../redux/slice/categorySlice";
import { useDispatch, useSelector } from "react-redux";

import { Typography } from "@mui/material";

export default function Auction() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userAuth);
  console.log(isAuthenticated);

  const categories = useSelector(selectAllCategories);

  useEffect(() => {
    if (isAuthenticated !== null) {
      dispatch(fetchCategories(isAuthenticated));
    }
  }, [dispatch, isAuthenticated]);
  return (
    <>
      <Typography variant="h5">Auctions</Typography>
      {categories &&
        categories.map((category) => (
          <Typography variant="body1" key={category.id}>
            {category.id}
          </Typography>
        ))}
    </>
  );
}
