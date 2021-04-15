import React, {useState} from 'react';
import Navbar from "./Navigation/Nav";
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
  height: ${props => props.expand ? "600px" : "400px"};
  max-width: 800px;
  margin-left: calc(15% + 40px);
  margin-right: calc(15% + 40px);
  border: 2px solid #dadada;
  border-radius: 10px;
  margin-bottom: 50px;
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
  height: 200px;
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 400;
  padding-left: 40px;
  padding-top: 20px;
`;





function Help() {
    const q1 = "Question 1";
    const q2 = "Question 2";
    const q3 = "Question 3";
    const q4 = "Question 4";
    const q5 = "Question 5";
    const q6 = "Question 6";
    const q7 = "Question 7";
    const q8 = "Question 8";
    const a1 = (<AnswerArea>Answer1</AnswerArea>);
    const a2 = (<AnswerArea>Answer2</AnswerArea>);
    const a3 = (<AnswerArea>Answer3</AnswerArea>);
    const a4 = (<AnswerArea>Answer4</AnswerArea>);
    const a5 = (<AnswerArea>Answer5</AnswerArea>);
    const a6 = (<AnswerArea>Answer6</AnswerArea>);
    const a7 = (<AnswerArea>Answer7</AnswerArea>);
    const a8 = (<AnswerArea>Answer8</AnswerArea>);
    const questionList = [[q1, a1], [q2, a2], [q3, a3], [q4, a4], [q5, a5], [q6, a6], [q7, a7], [q8, a8]];
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
