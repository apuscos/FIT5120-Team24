import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../Image/logo.webp"
import "../font/font.css"


export const Nav = styled.nav`
  background-color: ${props => props.position ? "rgba(0, 0, 0, 0.9)" :"rgba(0, 0, 0)" };;
  height: 85px;
  width: 70%;
  display: flex;
  padding-left: 15%;
  padding-right: 15%;
  justify-content: space-between;
  align-items: center;
  z-index: 12;
  position: ${props => props.position || "static"};
  top: 0px;
  left: 0px;
`;

export const NavLink = styled(Link)`
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
  &:hover{
    text-decoration: underline;
  }
`;
export const Logo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 60px;
  width: 175px;
  
`;





