/*
 * @Author: Shen Shu
 * @Date: 2022-04-18 00:03:49
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-26 15:29:06
 * @FilePath: \bhpmJS\frontend\src\pages\profile\MyFavorite.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import BackdropLoading from "../../components/BackdropLoading";
import SectionMyFavorite from "../../components/fashion-shop/SectionMyFavorite";
import { fetchMyFavorite } from "../../redux/slice/myFavoriteSlice";

export default function MyFavorite() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userAuth);
  const { fetchMyFavoriteStatus } = useSelector((state) => state.myFavorite);

  useEffect(() => {
    if (isAuthenticated === true) {
      dispatch(
        fetchMyFavorite({
          isAuthenticated,
        })
      );
    }
  }, [dispatch, isAuthenticated]);

  return (
    <>
      {fetchMyFavoriteStatus === "succeeded" ? (
        <SectionMyFavorite />
      ) : (
        <BackdropLoading />
      )}
    </>
  );
}
