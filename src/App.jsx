import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";

import "./App.scss";

function App() {
  const [pizza, setPizza] = useState({ bass: "", topping: [] });

  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </>
  );
}
export default App;
