import React from 'react';
import Navbar from "./Navigation/Nav"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Home";
import Help from "./Help";
import About from "./About"
import FindAgency from "./FindAgency";


function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/home' exact component={Home} />
                <Route path={"/findAgency"} exact component={FindAgency}/>
                <Route path='/help' exact component={Help} />
                <Route path='/about' exact component={About} />
            </Switch>
        </Router>
    );
}

export default App;