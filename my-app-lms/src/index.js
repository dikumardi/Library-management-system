import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';

import { AppProvider } from "./context.";
import "./index.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import BookList from "./Components/BookList/BookList";
import BookDetails from "./Components/BookDetails/BooksDetails";
import LoginSignup from './Components/LoginSignup/LoginSignup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<LoginSignup />}/>
        <Route path = "/" element = {<LoginSignup />}/>  {/* //sign */}
        <Route path = "/" element = {<LoginSignup />}/>  {/* //Home */}
          <Route path = "about" element = {<About />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

