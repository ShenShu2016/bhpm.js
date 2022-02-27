import { Route, Routes } from "react-router-dom";

import Amplify from "aws-amplify";
import AuctionsRouter from "./pages/auctions/AuctionsRouter";
import AuthRouter from "./pages/auth/AuthRouter";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import MuiTheme from "./theme/MuiTheme";
import Topbar from "./components/topbar/Topbar";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

export default function App() {
  return (
    <MuiTheme>
      <Topbar />
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route path="auctions/*" element={<AuctionsRouter />} />
        <Route path="auth/*" element={<AuthRouter />} />
      </Routes>
      <Footer />
    </MuiTheme>
  );
}
