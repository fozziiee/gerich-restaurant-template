import React from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Intro />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Gallery />
      <Laurels />
      <FindUs />
      <Footer />
    </div>
  );
};

export default App;
