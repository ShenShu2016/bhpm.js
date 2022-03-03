import { Route, Routes } from "react-router-dom";

import Auctions from "./Auctions";
import Bidding from "./Bidding";
import BiddingTest from "./BiddingTest";
import React from "react";

export default function AuctionsRouter() {
  //console.log("AuctionsRouter");
  return (
    <>
      <Routes>
        <Route exact path="" element={<Auctions />} />
        <Route exact path="/bidding/:auctionsID" element={<Bidding />} />
        <Route
          exact
          path="/biddingTest/:auctionsID"
          element={<BiddingTest />}
        />
      </Routes>
    </>
  );
}
