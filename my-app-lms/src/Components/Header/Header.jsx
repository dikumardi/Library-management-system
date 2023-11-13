import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import './Header.css';

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          {/* <h1 className="header-title text-capitalize">CUTM Libarary where you can find all the books!.</h1> */}
<h1 className="header-text fs-18 fw-3">
"Education is the compass, but you are the navigator. Chart your own course, embrace curiosity, and let your learning be a journey uniquely yours."!</h1>
          {/* <p className="header-text fs-18 fw-3">
          "Learning is the compass that guides us through the ever-expanding landscapes of knowledge, helping us discover new horizons and navigate the challenges of life."
          </p> */}
          <SearchForm />

        </div>
      </header>
    </div>
  );
};

export default Header;
