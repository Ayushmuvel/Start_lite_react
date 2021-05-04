import React from "react";

import Nav_bar from "./Nav_bar";
import Home from "./Home";

const Head = () => {
  return (
    <header className="header-area">
      <div className="navgition navgition-transparent">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Nav_bar />
            </div>
          </div>
        </div>
      </div>
      <Home />
    </header>
  );
};

export default Head;
