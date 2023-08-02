import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import ContentSectionA from "./components/ContentSectionA";
import ContentSectionB from "./components/ContentSectionB";
import ContentSectionC from "./components/ContentSectionC";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      {/* Navigation*/}
        <Navigation />
      {/* Header*/}
        <Header />
      {/* Content section 1*/}
        <ContentSectionA />
      {/* Content section 2*/}
        <ContentSectionB />
      {/* Content section 3*/}
        <ContentSectionC />
      {/* Footer*/}
        <Footer />
    </>
  )
};

export default App;