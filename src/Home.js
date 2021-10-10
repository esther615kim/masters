import React from 'react'

//NR
import Search from './components/MainPage/Search.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LocalMaster from './components/MainPage/LocalMaster.js';
import FindMaster from './components/FindMasterPage/SearchCategory.js';

//SuZzie
import Popular from "./components/cards/Popular";
import Magazine from "./components/cards/Magazine";
// import Tips from "./components/cards/Tips";
import Hidden from "./components/cards/Hidden";

//효효
import RequestForm from "./components/RequestForm";
import Review from "./components/Review";
import Service from "./components/Service";


function Home() {
    return (
        <div>

            <Switch>
                <Route path='/findmaster' component={FindMaster} />
                <div style={{ paddingTop: '190px', paddingLeft: '123px', minHeight: 'calc(100vh - 80px)' }}>
                    <Search />
                </div>
            </Switch>
            {/* cards */}
            <Popular />
            <Hidden />
            <Magazine />
            <LocalMaster />
        </div>
    )
}

export default Home;
