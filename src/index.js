import React from "react";
import reactDom from "react-dom";

import Header from "./Head/Head";
import Service from "./service/Service";
import Pricing from "./pricing/Pricing";
import Call_to_action from "./call_to_action/Call_to_action";
import Content from "./content/Content";
import Footer from "./Footer/Footer";

const Index = () => {
  return (
    <div>
      <Header />
      <Service />
      <Pricing />
      <Call_to_action />
      <Content />
      <Footer />
    </div>
  );
};

reactDom.render(<Index />, document.getElementById("root"));
