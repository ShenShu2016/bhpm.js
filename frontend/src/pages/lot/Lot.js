/*
 * @Author: Shen Shu
 * @Date: 2022-04-02 21:31:20
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-27 16:52:20
 * @FilePath: \bhpmJS\frontend\src\pages\lot\Lot.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import React, { useEffect } from "react";
import { selectLotById, selectedLot } from "../../redux/slice/lotSlice";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../../components/Loading";
import ProductIntro from "../../components/products/ProductIntro";
import { useParams } from "react-router-dom";

export default function Lot() {
  const dispatch = useDispatch();
  const { lotId } = useParams();

  const { isAuthenticated } = useSelector((state) => state.userAuth);

  useEffect(() => {
    if (isAuthenticated !== null) {
      dispatch(
        selectedLot({
          isAuthenticated,
          lotId,
        })
      );
    }
  }, [dispatch, isAuthenticated, lotId]);
  const product = useSelector((state) => selectLotById(state, lotId));

  return <>{product ? <ProductIntro product={product} /> : <Loading />}</>;
}
