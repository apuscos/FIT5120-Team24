import React from 'react';
import styled from "styled-components";
import {Logo} from "./Navigation/NavComponents"
import backgroundImg from "./Image/aboutBackground.png"
import teamImg from "./Image/teamImage.png"

const ProductDesc = styled.div`
  display: flex;
  padding-left: 5%;
  padding-top: 20px;
  flex-direction: column;
  justify-content: center;
  
  
`;

const TeamDesc = styled.div`
  height: 700px;
  background-color: white;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  flex-direction: column;
  align-items: center;
  
`;

const Title = styled.div`
  font-family: "Bebas Neue", cursive;
  font-size: 3em;
  width: auto;
  margin-bottom: 10px;
  
  
`;

const Content = styled.div`
  font-family: 'Lato', sans-serif;
  width: 40%;
  display: flex;
  font-size: 1.7em;
`;

const ContentBigger = styled.div`
  font-family: 'Lato', sans-serif;
  width: 90%;
  display: flex;
  font-size: 2em;
`;

const TitleBigger = styled.div`
  font-family: "Bebas Neue", cursive;
  font-size: 3em;
  width: auto;
  margin-bottom: 10px;
`;
const ImageSection = styled.div`
  height: 350px;
  width: 30%;
  margin-top: 30px;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const AreaWarpper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 400px;
  padding-left: 20%;
  background-color: #979696;
`;

const TeamImg = styled.div`
  height: 400px;
  margin-top: 50px;
  width: 1674px;
  background-image: url(${teamImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1674px 400px;
  margin-bottom: 50px;
`;
function About() {
    return (
        <>
            <AreaWarpper className="App">
                <ImageSection/>
                <ProductDesc>
                    <Title>Roof4All</Title>
                    <Content>
                        Roof 4 All strives to provide a consolidated form of the integration of all necessary information on available social housing options aiding to the needs, the eligibility in availing certain housing services and other support options for the homeless or people at the risk of homelessness due to the difficult situations stemmed from the fallout of the Covid pandemic
                    </Content>
                </ProductDesc>
            </AreaWarpper>
            <TeamDesc>
                <TitleBigger>Meet the team</TitleBigger>
                <ContentBigger>
                    We, The Remnants, are a team of graduate students from IT, Data Science, Business Information Systems and Network and Security and we aim to work collaboratively to help the homeless people
                </ContentBigger>
                <TeamImg/>
            </TeamDesc>

        </>
    );
}

export default About;
