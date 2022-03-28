import "@aws-amplify/ui-react/styles.css";

import { Route, Routes } from "react-router-dom";

import Profile from "./Profile";
import ProfileEditor from "./ProfileEditor";
import React from "react";

export default function ProfileRouter() {
  return (
    <Routes>
      <Route exact path="" element={<Profile />} />
      <Route exact path="/edit" element={<ProfileEditor />} />
    </Routes>
  );
}