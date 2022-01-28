import { React, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Header from "./Components/1Header";
import Select from './Components/2Select';
import Delivered from "./Components/3Delivered";
import Trade from "./Components/4Trade";
import Customers from "./Components/6Customers";
import Footer from "./Components/7Footer";
import './style.css'

function App() {

  return (
    <div>

      <Header />
      <Select />
      <Delivered />
      <Trade />
      <Customers />
      <Footer />

    </div>
  )

}

export default App;
