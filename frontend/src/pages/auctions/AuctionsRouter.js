import { Route, Routes } from "react-router-dom";

import Auctions from "./Auctions";
import BiddingTest from "./BiddingTest";
import React from "react";

export default function AuctionsRouter() {
  return (
    <>
      <Routes>
        <Route exact path="" element={<Auctions />} />

        <Route exact path="/bidding/:auctionsID" element={<BiddingTest />} />
      </Routes>
    </>
  );
}
