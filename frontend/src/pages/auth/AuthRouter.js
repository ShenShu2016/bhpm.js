import "@aws-amplify/ui-react/styles.css";

import { Route, Routes } from "react-router-dom";

import { Authenticator } from "@aws-amplify/ui-react";
import EmailConfirm from "./EmailConfirm";
import ForgetPassword from './ForgetPassword';
import ResetPassword from "./ResetPassword";
import LoginPage from "./login";
import React from "react";
import SignUp from "./SignUp";

export default function AuthRouter() {
  return (
    <Routes>
      <Route exact path="" element={<Authenticator />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/signUp" element={<SignUp />} />
      <Route exact path="/forgotPassword" element={<ForgetPassword />}/>
      <Route exact path="/forgotUsername" />
      <Route exact path="/resendConfirmationCode" />
      <Route exact path="/resetPassword" element={<ResetPassword />}/>
      <Route exact path="/emailConfirm/:username" element={<EmailConfirm />} />
    </Routes>
  );
}
