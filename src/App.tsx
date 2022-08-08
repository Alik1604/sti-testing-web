import React from "react";

import "./App.scss";
import InsurenceList from "./components/InsurenceList";
import Header from "./components/Line";
import { NavBar } from "./components/NavBar";
import BoxesScreen from "./components/screens/BoxesScreen";
import ContactScreen from "./components/screens/ContactScreen";
import InfoScreen from "./components/screens/InfoScreen";
import MainSreen from "./components/screens/MainSreen";
import MissionScreen from "./components/screens/MissionScreen";
import SliderScreen from "./components/screens/SliderScreen";
import SocialScreen from "./components/screens/SocialScreen";

function App() {
  return (
    <>
      <div className="sticky top-0  w-[100%] z-10">
        <Header />
        <NavBar />
      </div>
      <MainSreen />
      <InsurenceList />
      <MissionScreen />
      <SliderScreen />
      <BoxesScreen />
      <ContactScreen />
      <SocialScreen />
      <InfoScreen />
    </>
  );
}

export default App;
