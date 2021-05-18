import React, {useEffect, useState} from 'react';
import {
    Nav,
    NavLink,
    Logo
} from './NavComponents';
import { useLocation } from 'react-router-dom'
import {Menu, MenuItem, withStyles} from "@material-ui/core";
import styled from "styled-components"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const WhiteNavLink = styled(NavLink)`
    color: black;
  width: 100%;
`;

const ButtonStyled = styled.div`
  
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: 'Baloo Bhai 2', cursive;
    font-weight: 700;
    font-size: 22px;
    color: white;
    text-transform: none;
    &:hover{
      text-decoration: underline;
    }
  text-decoration: ${props => props.current ? "underline" : "none"};
  
`;

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const NavBar = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentPage, setCurrentPage] = useState("");
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const location = useLocation();
    useEffect(() => {
        setCurrentPage(location.pathname);
    },[location.pathname])

    return (
        <div>
            <Nav position={props.positioning}>
                <NavLink to={"/home"}>  <Logo /> </NavLink>
                <NavLink to={"/checkEligibility"} current={currentPage === "/checkEligibility"}> Check Eligibility</NavLink>
                <NavLink to={"/findAgency"} current={currentPage === "/findAgency"}> Find agency</NavLink>
                <ButtonStyled aria-haspopup="true" onClick={handleClick} current={currentPage === "/help" || currentPage === "/moreInfo" || currentPage === "/CHSs" || currentPage === "/AgedProgram" || currentPage === "/AdviserContactDetails" || currentPage === "/HelpLine"}>
                    Help <ArrowDropDownIcon/>
                </ButtonStyled>
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <StyledMenuItem onClick={handleClose}><WhiteNavLink to={"/help"} current={currentPage === "/help"}>FAQs</WhiteNavLink></StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}><WhiteNavLink to={"/moreInfo"} current={currentPage === "/moreInfo" || currentPage === "/CHSs" || currentPage === "/AgedProgram" || currentPage === "/AdviserContactDetails" || currentPage === "/HelpLine"}> More information</WhiteNavLink></StyledMenuItem>
                </StyledMenu>
            </Nav>
        </div>
    );
};

export default NavBar;