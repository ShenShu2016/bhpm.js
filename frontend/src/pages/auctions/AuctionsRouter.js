import { Route, Routes } from "react-router-dom";

import Auctions from "./Auctions";
import React from "react";

export default function AuctionsRouter() {
  console.log("AuctionsRouter");
  return (
    <>
      <Routes>
        <Route exact path="" element={<Auctions />} />
      </Routes>
    </>
  );
}
