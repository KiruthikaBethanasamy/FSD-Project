import React from "react";
import "./App.css";

import { Home } from "./pages/Home";
import  AdminLogin  from "./pages/Adminn";
import {Signup } from "./pages/Signup";
import  View2  from "./pages/View2";
import  View1  from "./pages/View1";
import { Contact } from "./pages/Contact";
import { Locations } from "./pages/Locations";
import MainPage from "./pages/View"
import TouristEvents  from "./pages/Events";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Book } from "./pages/Book";
import  CabService  from "./pages/Travels";
import { Dubai } from "./pages/locations/Dubai/Dubai";
import { Himachal } from "./pages/locations/Himachal/Himachal";
import { Goa } from "./pages/locations/Goa/Goa";
import { Maldives } from "./pages/locations/Maldives/Maldives";
import { Thailand } from "./pages/locations/Thailand/Thailand";
import { Rajasthan } from "./pages/locations/Rajasthan/Rajasthan";
import { Kerala } from "./pages/locations/Kerala/Kerala";
import { Error } from "./pages/Error";
import { Delhi } from "./pages/locations/Delhi/Delhi";
import  LoginPage  from "./pages/Clogin";
import { RegisterPage }  from "./pages/Signup1";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminn" element={<AdminLogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/view" element={<MainPage />} />
          <Route path="/travels" element={<CabService />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/events" element={<TouristEvents />} />
          <Route path="/locations/dubai" element={<Dubai />} />
          <Route path="/locations/himachal" element={<Himachal />} />
          <Route path="/locations/goa" element={<Goa />} />
          <Route path="/locations/maldives" element={<Maldives />} />
          <Route path="/locations/thailand" element={<Thailand />} />
          <Route path="/locations/rajasthan" element={<Rajasthan />} />
          <Route path="/locations/kerala" element={<Kerala />} />
          <Route path="/locations/delhi" element={<Delhi />} />
          <Route path="/view2" element={<View2 />} />
          <Route path="/view1" element={<View1 />} />
          <Route path="/clogin" element={<LoginPage />} />
          <Route path="/signup1" element={<RegisterPage />} />
        
        <Route path="*" element={<Error/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;