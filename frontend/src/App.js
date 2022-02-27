import { Route, Routes } from "react-router-dom";

import Amplify from "aws-amplify";
import AuctionsRouter from "./pages/auctions/AuctionsRouter";
import AuthRouter from "./pages/auth/AuthRouter";
import Home from "./pages/home/Home";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

export default function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route path="auctions/*" element={<AuctionsRouter />} />
        <Route path="auth/*" element={<AuthRouter />} />
      </Routes>
    </>
  );
}
