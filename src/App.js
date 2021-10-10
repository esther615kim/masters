import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from './Home';
import FindService from './FindService';
import Header from './components/commons/Header.js';
import Footer from "./components/Footer";


function App() {
  return (
    <Suspense fallback={(<div>~Loading~</div>)}>
      <Header />
      {/* <Home /> */}
      <FindService />
      <Footer />
    </Suspense>

    // <div>
    //   <Service />
    //   <RequestForm />
    //   <Review />
    //   <Footer />
    // </div>
  );
}

export default App;