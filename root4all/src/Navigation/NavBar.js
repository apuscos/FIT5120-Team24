import React from 'react';
import {
    Nav,
    NavLink
} from './NavComponents';
import styled from "styled-components";
import logo from "../Image/logo.webp";


const Logo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 60px;
  width: 175px;
`;

const NavBar = (props) => {
    return (
        <div>
            <Nav position={props.positioning}>
                <NavLink to={"/home"}>  <Logo /> </NavLink>
                <NavLink to={"/home"}> Home</NavLink>
                <NavLink to={"/findAgency"} > Find agency</NavLink>
                <NavLink to={"/checkEligibility"}> Check Eligibility</NavLink>
                <NavLink to={"/help"}> FAQs</NavLink>
            </Nav>
        </div>
    );
};

export default NavBar;