import "@aws-amplify/ui-react/styles.css";

import { Route, Routes } from "react-router-dom";

import { Authenticator } from "@aws-amplify/ui-react";
import React from "react";
export default function AuthRouter() {
  return (
    <Routes>
      <Route exact path="" element={<Authenticator />} />
    </Routes>
  );
}
