import React, {useState} from 'react';
import {
    Nav,
    NavLink,
    Logo
} from './NavComponents';
import Button from "@material-ui/core/Button";
import {Menu, MenuItem, withStyles} from "@material-ui/core";
import styled from "styled-components"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const WhiteNavLink = styled(NavLink)`
    color: black;
  width: 100%;
`;

const ButtonStyled = styled(Button)`
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
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Nav position={props.positioning}>
                <NavLink to={"/home"}>  <Logo /> </NavLink>
                <NavLink to={"/checkEligibility"}> Check Eligibility</NavLink>
                <NavLink to={"/findAgency"} > Find agency</NavLink>
                <ButtonStyled aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Help <ArrowDropDownIcon/>
                </ButtonStyled>
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <StyledMenuItem onClick={handleClose}><WhiteNavLink to={"/help"}>FAQs</WhiteNavLink></StyledMenuItem>
                    <StyledMenuItem onClick={handleClose}><WhiteNavLink to={"/moreInfo"}> More information</WhiteNavLink></StyledMenuItem>
                </StyledMenu>
            </Nav>
        </div>
    );
};

export default NavBar;