import styled from 'styled-components';
import "../font/font.css"
import SearchIcon from '@material-ui/icons/Search';


export const Area = styled.div`
  display: flex;
  height: 190px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 20px;
  background-color: transparent;
  width: 80%;
`;


export const TextArea = styled.div`
  height: 40%;
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 700;
  font-size: 2.2em;
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

export const SearchButton = styled(SearchIcon)`
  && {
    height: 30px;
    width: 30px;
    padding: 10px;
  }
  background-color: #a226a2;
  filter: invert(100%);
  cursor:pointer;
  &:hover {
    opacity: 0.75;
  }
`;

export const InputArea = styled.input`
  line-height: 1;
  width: 50%;
  height: 48px;
  border: none;
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 600;
  font-size: 1.25em;
  padding-left: 30px;
  &:focus {
    outline: none;
  }
`;
