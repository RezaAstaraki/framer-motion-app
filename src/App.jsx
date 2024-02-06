import { useState } from "react";

import Header from "./components/header/Header";
import Home from "./components/home/Home";

import "./App.scss";

function App() {
  const [pizza, setPizza] = useState({ bass: "", topping: [] });

  return (
    <>
      <Header />

      <Home />
    </>
  );
}
export default App;
