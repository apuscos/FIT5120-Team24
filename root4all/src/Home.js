import React from 'react';
import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';
import image1 from "./Image/homePageImage.jpg"
const Disclaimer = styled.div`
  font-family: 'Lato', sans-serif;
  text-align: end;
  font-size: 0.8em;
`;
const Slogan = styled.div`
  display: flex;
  height: 60vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${image1});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  background-position: center;
  opacity: 0.9;
`;

const FindAgencyArea =  styled(Link)`
  width: 250px;
  height: 75px;
  background-color: #EEEEEE;
  margin-top: 50px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Bebas Neue", cursive;
  font-size: 2.5em;
  color: black;
  opacity: 1;
  &:hover{
    text-decoration: underline;
  }
`;

const SloganTextArea = styled.div`
  width: 80%;
  height: 80px;
  background-color: transparent;
  color: white;
  font-family: "Bebas Neue", cursive;
  font-size: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
`;

const StatArea = styled.div`
    height: 500px;
    background-color: red;
`;

function Home() {
    return (
        <div>
            <Slogan>
                <SloganTextArea> Experiencing homelessness or rough sleeping?</SloganTextArea>
                <SloganTextArea> Social Housing agencies are there to help and we can help you find one</SloganTextArea>

                <FindAgencyArea to={"/findAgency"}>Find Agency</FindAgencyArea>
            </Slogan>
            <StatArea/>
            <Disclaimer>The information provided here is on the basis of the information provided on the website</Disclaimer>
        </div>
);
}

export default Home;
