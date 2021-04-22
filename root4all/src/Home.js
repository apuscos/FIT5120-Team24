import React from 'react';
import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom';
import image1 from "./Image/homePageImage.jpg"
import statImage1 from "./Image/statImage1.png"
import statImage2 from "./Image/statImage2.png"
import statImage3 from "./Image/statImage3.png"
import Navbar from "./Navigation/NavBar";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import {makeStyles, Typography} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';

// Slogan area
//-------------------------------------------------------------------
const Slogan = styled.div`
  height: 100vh;
  background-image: linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) ),  url(${image1});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  background-position: center;
`;

const FindAgencyButton = styled(Link)`
  width: 250px;
  height: 75px;
  border-radius:40px;
  background-color: #2BA837;
  margin-top: 50px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: black;
  transition: transform 0.1s ease;
  &:hover{
    transition: transform 0.1s ease;
    transform: scale(1.05);
  }
`;

const Trapezoid = styled.div`
  padding-left: calc(15% + 40px);
  padding-right: 4vw;
  width: 32vw;
  height: 0;
  border-bottom:  100vh solid rgba(0, 0, 0, 0.5);
  border-left: 0 solid transparent;
  border-right: 20vw solid transparent;
`;

const HorizontalLine = styled.div`
  width: 100px;
  height: 3px;
  background-color: #2BA837;
  margin-bottom: 5vh;
  border-radius: 19px;
`;

const HorizontalLineShort = styled(HorizontalLine)`
  width: 50px;
  height: 2px;
  margin-bottom: 50px;
`;


const SubTitle = styled.div`
  color: #2BA837;
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 700;
  font-size: 1.8vw;
  padding-bottom: 30px;
`;

const ArrowDown = styled(ExpandMoreIcon)`
  position: absolute;
  bottom: 0;
  left: 50%;
`;


const SloganTextArea = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25vh;
  width: 40vw;
  color: white;
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 700;
  font-size: 2.45vw;
`;

const SloganTextArea2 = styled(SloganTextArea)`
  padding-top: 0;
`;
//-------------------------------------------------------------------
// Statistic Area
//-------------------------------------------------------------------

const StatArea = styled.div`
  
  background-color: #fafafa;
  display: flex;
  padding-left: calc(15% + 40px);
  padding-right: calc(15% + 40px);

`;

const StateSection = styled.div`
  width: calc((70vw - 80px)/3);
  height: calc((70vw - 80px)/3);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 90px;
  background-color: ${props => props.dark ? "rgba(205,205,205,0.4)" : "#fafafa"};
  &:hover{
    filter: invert(100%);
  }
`;

const StateImage = styled.div`
  background-image: url(${props => props.imageUrl});
  width: calc((70vw - 80px)/6);
  height: calc((70vw - 80px)/6);
  margin-bottom: 5%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-top: 8%;
`;

const StateText = styled.div`
  width: 80%;
  font-family: 'Baloo Bhai 2', cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 1vw;
  color: black;
`;

const StateHead = styled.div`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 600;
  font-size: 1.4vw;
  color: black;
`;

const StatTitle = styled.div`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 600;
  color: Black;
  background-color: #fafafa;
  font-size: 42px;
  padding-left: calc(15% + 40px);
  padding-bottom: 40px;
`;

const StatLink = styled.a`
  text-decoration: none;
`;

const LinkNoUnderline = styled(Link)`
  text-decoration: none;
`

const ServiceArea = styled.div`
  flex-grow: 1;
  background-color: #fafafa;
`;
//-------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
    title: {
        paddingLeft: "calc(15% + 40px)",
        marginBottom: 40,
        paddingTop: 80
    },
    services: {
        paddingLeft: "calc(15% + 40px)",
        paddingRight: "calc(15% + 40px)",
    },
    service: {
        display: "flex",
        marginBottom: 20,
    },
    serviceIntro: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 200
    },
}));

const ServiceCover = styled(Paper)`
  height: 200px;
  background-color: rgba(43,168,55);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.95);
  &:hover{
    transition: transform 0.1s ease;
    transform: scale(1);
  }
