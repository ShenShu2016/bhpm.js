import "@aws-amplify/ui-react/styles.css";

import { Route, Routes } from "react-router-dom";

import Lots from "./Lots";
import React from "react";

export default function LotsRouter() {
  return (
    <Routes>
      {/* <Route exact path="" element={<Authenticator />} /> */}
      <Route exact path="/:lotsID" element={<Lots />} />
    </Routes>
  );
}
