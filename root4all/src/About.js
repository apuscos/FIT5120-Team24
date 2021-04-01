import React from 'react';
import styled from "styled-components";

const ProductDesc = styled.div`
  height: 300px;
  background-color: #e3e3e3;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  flex-direction: column;
  align-items: center;
`;

const TeamDesc = styled.div`
  height: 300px;
  background-color: #d7d6d6;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-family: "Bebas Neue", cursive;
  font-size: 2em;
  width: auto;
  text-align: center;
  margin-bottom: 10px;
`;

const Content = styled.div`
  font-family: 'Lato', sans-serif;
  width: 50%;
  display: flex;
  font-size: 1.2em;
`;

function About() {
    return (
        <div className="App">
            <ProductDesc>
                <Title>Product description</Title>
                <Content>
                    Roof 4 All strives to provide a consolidated form of the integration of all necessary information on available social housing options aiding to the needs, the eligibility in availing certain housing services and other support options for the homeless or people at the risk of homelessness due to the difficult situations stemmed from the fallout of the Covid pandemic
                </Content>
            </ProductDesc>
            <TeamDesc>
                <Title>Team Description</Title>
                <Content>
                    We, The Remenents, are a team of graduate students from IT, Data Science, Business Information Systems and Network and Security and we aim to work collaboratively to help the homeless people
                </Content>
            </TeamDesc>
        </div>
    );
}

export default About;
