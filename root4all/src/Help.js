import React, {useState} from 'react';
import Navbar from "./Navigation/NavBar";
import styled from "styled-components";
import Expand from 'react-expand-animated';

const FaqTitle = styled.div`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 700;
  font-size: 5em;
  color: black;
  margin-left: calc(15% + 40px);
  margin-bottom: 100px;
  margin-top: 50px;
`;

const FaqArea = styled.div`
  height: ${props => props.expand ? "970px" : "650px"};
  max-width: 800px;
  margin-left: calc(15% + 40px);
  margin-right: calc(15% + 40px);
  border: 2px solid #dadada;
  border-radius: 10px;
  margin-bottom: 200px;
  transition: height 0.448s ease-in-out;
`;

const QuestionArea = styled.div`
  height: 50px;
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding-left: 40px;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    border: ${props => props.firstLine ? "none" : "1px solid #dadada"};
  }
  background-color: ${props => props.expand ? "rgba(205, 205, 205, 0.6)" : "transparent"};

  cursor: pointer;
  &:hover {
    background-color: rgba(205, 205, 205, 0.6);
  }
`;

const ArrowDown = styled.i`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: ${props => props.expand ? "rotate(-135deg)" : "rotate(45deg)"};
  margin-left: auto;
  margin-right: 20px;
  margin-bottom: 3px;
  transition: transform 0.448s ease-in-out;
`;

const AnswerArea = styled.div`
  height: 300px;
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 400;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
    const a1 = (<AnswerArea>There is no single definition of homelessness.
        The Australian Bureau of Statistics (ABS) defines homelessness, for the purposes of the Census of Population and Housing, as the lack of one or more elements that represent ‘home’.
        The ABS statistical definition of homelessness is ‘… when a person does not have suitable accommodation alternatives, they are considered homeless if their current living arrangement:
        <div>1. Is in a dwelling that is inadequate.</div>
        <div>2. Has no tenure, or if their initial tenure is short and not extendable; or</div>
            <div>3. Does not allow them to have control of, and access to space for social relations’ (ABS 2012).</div>
    </AnswerArea>);
    const a2 = (<AnswerArea>Yes. A person who is homeless may face violations of the right to an adequate standard of living, the right to education, the right to liberty and security of the person, the right to privacy, the right to social security, the right to freedom from discrimination, the right to vote, and many more.</AnswerArea>);
    const a3 = (<AnswerArea>Due to the pandemic, homelessness in Melbourne has become increasingly serious. There are currently 120,000 homeless people in Victory.</AnswerArea>);
    const a4 = (<AnswerArea>Poverty and the inability to afford adequate housing are central to the causes of homelessness. These circumstances may result from a number of different experiences, including long-term or short-term unemployment, debt and other financial pressures, and housing market pressures, such as rising rental and house prices and the lack of public housing.

        Financial difficulty is often accompanied by other personal or family problems, such as family breakdown, domestic violence, poor physical and mental health, substance and other addictions. The inability to cope with combinations of these problems can push individuals and families even closer to the edge.
        Even before a person becomes homeless, they may be living at the margins of the society, with few connections to family and the community. Social isolation can mean that they lack the necessary support to assist them through periods of stress and help them manage ongoing problems.
    </AnswerArea>);
    const a5 = (<AnswerArea>Rough sleeping is the most visible and extreme form of homelessness, where people literally risk their lives by sleeping in the open air, or in places that are not designed to be lived in.</AnswerArea>);
    const a6 = (<AnswerArea>The difference between rough sleeping and homelessness is that it is possible to be homeless, but not be rough sleeping. For example, someone can be homeless if they are staying in temporary accommodation, but they are not rough sleeping as they do have a proper roof over their head at night.</AnswerArea>);
    const a7 = (<AnswerArea>It's not against the law to sleep rough. The Local Law includes provisions around camping in structures in public places, portable advertising and causing obstruction.
        If items or belongings accumulate, or block pedestrian access, officers may ask people who are sleeping rough to tidy up or leave a site. If this happens, they will work closely with services to make sure that people have the opportunity to access shelter, clothing, medical and other basic needs.
    </AnswerArea>);
    const a8 = (<AnswerArea>Public housing is a form of long-term rental social housing that is managed by the Victorian Government. It is for people on low incomes that are most in need, especially those who have recently experienced homelessness, family violence or have other special needs. They also work with other organisations to provide community housing.</AnswerArea>);
    const a9 = (<AnswerArea>The government has taken many measures to solve the living problems of the homeless group. This group will first be provided with a portion of free temporary housing. The group was then given free food, blankets and other emergency necessities. Finally, some people were given emergency aid.</AnswerArea>);
    const a10 = (<AnswerArea>Non-profit organizations provide a lot of emergency assistance to homeless groups.
        Non-profit organizations played an active role, especially during the pandemic.
        For example, the Red Cross provides the group with emergency aid, free food, blankets, clothing, etc., to help the group get the necessary necessities.
    </AnswerArea>);
    const a11 = (<AnswerArea>What are the differences between community housing and public housing? Community housing is delivered by community organisations. If you accept an offer of community housing, your tenancy will be managed by a community housing organisation. Public housing is delivered by Housing ACT.</AnswerArea>);
    const a12 = (<AnswerArea>Eligibility check is a screening and assessment method that assesses the identity, income, family status, health status, financial savings, housing needs, etc. of groups applying for free housing provided by the government in order to provide free housing to the applicants who need it most.</AnswerArea>);
    const a13 = (<AnswerArea>Our 'ROOF4ALL' will provide support to the homeless community:
        <div>1. By setting the filter, we will provide you with the housing intermediary information that most meets your requirements, so as to obtain the right housing.</div>
            <div>2. Provide users with the list information of Melbourne hospitals.</div>
                <div>3. According to the user's query information in the search box, we will provide the user with a list of registered housing intermediary information and display it on the map.</div>
    </AnswerArea>);
    const questionList = [[q1, a1], [q2, a2], [q3, a3], [q4, a4], [q5, a5], [q6, a6], [q7, a7], [q8, a8],[q9, a9],[q10, a10],[q11, a11],[q12, a12],[q13, a13]];
    const [openID, setOpenID] = useState(-1);
    return (
        <>
            <Navbar />
            <FaqTitle>FAQ</FaqTitle>
            <FaqArea expand={openID !== -1}>
                {questionList.map((x, i)=> {
                    return (
                        <QuestionSection id={i} questionContent={x[0]} answerConent={x[1]} setOpen={setOpenID} openID={openID}/>
                    )
                })}
            </FaqArea>
        </>
    );
}

function QuestionSection(props) {

    const toggle = () => {
        if (props.id !== props.openID) {
            props.setOpen(props.id);
        } else {
            props.setOpen(-1);
        }
    };

    return (
        <>
            <QuestionArea firstLine={props.id === 0} onClick={toggle} expand={props.id === props.openID} >{props.questionContent} <ArrowDown expand={props.id === props.openID}/></QuestionArea>
            <Expand open={props.openID === props.id} > {props.answerConent}</Expand>
        </>
    );
}




export default Help;
