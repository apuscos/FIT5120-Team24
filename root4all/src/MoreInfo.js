import React from 'react';
import Navbar from "./Navigation/NavBar";
import styled from "styled-components";
import FAQBackground from "./Image/faqBackground.webp"
import {makeStyles, Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {NavLink as Link} from "react-router-dom";
import AgedCare from "./Image/ageCare.jpg"
import LegalService from "./Image/LegalService.jpg"
import HealthCare from "./Image/healthCare.jpg"
import Helpline from "./Image/Helpline.jpg"

const BackGroundSquareBlur = styled.div`
  width: 100%;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SquareBlur = styled.div`
  width: 250px;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-family: "Baloo Bhai 2",cursive;
  font-size: 20px;
`;

const MoreInfoTitle = styled.div`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 700;
  font-size: 5em;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${FAQBackground});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  height: 400px;
  background-color: #7A7DA0;
`;

const ServiceArea = styled.div`
  flex-grow: 1;
  background-color: #fafafa;
  padding-top: 50px;
`;

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

const LinkNoUnderline = styled(Link)`
  text-decoration: none;
`


function MoreInfo(){
    const classes = useStyles();
    return (
        <>
            <Navbar/>
            <MoreInfoTitle>
                <BackGroundSquareBlur>
                    More information
                </BackGroundSquareBlur>
            </MoreInfoTitle>
            <ServiceArea>
                <Grid container className={classes.services}>
                    <Grid  item md={12} lg={12} xl={12}>
                        <Paper className={classes.service}>
                            <Grid item >
                                <LinkNoUnderline to={"/CHSs"}>
                                    <ServiceCover url={HealthCare} >
                                        <SquareBlur>
                                            Health Services for Youth
                                        </SquareBlur>
                                    </ServiceCover>
                                </LinkNoUnderline>
                            </Grid>
                            <Grid item md={12} lg={12} xl={12}>
                                <Paper elevation={0} className={classes.serviceIntro}>
                                    <Typography variant={"h5"}>The youth are the foundation of any society. Find out more about the various programs to support the young people who are homeless or are at risk.</Typography>
                                </Paper>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid  item md={12} lg={12} xl={12}>
                        <Paper className={classes.service}>
                            <Grid item >
                                <LinkNoUnderline to={{
                                    pathname: "/AgedProgram",
                                    bottom: true
                                }
                                }>
                                    <ServiceCover url={AgedCare}>
                                        <SquareBlur>
                                            Aged Program services
                                        </SquareBlur>
                                    </ServiceCover>
                                </LinkNoUnderline>
                            </Grid>
                            <Grid item md={12} lg={12} xl={12}>
                                <Paper elevation={0} className={classes.serviceIntro}>
                                    <Typography variant={"h5"}>We must promote, build, and support the health of the older generation. There are old age care programs to help, find more details here.</Typography>
                                </Paper>
                            </Grid>
                        </Paper>
                    </Grid>


                    <Grid  item md={12} lg={12} xl={12}>
                        <Paper className={classes.service}>
                            <Grid item >
                                <LinkNoUnderline to={"/AdviserContactDetails"}>
                                    <ServiceCover url={LegalService}>
                                        <SquareBlur>
                                            Legal Advices
                                        </SquareBlur>
                                    </ServiceCover>
                                </LinkNoUnderline>
                            </Grid>
                            <Grid item md={12} lg={12} xl={12}>
                                <Paper elevation={0} className={classes.serviceIntro}>
                                    <Typography variant={"h5"} >Do you need legal advices for your homeless situations? You have options to move forward legally, for FREE. Find out more here</Typography>
                                </Paper>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid  item md={12} lg={12} xl={12}>
                        <Paper className={classes.service}>
                            <Grid item >
                                <LinkNoUnderline to={"/HelpLine"}>
                                    <ServiceCover url={Helpline}>
                                        <SquareBlur>
                                            Helpline numbers
                                        </SquareBlur>
                                    </ServiceCover>
                                </LinkNoUnderline>
                            </Grid>
                            <Grid item md={12} lg={12} xl={12}>
                                <Paper elevation={0} className={classes.serviceIntro}>
                                    <Typography variant={"h5"} >Are you facing an emergency? Find out more about the emergency helplines for emergency services.</Typography>
                                </Paper>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>

            </ServiceArea>
        </>
    )
}

export default MoreInfo;