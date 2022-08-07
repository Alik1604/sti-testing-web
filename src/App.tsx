import React from "react";

import "./App.scss";
import InsurenceList from "./components/InsurenceList";
import Header from "./components/Line";
import { NavBar } from "./components/NavBar";
import BoxesScreen from "./components/screens/BoxesScreen";
import MainSreen from "./components/screens/MainSreen";
import MissionScreen from "./components/screens/MissionScreen";
import SliderScreen from "./components/screens/SliderScreen";

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
    </>
  );
}

export default App;
