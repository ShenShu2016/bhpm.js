/*
 * @Author: Shen Shu
 * @Date: 2022-04-18 00:03:49
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-25 21:47:04
 * @FilePath: \bhpmJS\frontend\src\pages\profile\MyCollection.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import React, { useEffect } from "react";
import {
  fetchMyCollection,
  selectAllMyCollection,
} from "../../redux/slice/myCollectionSlice";
import { useDispatch, useSelector } from "react-redux";

import BackdropLoading from "../../components/BackdropLoading";
import { H2 } from "../../components/Typography";
import SectionMyCollection from "../../components/fashion-shop/SectionMyCollection";

export default function MyCollection() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userAuth);
  const { fetchMyCollectionStatus } = useSelector(
    (state) => state.myCollection
  );

  useEffect(() => {
    if (isAuthenticated === true) {
      dispatch(
        fetchMyCollection({
          isAuthenticated,
        })
      );
    }
  }, [dispatch, isAuthenticated]);

  return (
    <>
      {fetchMyCollectionStatus === "succeeded" ? (
        <SectionMyCollection />
      ) : (
        <BackdropLoading />
      )}
    </>
  );
}
