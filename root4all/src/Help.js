import React, {useState} from 'react';
import Navbar from "./Navigation/NavBar";
import styled from "styled-components";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as Search from "./SearchBar/searchBarComponents"
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import {renderToStaticMarkup} from "react-dom/server";
import Highlighter from "react-highlight-words";
import FAQBackground from "./Image/faqBackground.png"

const FaqTitle = styled.div`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 700;
  font-size: 5em;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${FAQBackground});
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  margin-bottom: 70px;
`;

const SquareBlur = styled.div`
  width: 100%;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FaqArea = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  
`;

const QuestionArea = styled.div`
  
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 500;
  font-size: 18px;
  
  
`;

const AccordionSummaryStyled = styled(AccordionSummary)`
  background-color: ${props => props.expand ? "rgba(205, 205, 205, 0.6)" : "transparent"};

  &:hover {
    background-color: rgba(205, 205, 205, 0.6);
  }
    
`;


const AnswerArea = styled.div`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 400;
`;





function Help() {
    const q1 = "What is homelessness?";
    const q2 = "Homelessness, a human rights issue?";
    const q3 = "How many people are homeless in Victoria?";
    const q4 = "What are the factors contributing to homelessness?";
    const q5 = "What is rough sleeping?";
    const q6 = "What is the difference between homelessness and rough sleeping?";
    const q7 = "Is rough sleeping legal in Victoria?";
    const q8 = "What are public housings?";
    const q9 = "What is the government doing?";
    const q10 = "What are the non-profit organisations doing?";
    const q11 = "What is the difference between public and social housing?";
    const q12 = "What is an eligibility check?";
    const q13 = "How can we help?";
    const [input, setInput] = useState("");
    const [highlightText, setHighlight] = useState("");
    const a1p1 = "There is no single definition of homelessness.The Australian Bureau of Statistics (ABS) defines homelessness, for the purposes of the Census of Population and Housing, as the lack of one or more elements that represent ‘home’." +
        "The ABS statistical definition of homelessness is ‘… when a person does not have suitable accommodation alternatives, they are considered homeless if their current living arrangement:";
    const a1p2 = "1. Is in a dwelling that is inadequate.";
    const a1p3 = "2. Has no tenure, or if their initial tenure is short and not extendable; or";
    const a1p4 = "3. Does not allow them to have control of, and access to space for social relations’ (ABS 2012).";
    const a2p1 = "Yes. A person who is homeless may face violations of the right to an adequate standard of living, the right to education, the right to liberty and security of the person, the right to privacy, the right to social security, " +
        "the right to freedom from discrimination, the right to vote, and many more.";
    const a3p1 = "Due to the pandemic, homelessness in Melbourne has become increasingly serious. There are currently 120,000 homeless people in Victory.";
    const a4p1 = "Poverty and the inability to afford adequate housing are central to the causes of homelessness. These circumstances may result from a number of different experiences, including long-term or short-term unemployment, " +
        "debt and other financial pressures, and housing market pressures, such as rising rental and house prices and the lack of public housing. " +
        "Financial difficulty is often accompanied by other personal or family problems, such as family breakdown, domestic violence, poor physical and mental health, substance and other addictions. " +
        "The inability to cope with combinations of these problems can push individuals and families even closer to the edge.Even before a person becomes homeless, they may be living at the margins of the society, with few connections to family and the community. " +
        "Social isolation can mean that they lack the necessary support to assist them through periods of stress and help them manage ongoing problems.";
    const a5p1 = "Rough sleeping is the most visible and extreme form of homelessness, where people literally risk their lives by sleeping in the open air, or in places that are not designed to be lived in.";
    const a6p1 = "The difference between rough sleeping and homelessness is that it is possible to be homeless, but not be rough sleeping. For example, someone can be homeless if they are staying in temporary accommodation, but they are not rough sleeping as they do have a proper roof over their head at night.";
    const a7p1 = "It's not against the law to sleep rough. The Local Law includes provisions around camping in structures in public places, portable advertising and causing obstruction. " +
        "If items or belongings accumulate, or block pedestrian access, officers may ask people who are sleeping rough to tidy up or leave a site. " +
        "If this happens, they will work closely with services to make sure that people have the opportunity to access shelter, clothing, medical and other basic needs.";
    const a8p1 = "Public housing is a form of long-term rental social housing that is managed by the Victorian Government. It is for people on low incomes that are most in need, especially those who have recently experienced homelessness, family violence or have other special needs. They also work with other organisations to provide community housing.";
    const a9p1 = "The government has taken many measures to solve the living problems of the homeless group. This group will first be provided with a portion of free temporary housing. The group was then given free food, blankets and other emergency necessities. Finally, some people were given emergency aid.";
    const a10p1 = "Non-profit organizations provide a lot of emergency assistance to homeless groups. Non-profit organizations played an active role, especially during the pandemic. " +
        "For example, the Red Cross provides the group with emergency aid, free food, blankets, clothing, etc., to help the group get the necessary necessities.";
    const a11p1 = "What are the differences between community housing and public housing? Community housing is delivered by community organisations. " +
        "If you accept an offer of community housing, your tenancy will be managed by a community housing organisation. Public housing is delivered by Housing ACT.";
    const a12p1 = "Eligibility check is a screening and assessment method that assesses the identity, income, family status, health status, financial savings, housing needs, etc. of groups applying for free housing provided by the government in order to provide free housing to the applicants who need it most.";
    const a13p1 = "Our 'ROOF4ALL' will provide support to the homeless community:";
    const a13p2 = "1. By setting the filter, we will provide you with the housing intermediary information that most meets your requirements, so as to obtain the right housing.";
    const a13p3 = "2. Provide users with the list information of Melbourne hospitals.";
    const a13p4 = "3. According to the user's query information in the search box, we will provide the user with a list of registered housing intermediary information and display it on the map.";
    const questionList = [[q1, [a1p1, a1p2, a1p3, a1p4]], [q2, [a2p1]], [q3, [a3p1]], [q4, [a4p1]], [q5, [a5p1]], [q6, [a6p1]], [q7, [a7p1]], [q8, [a8p1]],[q9, [a9p1]],[q10, [a10p1]],[q11, [a11p1]],[q12, [a12p1]],[q13, [a13p1, a13p2, a13p3, a13p4]]];
    const [expanded, setExpanded] = useState(-1);
    const [searchResult, setSearchResult] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false]);



    const searchContent = () => {
        const upperInput = input.toUpperCase();
        setHighlight(input);
        setExpanded(-1);
        if (input === ""){
            setSearchResult([false, false, false, false, false, false, false, false, false, false, false, false, false]);
            setHighlight("")
            return;
        }
        let idxResult = [];
        for (let idx = 0; idx < questionList.length; idx++){
            const qa = questionList[idx]
            const questionUpper = qa[0].toUpperCase();
            const answerUpper = renderToStaticMarkup(qa[1]).toUpperCase();
            console.log(answerUpper);
            if(questionUpper.includes(upperInput) || answerUpper.includes(upperInput)){
                idxResult.push(idx);
            }
        }
        let newResult =  [false, false, false, false, false, false, false, false, false, false, false, false, false];
        for (let idx = 0; idx < idxResult.length; idx++){
            newResult[idxResult[idx]] = true;
        }
        setSearchResult(newResult);
    }






    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : -1);
        if (searchResult[panel] === true){
            let newResult = searchResult.slice();
            newResult[panel] = false;
            setSearchResult(newResult)
        } else {
            setSearchResult([false, false, false, false, false, false, false, false, false, false, false, false, false]);
        }
    };


    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            alignItems: 'center',
            width: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
            height: "auto",
            marginBottom: 50,
        },
        input: {
            flex: 1,
            marginLeft: 20,
            fontFamily: theme.typography.fontFamily,
        },
    }));

    const classes = useStyles();
    return (
        <>
            <Navbar />
            <FaqTitle>
                <SquareBlur>
                    FAQs
                </SquareBlur>
            </FaqTitle>
            <Paper className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Search for facts"
                    inputProps={{ 'aria-label': 'Search for facts' }}
                    onChange={
                        (e) => {
                            setInput(e.target.value);

                        }
                    }
                />
                <Search.SearchButton onClick={searchContent}/>
            </Paper>
            <FaqArea>
                {questionList.map((x, i)=> {
                    return (
                        <Accordion key={i} expanded={expanded === i || searchResult[i]} onChange={handleChange(i)}>
                            <AccordionSummaryStyled
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <QuestionArea>
                                    <Highlighter
                                        highlightClassName="YourHighlightClass"
                                        searchWords={[highlightText]}
                                        autoEscape={true}
                                        textToHighlight={x[0]}
                                    />
                                </QuestionArea>
                            </AccordionSummaryStyled>
                            <AccordionDetails>
                                <AnswerArea>
                                    { x[1].map((partContent, partIdx) =>
                                        (
                                            <div key={partIdx}>
                                                <Highlighter
                                                    highlightClassName="YourHighlightClass"
                                                    searchWords={[highlightText]}
                                                    autoEscape={true}
                                                    textToHighlight={partContent}
                                                />
                                                <br/>
                                            </div>
                                        ))

                                    }
                                </AnswerArea>
                            </AccordionDetails>
                        </Accordion>
                    )
                })}
            </FaqArea>
        </>
    );
}






export default Help;
