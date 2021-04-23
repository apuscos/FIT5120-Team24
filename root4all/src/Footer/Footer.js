import React from 'react';
import styled from "styled-components"
import { NavLink as Link } from 'react-router-dom';

const FooterArea = styled.div`
  height: 250px;
  background-color: black;
  color: #5dd95d;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-family: 'Baloo Bhai 2', cursive;
  font-size: 1.1em;
  color: white;
  padding-left: 40%;
  font-weight: 500;
  &:hover{
    text-decoration: underline;
  }
`;

const FooterExternalLink = styled.div`
  text-decoration: none;
  cursor: pointer;
  font-family: 'Baloo Bhai 2', cursive;
  font-size: 1.2em;
  color: white;
  padding-left: 40%;
  font-weight: 500;
  &:hover{
    text-decoration: underline;
  }
`;

const Section = styled.div`
  height: 80%;
  width: 30vw;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.div`
  padding-left: 40%;
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 700;
  font-size: 1.5em;
  margin-bottom: 5%;
`;

const Disclaimer = styled.div`
  font-family: 'Lato', sans-serif;
  padding-left: 5%;
  font-size: 0.8em;
  color: gray;
  padding-bottom: 1%;
  background-color: black;
  
`;

const ExternalLink = styled.a`
    text-decoration: none;
  display: flex;
  margin-bottom: 5px;
`;

const Footer = () => {
    return (
        <>
            <FooterArea>
                <Section>
                    <SectionTitle>Solutions</SectionTitle>
                    <FooterLink to={"/findAgency"}>Find Agency</FooterLink>
                    <FooterLink to={"/findAgency"}>Check registered agency</FooterLink>
                    <FooterLink to={"/checkEligibility"}>Check Eligibility</FooterLink>
                </Section>
                <Section>
                    <SectionTitle>Connect</SectionTitle>
                    <FooterLink to={"/about"}>About</FooterLink>
                    <FooterLink to={"/help"}>FAQs</FooterLink>
                </Section>
                <Section>
                    <SectionTitle>Resources</SectionTitle>
                    <ExternalLink target="_blank" href="https://www.housing.vic.gov.au">
                        <FooterExternalLink>
                            Housing Vic Website
                        </FooterExternalLink>
                    </ExternalLink>
                    <ExternalLink target="_blank" href="https://www.healthcollect.vic.gov.au/HospitalLists/MainHospitalList.aspx">
                        <FooterExternalLink>
                            Victorian Hospital Lists
                        </FooterExternalLink>
                    </ExternalLink>
                    <ExternalLink target="_blank" href="https://www.premier.vic.gov.au/homes-homeless-victorians-during-pandemic-and-beyond">
                        <FooterExternalLink>
                            Homes For Homeless Victorians During Pandemic And Beyond
                        </FooterExternalLink>
                    </ExternalLink>

                </Section>
            </FooterArea>
            <Disclaimer>The information on this website is based on the data from the HousingVic website</Disclaimer>
        </>
    );
};

export default Footer;