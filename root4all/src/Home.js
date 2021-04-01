import React from 'react';
import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';
import image1 from "./Image/homePageImage.jpg"
import statImage1 from "./Image/statImage1.png"
import statImage2 from "./Image/statImage2.JPG"
import statImage3 from "./Image/statImage3.JPG"
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
  width: 90vw;
  height: 120px;
  background-color: transparent;
  color: white;
  font-family: "Bebas Neue", cursive;
  font-size: 3.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
`;

const StatArea = styled.div`
    height: 500px;
    background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StateSection = styled.div`
  width: 30vw;
  height: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StateImage = styled.div`
  background-image: url(${props => props.imageUrl});
  height: 50%;
  
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-bottom: 20px;
`;

const StateText = styled.div`
  max-height: 50%;
  
  padding-left: 20%;
  padding-right: 20%;
  font-family: "Bebas Neue", cursive;
  display: flex;
  font-size: 1.3em;
  justify-content: center;
`;

function Home() {
    return (
        <div>
            <Slogan>
                <SloganTextArea> Experiencing homelessness or rough sleeping?</SloganTextArea>
                <SloganTextArea> Social Housing agencies are there to help and we can help you find one</SloganTextArea>

                <FindAgencyArea to={"/findAgency"}>Find Agency</FindAgencyArea>
            </Slogan>
            <StatArea>
                <StateSection>
                    <StateImage imageUrl={statImage1} />
                    <StateText>
                        Victorian Authorities assist more than 100,000 homeless people annually
                    </StateText>
                </StateSection>
                <StateSection>
                    <StateImage imageUrl={statImage2} />
                    <StateText>
                        During the pandemic, the government granted a Homelessness to A Home Package of $150 million
                    </StateText>
                </StateSection>
                <StateSection>
                    <StateImage imageUrl={statImage3} />
                    <StateText>
                        Funds worth $500 million to renew and create new public housing premises across the state.
                    </StateText>
                    <StateText>
                        The Government’s promised 1000 new social housing units during pandemic.
                    </StateText>
                </StateSection>
            </StatArea>
        </div>
);
}

export default Home;
