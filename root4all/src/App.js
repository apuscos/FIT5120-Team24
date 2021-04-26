import React, {useLayoutEffect, Suspense, lazy} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from "./Footer/Footer"
import { ThemeProvider } from '@material-ui/core/styles'
import Theme from "./Theme";
import { useLocation } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const FindAgency = lazy(() => import("./FindAgency"));
const Help = lazy(() => import("./Help"));
const About = lazy(() => import("./About"));
const CheckEligibility = lazy(() => import("./CheckEligibility"));

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
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/home' exact component={Home} />
                        <Route path={"/findAgency"} exact component={FindAgency}/>
                        <Route path='/help' exact component={Help} />
                        <Route path='/about' exact component={About} />
                        <Route path='/checkEligibility' exact component={CheckEligibility} />
                    </Switch>
                    <Footer />
                </Suspense>
            </Router>
        </ThemeProvider>
    );
}

export default App;