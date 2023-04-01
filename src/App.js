import "./app.scss";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/footer/Footer";
import TopBar from "./components/topbar/TopBar";
import Contact from "./pages/contact/Contact";
import Exhibit from "./pages/exhibit/Exhibit";
import Schedule from "./pages/schedule/Schedule";
import Sponsors from "./pages/sponsors/Sponsors";
import Home from "./pages/home/Home";

import {ThemeContextProvider} from './contexts/ThemeContext'
import splash_screen from './assets/imgs/splash_screen.jpg'
import { useEffect } from "react";
import { useState } from "react";
import Sessions from "./pages/schedule/sessions/Sessions";

function AppMain() {

  return (
    <div>
        <TopBar />
        <div
        className="app-cont">
          <div
          className="app-cont-center">
          <Routes>
            <Route path="/">
              <Route index element={
                  <Home />
                } />
              <Route path='contact'>
                <Route
                index 
                element={
                    <Contact />
                } 
                />
              </Route>
              <Route path='exhibit'>
                <Route
                index 
                element={
                    <Exhibit />
                } 
                />
              </Route>
              <Route path='home'>
                <Route
                index 
                element={
                    <Home />
                } 
                />
              </Route>
              <Route path='schedule'>
                <Route
                index 
                element={
                    <Schedule />
                } 
                />
                <Route path="sessions" element={<Sessions />}   />
              </Route>
              <Route path='sponsors'>
                <Route
                index 
                element={
                    <Sponsors />
                } 
                />
              </Route>
            </Route>
          </Routes>
          </div>
        </div>
        <Footer />
    </div>
  );
}

const App = () => {
  return (
    <ThemeContextProvider>
        <BrowserRouter>        
          <AppMain />
        </BrowserRouter>
    </ThemeContextProvider>
  )
}


export default App;
