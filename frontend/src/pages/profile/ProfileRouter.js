import "@aws-amplify/ui-react/styles.css";

import { Route, Routes } from "react-router-dom";

import MyCollection from "./MyCollection";
import Profile from "./Profile";
import ProfileCreator from "./ProfileCreator";
import React from "react";

export default function ProfileRouter() {
  return (
    <Routes>
      <Route exact path="" element={<Profile />} />
      <Route exact path="/create" element={<ProfileCreator />} />
      <Route exact path="/MyCollection" element={<MyCollection/>} />
    </Routes>
  );
}
