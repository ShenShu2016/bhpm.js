import React, { useEffect } from "react";
import { selectLotsById, selectedLots } from "../../redux/slice/lotsSlice";
import { useDispatch, useSelector } from "react-redux";

import { H2 } from "../../components/Typography";
import ProductIntro from "../../components/products/ProductIntro";
import { useParams } from "react-router-dom";

export default function Lots() {
  const dispatch = useDispatch();
  const { lotsID } = useParams();

  const { isAuthenticated } = useSelector((state) => state.userAuth);

  useEffect(() => {
    if (isAuthenticated !== null) {
      dispatch(
        selectedLots({
          isAuthenticated,
          lotsID,
        })
      );
    }
  }, [dispatch, isAuthenticated, lotsID]);
  const product = useSelector((state) => selectLotsById(state, lotsID));

  return (
    <>{product ? <ProductIntro product={product} /> : <H2>Loading...</H2>}</>
  );
}
