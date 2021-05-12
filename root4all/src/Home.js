import React from 'react';
import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom';
import image1 from "./Image/homePageImage.webp";
import statImage1 from "./Image/statImage1.webp"
import statImage2 from "./Image/statImage2.webp"
import statImage3 from "./Image/statImage3.webp"
import Navbar from "./Navigation/NavBar";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import {makeStyles, Typography} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import SearchMin from "./Image/search-min.webp"
import FindAgency from "./Image/checkAgency.webp"
import Eligibility from "./Image/eligibility.webp"



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
  flex-direction: column;
  padding-left: calc(15% + 40px);
  padding-right: calc(15% + 40px);
  padding-bottom: 70px;

`;

const PaperWrapper = styled(Paper)`
  display: flex;
  height: calc((70vw - 80px)/3);
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

const SquareBlur = styled.div`
  width: 250px;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
//-------------------------------------------------------------------
const useStyles = makeStyles(() => ({
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
        height: 250,
        paddingLeft: 30,
        paddingRight: 30,
        flexDirection: "column"
    },
}));

const ServiceCover = styled.div`
  height: 250px;
  width: 250px;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(100px);
  transform: scale(1);
  transition: all 0.3s ease;
  color: white;
  overflow: hidden;

  &:hover {
    transition: all 0.3s ease;
    transform: scale(0.9);
    border-radius: 19px;
  }
`;


const TypoMoreInfo = styled(Typography)`
  color: black;
`;

const LinkStyled = styled(Link)`
  color: black;
  margin-left: auto;
`;



function LegendPage () {
    return (
        <>
            <Slogan>
                <Trapezoid>
                    <SloganTextArea> <HorizontalLine/>  <SubTitle>Victoria</SubTitle> Experiencing homelessness or rough sleeping?</SloganTextArea>
                    <SloganTextArea2> Social Housing agencies are there to help and we can help you find one</SloganTextArea2>
                    <FindAgencyButton to={"/checkEligibility"}>Check Eligibility</FindAgencyButton>
                </Trapezoid>
                <ArrowDown style={{ color:  '#2BA837', height: 50, width: 50}}/>
            </Slogan>
        </>
    )
}

function Home() {
    const classes = useStyles();
    return (
        <div>
            <Navbar positioning="fixed" />
            <LegendPage/>
            <ServiceArea>
                <Grid container md={12} lg={12} xl={12} className={classes.title}>
                    <Typography variant={"h3"}>Services</Typography>
                </Grid>
                <Grid container className={classes.services}>
                    <Grid  item md={12} lg={12} xl={12}>
                        <Paper className={classes.service}>
                            <Grid item >
                                <LinkNoUnderline to={"/findAgency"}>
                                    <ServiceCover url={SearchMin} >
                                        <SquareBlur>
                                            <Typography variant={"h5"}>Find agency</Typography>
                                        </SquareBlur>
                                    </ServiceCover>
                                </LinkNoUnderline>
                            </Grid>
                            <Grid item md={12} lg={12} xl={12}>
                                <Paper elevation={0} className={classes.serviceIntro}>
                                    <Typography align={"center"} variant={"h4"} >Looking for a Government Housing Agency?</Typography>
                                    <br/>
                                    <Typography variant={"h5"}>Let us help you. Type in your postal code or your suburb to find the agencies that are nearby.</Typography>
                                </Paper>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid  item md={12} lg={12} xl={12}>
                        <Paper className={classes.service}>
                            <Grid item >
                                <LinkNoUnderline to={{
                                    pathname: "/findAgency",
                                    bottom: true
                                }
                                }>
                                    <ServiceCover url={FindAgency}>
                                        <SquareBlur>
                                            <Typography variant={"h5"}>Check agency</Typography>
                                        </SquareBlur>
                                    </ServiceCover>
                                </LinkNoUnderline>
                            </Grid>
                            <Grid item md={12} lg={12} xl={12}>
                                <Paper elevation={0} className={classes.serviceIntro}>
                                    <Typography variant={"h4"} >Is your agency legit?</Typography>
                                    <br/>
                                    <Typography variant={"h5"}>Let us save you from the scams surrounding the public housing area. Type in the agency name, and check if it is registered with the government.</Typography>
                                </Paper>
                            </Grid>
                        </Paper>
                    </Grid>


                    <Grid  item md={12} lg={12} xl={12}>
                        <Paper className={classes.service}>
                            <Grid item >
                                <LinkNoUnderline to={"/checkEligibility"}>
                                    <ServiceCover url={Eligibility}>
                                        <SquareBlur>
                                            <Typography variant={"h5"} >Check eligibility</Typography>
                                        </SquareBlur>
                                    </ServiceCover>
                                </LinkNoUnderline>
                            </Grid>
                            <Grid item md={12} lg={12} xl={12}>
                                <Paper elevation={0} className={classes.serviceIntro}>
                                    <Typography variant={"h4"} >Are you eligible for Social Housing?</Typography>
                                    <br/>
                                    <Typography variant={"h5"} >Check your eligibility and the options available to you. Don’t you stress about the tiresome job of finding the required documents. We provide you with information on the forms and the supplementary documents you require for your application.</Typography>
                                </Paper>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>

            </ServiceArea>
            <StatTitle><HorizontalLineShort/>Help is around the corner</StatTitle>
            <StatArea>
                <PaperWrapper>
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
                </PaperWrapper>
                <LinkStyled to={"moreInfo"}>
                    <TypoMoreInfo variant={"h6"}>More information</TypoMoreInfo>
                </LinkStyled>
            </StatArea>
        </div>
    );
}

export default Home;
