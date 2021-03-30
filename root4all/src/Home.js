import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {API} from "aws-amplify"
import { NavLink as Link } from 'react-router-dom';
import image1 from "./Image/homePageImage.jpg"
import * as Search from "./SearchBar/searchBarComponents"
const Disclaimer = styled.div`
  font-family: 'Lato', sans-serif;
  text-align: end;
  font-size: 0.8em;
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
  margin-top: 50px;
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
  height: 50px;
  background-color: transparent;
  color: white;
  font-family: 'Lato', sans-serif;
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
`;


const ResultArea = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 1.5em;
  margin-bottom: 20px;
  margin-top: 10px;
`;

async function callApi(inputVal, callback) {
    if (inputVal.length <= 0){
        callback(`Please enter the agency name`);
        return
    }
    try {
        const data = await API.get("roof4all", '/checkAgency', {"queryStringParameters": {
            "inputString": inputVal
        }})
        console.log(data)
        //For testing only
        if (data["found"]){
            callback(`${inputVal} agency is a government registered agency`)
        } else {
            callback(`${inputVal}agency is not a government registered agency`)
        }
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
                <SloganTextArea>Are you homeless?</SloganTextArea>
                <SloganTextArea>Are you a rough sleeper and looking for nearby social housing?</SloganTextArea>
                <SloganTextArea>Are you seeking shelter?</SloganTextArea>
                <SloganTextArea>If you said yes to any of these questions, YOU ARE AT THE RIGHT PLACE.</SloganTextArea>
                <FindAgencyArea to={"/findAgency"}>Find Agency</FindAgencyArea>
            </Slogan>
            <Search.Area>
                <Search.TextArea>or check agency is registered or not?</Search.TextArea>
                <Search.SearchArea>
                    <Search.InputArea onChange={e => setInput(e.target.value)} placeholder={"Please Enter Agency name"}/>
                    <Search.SearchButton onClick={() => callApi(input, setResult)}></Search.SearchButton>
                </Search.SearchArea>
                <ResultArea>{result}</ResultArea>
            </Search.Area>
            <Disclaimer>The information provided here is on the basis of the information provided on the website</Disclaimer>
        </div>
);
}

export default Home;
