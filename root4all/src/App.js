import React, {useLayoutEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Home from "./Home";
import Help from "./Help";
import About from "./About"
import FindAgency from "./FindAgency";
import Footer from "./Footer/Footer"
import CheckEligibility from "./CheckEligibility";
import { ThemeProvider } from '@material-ui/core/styles'
import Theme from "./Theme";

function ScrollToTop() {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}


function App() {

    return (
        <ThemeProvider theme={Theme}>
            <Router>
                <ScrollToTop />
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