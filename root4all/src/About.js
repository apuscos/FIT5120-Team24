import React from 'react';
import styled from "styled-components";
import backgroundImg from "./Image/aboutBackground.png"
import Navbar from "./Navigation/Nav";
import Advita from "./Image/advita.jpg"
import Gao from "./Image/gao.jpg"
import Toly from "./Image/toly.jpg"
import Jiang from "./Image/jiang.jpg"
import Shiwani from "./Image/shiwani.jpg"

const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 65%;
`;

const TeamDesc = styled.div`
  height: 300px;
  background-color: white;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-left: calc(15% + 40px);
  flex-direction: column;
`;

const Title = styled.div`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 700;
  font-size: 2.5em;
  width: auto;
  margin-bottom: 10px;
`;

const Content = styled.div`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 500;
  display: flex;
  font-size: 20px;
`;

const ContentBigger = styled.div`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 500;
  width: 65%;
  display: flex;
  font-size: 20px;
`;

const TitleBigger = styled.div`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 700;
  font-size: 2.5em;
  width: auto;
`;

const ProductImg = styled.div`
  background-image: url(${backgroundImg});
  width: 300px;
  height: 300px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-left: 50px;
`;


const AreaWrapper = styled.div`
  height: 400px;
  background-color: #e3e3e3;
  padding-left: calc(15% + 40px);
  display: flex;
  align-items: center;
`;

const TeamImgArea = styled.div`
  height: 350px;
  display: flex;
`;

const ImageText = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MemberImage = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${props => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 20px;
`;

const MemberText = styled.div`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 500;
  font-size: 20px;
`;
function About() {
    return (
        <>
            <Navbar />
            <AreaWrapper>
                <ProductDesc>
                    <Title>Roof4All</Title>
                    <Content>
                        Roof 4 All strives to provide a consolidated form of the integration of all necessary information on available social housing options aiding to the needs, the eligibility in availing certain housing services and other support options for the homeless or people at the risk of homelessness due to the difficult situations stemmed from the fallout of the Covid pandemic
                    </Content>
                </ProductDesc>
                <ProductImg/>
            </AreaWrapper>
            <TeamDesc>
                <TitleBigger>Meet the team</TitleBigger>
                <ContentBigger>
                    We, The Remnants, are a team of graduate students from IT, Data Science, Business Information Systems and Network and Security and we aim to work collaboratively to help the homeless people
                </ContentBigger>
            </TeamDesc>
            <TeamImgArea>
                <ImageText>
                    <MemberImage url={Advita}/>
                    <MemberText>Advaita Ramkumar</MemberText>
                    <MemberText>Business Analyst</MemberText>
                </ImageText>
                <ImageText>
                    <MemberImage url={Toly}/>
                    <MemberText>Anatolii Kuznetsov</MemberText>
                    <MemberText>Security Analyst</MemberText>
                </ImageText>
                <ImageText>
                    <MemberImage url={Gao}/>
                    <MemberText>Gao Wang</MemberText>
                    <MemberText>Developer</MemberText>
                </ImageText>
                <ImageText>
                    <MemberImage url={Jiang}/>
                    <MemberText>Jianwen Jiang</MemberText>
                    <MemberText>Business Analyst</MemberText>
                </ImageText>
                <ImageText>
                    <MemberImage url={Shiwani}/>
                    <MemberText>Shiwani Joshi</MemberText>
                    <MemberText>Data Scientist</MemberText>
                </ImageText>
            </TeamImgArea>

        </>
    );
}

export default About;
