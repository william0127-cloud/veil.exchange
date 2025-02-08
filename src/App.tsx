import React from "react";
import Navbar from "./layout/Navbar.tsx";
import Home from "./pages/Home.tsx";
import Footer from "./layout/Footer.tsx";
import "./assets/css/main.css";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FAQs from "./pages/FAQs.tsx";
import UtilityToken from "./pages/UtilityToken.tsx";
import RevenueShare from "./pages/RevenueShare.tsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/faqs" element={<FAQs></FAQs>}></Route>
          <Route path="/token" element={<UtilityToken></UtilityToken>}></Route>
          <Route
            path="/revenue-share"
            element={<RevenueShare></RevenueShare>}
          ></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
