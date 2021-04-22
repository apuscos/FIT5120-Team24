import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Home";
import Help from "./Help";
import About from "./About"
import FindAgency from "./FindAgency";
import Footer from "./Footer/Footer"
import CheckEligibility from "./CheckEligibility";
import { ThemeProvider } from '@material-ui/core/styles'
import Theme from "./Theme";



function App() {
    return (
        <ThemeProvider theme={Theme}>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/home' exact component={Home} />
                    <Route path={"/findAgency"} exact component={FindAgency}/>
                    <Route path='/help' exact component={Help} />
                    <Route path='/about' exact component={About} />
                    <Route path='/checkEligibility' exact component={CheckEligibility} />
                </Switch>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;