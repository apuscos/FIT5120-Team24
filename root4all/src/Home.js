import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {API} from "aws-amplify"
import { NavLink as Link } from 'react-router-dom';
import FindAgency from "./FindAgency";
import image1 from "./Image/homePageImage.jpg"
import searchIcon from "./Image/search.png"

const Button = styled.button`
  background-image: url(${searchIcon});
  background-size: 25px 25px;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  height: 75px;
  width: 75px;
  background-color: white;
  filter: invert(100%);
  cursor:pointer;
  &:hover {
    opacity: 0.75;
  }
`;

const Input = styled.input`
  line-height: 1;
  width: 50%;
  height: 75px;
  border: none;
  font-family: 'Lato', sans-serif;
  font-size: 1.25em;
  padding-left: 30px;
  &:focus {
    outline: none;
  }
`;

const Slogan = styled.div`
  display: flex;
  height: 60vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${image1});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  background-position: center;
  opacity: 0.9;
`;

const FindAgencyArea =  styled(Link)`
  width: 250px;
  height: 75px;
  background-color: #EEEEEE;
  margin-top: 150px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Bebas Neue", cursive;
  font-size: 2.5em;
  color: black;
  opacity: 1;
  &:hover{
    text-decoration: underline;
  }
`;

const SloganTextArea = styled.div`
  width: 80%;
  height: 150px;
  background-color: transparent;
  color: white;
  font-family: "Bebas Neue", cursive;
  font-size: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
`;

const ValidAgencyArea = styled.div`
  display: flex;
  height: 250px;
  align-items: center;
  justify-content: center;
  background: #e3e3e3;
  flex-direction: column;
`;

const ValidAgencyAreaText = styled.div`
  height: 75%;
  width: 500px;
  font-family: "Bebas Neue", cursive;
  font-size: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchArea = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const ResultArea = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 1.5em;
  margin-bottom: 20px;
  margin-top: 10px;
`;

async function callApi(inputVal, callback) {
    try {
        const data = await API.get("api01ab30b1", '/items', {"queryStringParameters": {
            "inputString": inputVal
        }})
        console.log(data)
        //For testing only
        if (data){
            callback(`The ${inputVal} is a eligible Agency`)
        } else {
            callback(`The ${inputVal} is not a Eligible Agency`)
        }
    } catch (err) {
        console.log("Error:", err)
    }
}

async function callAPITest(){
    try {
        const data = await API.get("api01ab30b1", '/items')
        console.log(data)
    } catch (err) {
        console.log("Error:", err)
    }
}

function Home() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    // useEffect(()=>{
    //     callAPITest()
    // }, [])


    return (
        <div>
            <Slogan>
                <SloganTextArea>We support homeless people</SloganTextArea>
                <FindAgencyArea to={"/findAgency"}>Find Agency</FindAgencyArea>
            </Slogan>
            <ValidAgencyArea>
                <ValidAgencyAreaText>Or Check agency Eligibility</ValidAgencyAreaText>
                <SearchArea>
                    <Input onChange={e => setInput(e.target.value)} placeholder={"Please Enter Agency name"}/>
                    <Button onClick={() => callApi(input, setResult)}></Button>
                </SearchArea>
                <ResultArea>{result}</ResultArea>
            </ValidAgencyArea>
        </div>
);
}

export default Home;
