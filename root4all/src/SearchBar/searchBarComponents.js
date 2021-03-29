import styled from 'styled-components';
import "../font/font.css"
import searchIcon from "../Image/search.png";


export const Area = styled.div`
  display: flex;
  height: 200px;
  align-items: center;
  justify-content: center;
  background: #e3e3e3;
  flex-direction: column;
`;

export const TextArea = styled.div`
  height: 40%;
  width: 500px;
  font-family: "Bebas Neue", cursive;
  font-size: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SearchArea = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -20px;
`;

export const SearchButton = styled.button`
  background-image: url(${searchIcon});
  background-size: 25px 25px;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  height: 75px;
  width: 75px;
  background-color: white;
  filter: invert(100%);
  cursor:pointer;
  &:hover {
    opacity: 0.75;
  }
`;

export const InputArea = styled.input`
  line-height: 1;
  width: 50%;
  height: 75px;
  border: none;
  font-family: 'Lato', sans-serif;
  font-size: 1.25em;
  padding-left: 30px;
  &:focus {
    outline: none;
  }
`;
