import React, { useEffect } from "react";
import {
  fetchCategories,
  selectAllCategories,
} from "../../redux/slice/categorySlice";
import { useDispatch, useSelector } from "react-redux";

import { Typography } from "@mui/material";

export default function Auctions() {
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
