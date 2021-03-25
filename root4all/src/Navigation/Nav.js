import React from 'react';
import {
    Nav,
    NavLink,
} from './NavComponents';

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to={"/home"}> Home</NavLink>
                <NavLink to={"/findAgency"} > Find agency</NavLink>
                <NavLink to={"/help"}> Help</NavLink>
            </Nav>
        </>
    );
};

export default NavBar;