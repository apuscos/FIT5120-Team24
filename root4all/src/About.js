import React from 'react';
import styled from "styled-components";
import backgroundImg from "./Image/aboutBackground.webp"
import Navbar from "./Navigation/NavBar";
import Advita from "./Image/advita.webp"
import Gao from "./Image/gao.webp"
import Toly from "./Image/toly.webp"
import Jiang from "./Image/jiang.webp"
import Shiwani from "./Image/shiwani.webp"
import Paper from '@material-ui/core/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const photoSteps = [
    {
        label: "Advaita Ramkumar",
        imgPath: Advita
    },
    {
        label: "Anatolii Kuznetsov",
        imgPath: Toly
    },
    {
        label: "Gao Wang",
        imgPath: Gao
    },
    {
        label: "Jianwen Jiang",
        imgPath: Jiang
    },
    {
        label: "Shiwani Joshi",
        imgPath: Shiwani
    }
]

const ImgStyled = styled.img`
  height: 255px;
  display: block;
  max-width: 260px;
  overflow: hidden;
`;

const PaperStyled = styled(Paper)`
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 10px;
  &&{
    background-color: #e3e3e3;
  }
`;

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
  flex-direction: column;
  padding-left: 350px;
  padding-top: 100px;
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
  width: 80%;
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
  height: 370px;
  max-width: 255px;
  display: flex;
  flex-direction: column;
`;

const TeamWrapper = styled.div`
  padding-left: calc(15% + 40px);
  margin-bottom: 50px;
  display: flex;
  margin-top: 50px;
`;

function About() {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = photoSteps.length;
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

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
            <TeamWrapper>
                <TeamImgArea>
                    <PaperStyled square elevation={0}>
                        <Typography>{photoSteps[activeStep].label}</Typography>
                    </PaperStyled>
                    <AutoPlaySwipeableViews
                        axis= 'x'
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {photoSteps.map((step, index) => (
                            <div key={step.label}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <ImgStyled src={step.imgPath} alt={step.label} />
                                ) : null}
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        variant="dots"
                        activeStep={activeStep}
                        nextButton={
                            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                Next
                                {<KeyboardArrowRight />}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {<KeyboardArrowLeft />}
                                Back
                            </Button>
                        }
                    />
                </TeamImgArea>

                <TeamDesc>
                    <TitleBigger>Meet the team</TitleBigger>
                    <ContentBigger>
                        We, The Remnants, are a team of graduate students from IT, Data Science, Business Information Systems and Network and Security and we aim to work collaboratively to help the homeless people
                    </ContentBigger>
                </TeamDesc>
            </TeamWrapper>
        </>
    );
}

export default About;
