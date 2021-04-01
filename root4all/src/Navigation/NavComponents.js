import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../Image/logo.png"
import "../font/font.css"


export const Nav = styled.nav`
  background: transparent;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: "Bebas Neue", cursive;
  font-size: 1.25rem;
  color: black;
  &:hover{
    text-decoration: underline;
  }
`;
export const Logo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: auto;
  height: 60px;
  width: 175px;
`;





