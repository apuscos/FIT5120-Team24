import React from 'react';
import {
    Nav,
    NavLink,
    Logo
} from './NavComponents';

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to={"/home"}> <Logo/></NavLink>
                <NavLink to={"/home"}> Home</NavLink>
                <NavLink to={"/findAgency"} > Find agency</NavLink>
                {/*<NavLink to={"/help"}> Help</NavLink>*/}
                <NavLink to={"/about"}> About</NavLink>
            </Nav>
        </>
    );
};

export default NavBar;