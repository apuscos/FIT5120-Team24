import React from 'react';
import {
    Nav,
    NavLink,
    Logo
} from './NavComponents';

const NavBar = (props) => {
    return (
        <>
            <Nav position={props.positioning}>
                <NavLink to={"/home"}> <Logo/></NavLink>
                <NavLink to={"/home"}> Home</NavLink>
                <NavLink to={"/findAgency"} > Find agency</NavLink>
                <NavLink to={"/checkEligibility"}> Check Eligibility</NavLink>
                <NavLink to={"/help"}> FAQ</NavLink>
            </Nav>
        </>
    );
};

export default NavBar;