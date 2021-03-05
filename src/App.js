import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTab";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import Contact from "./components/pages/Contact";

function App() {

    return (
        <Router>
            <div>
                <NavTabs />
                <Route exact path="/" component={Home}/>
                <Route exact path="/search" component={Search}/>
                <Route exact path="/contact" component={Contact}/>
            </div>
        </Router>
    );
};

export default App;