`;

function Home() {
    const classes = useStyles();
    return (
        <>
            <Navbar positioning="fixed" />
            <Slogan>
                <Trapezoid>
                    <SloganTextArea> <HorizontalLine/>  <SubTitle>Victoria</SubTitle> Experiencing homelessness or rough sleeping?</SloganTextArea>
                    <SloganTextArea2> Social Housing agencies are there to help and we can help you find one</SloganTextArea2>
                    <FindAgencyButton to={"/findAgency"}>Find Agency</FindAgencyButton>
                </Trapezoid>
                <ArrowDown style={{ color:  '#2BA837', height: 50, width: 50}}/>
            </Slogan>

            <ServiceArea>
                <Grid container md={12} lg={12} xl={12} className={classes.title}>
                    <Typography variant={"h3"}>Services</Typography>
                </Grid>
                <Grid container className={classes.services}>
                    <Grid  item md={12} lg={12} xl={12}>
                        <Paper className={classes.service}>
                            <Grid item md={2} lg={2} xl={2} >
                                <LinkNoUnderline to={"/findAgency"}>
                                    <ServiceCover elevation={0} >
                                        <Typography variant={"h5"} gutterBottom>Find agency</Typography>
                                    </ServiceCover>
                                </LinkNoUnderline>
                            </Grid>
                            <Grid item md={10} lg={10} xl={10}>
                                <Paper elevation={0} className={classes.serviceIntro}>
                                    <Typography variant={"h6"} gutterBottom>Introduction to the find agency</Typography>
                                </Paper>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid  item md={12} lg={12} xl={12}>
                        <Paper className={classes.service}>
                            <Grid item md={2} lg={2} xl={2} >
                                <LinkNoUnderline to={"/findAgency"}>
                                    <ServiceCover elevation={0}>
                                        <Typography variant={"h5"} gutterBottom>Check agency</Typography>
                                    </ServiceCover>
                                </LinkNoUnderline>
                            </Grid>
                            <Grid item md={10} lg={10} xl={10}>
                                <Paper elevation={0} className={classes.serviceIntro}>
                                    <Typography variant={"h6"} gutterBottom>Introduction to the check agency</Typography>
                                </Paper>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid  item md={12} lg={12} xl={12}>
                        <Paper className={classes.service}>
                            <Grid item md={2} lg={2} xl={2} >
                                <LinkNoUnderline to={"/checkEligibility"}>
                                    <ServiceCover elevation={0}>
                                        <Typography variant={"h5"} gutterBottom>Check eligibility</Typography>
                                    </ServiceCover>
                                </LinkNoUnderline>
                            </Grid>
                            <Grid item md={10} lg={10} xl={10}>
                                <Paper elevation={0} className={classes.serviceIntro}>
                                    <Typography variant={"h6"} gutterBottom>Introduction to the check eligibility</Typography>
                                </Paper>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>

            </ServiceArea>
            <StatTitle><HorizontalLineShort/>Help is around the corner</StatTitle>
            <StatArea>
                <StatLink href = "https://www.dhhs.vic.gov.au/housing-and-homelessness" target="_blank"  rel="noreferrer">
                    <StateSection dark>
                        <StateImage imageUrl={statImage1}/>
                        <StateHead>Assist</StateHead>
                        <StateText>
                            Victorian Authorities assist more than 100,000 homeless people annually
                        </StateText>
                    </StateSection>
                </StatLink>
                <StatLink href = "https://www.premier.vic.gov.au/homes-homeless-victorians-during-pandemic-and-beyond" target="_blank"  rel="noreferrer">
                    <StateSection>
                        <StateImage imageUrl={statImage2}/>
                        <StateHead>Home Package</StateHead>
                        <StateText>
                            During the pandemic, the government granted a Homelessness to A Home Package of $150 million
                        </StateText>
                    </StateSection>
                </StatLink>
                <StatLink href= "https://www.premier.vic.gov.au/homes-homeless-victorians-during-pandemic-and-beyond" target="_blank"  rel="noreferrer">
                    <StateSection dark>
                        <StateImage imageUrl={statImage3}/>
                        <StateHead>New public housing</StateHead>
                        <StateText>
                            Funds worth $500 million to renew and create new public housing premises across the state.
                        </StateText>
                    </StateSection>
                </StatLink>
            </StatArea>
        </>
    );
}

export default Home;
