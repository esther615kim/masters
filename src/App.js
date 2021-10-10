import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from './Home';
//NR
import Header from './components/commons/Header.js';
// import Search from './components/MainPage/Search.js';
// import LocalMaster from './components/MainPage/LocalMaster.js';
// import FindMaster from './components/FindMasterPage/SearchCategory.js';

//SuZzie
// import Popular from "./components/cards/Popular";
// import Magazine from "./components/cards/Magazine";
// // import Tips from "./components/cards/Tips";
// import Hidden from "./components/cards/Hidden";

//효효
import Footer from "./components/Footer";
// import Information from "./component/Information";
// import RequestForm from "./components/RequestForm";
// import Review from "./components/Review";
// import Service from "./components/Service";


function App() {
  return (
    <Suspense fallback={(<div>~Loading~</div>)}>
      <Header />
      <Home />
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