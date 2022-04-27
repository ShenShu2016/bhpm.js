/*
 * @Author: Shen Shu
 * @Date: 2022-04-02 21:31:20
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-04-27 10:38:23
 * @FilePath: \bhpmJS\frontend\src\pages\lots\Lots.js
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

export default function Lots() {
  const dispatch = useDispatch();
  const { lotsID } = useParams();

  const { isAuthenticated } = useSelector((state) => state.userAuth);

  useEffect(() => {
    if (isAuthenticated !== null) {
      dispatch(
        selectedLot({
          isAuthenticated,
          lotsID,
        })
      );
    }
  }, [dispatch, isAuthenticated, lotsID]);
  const product = useSelector((state) => selectLotById(state, lotsID));

  return <>{product ? <ProductIntro product={product} /> : <Loading />}</>;
}
