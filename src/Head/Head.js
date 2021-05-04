import React from "react";

import NavBar from "./Nav_bar";
import Home from "./Home";

const Head = () => {
  return (
    <header className="header-area">
      <div className="navgition navgition-transparent">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <NavBar />
            </div>
          </div>
        </div>
      </div>
      <Home />
    </header>
  );
};

export default Head;
