import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {API} from "aws-amplify"

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: #db7093;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  width: 100%;
  border: solid black;
`;

async function callApi(inputVal, callback) {
    console.log(inputVal)
    callback("test")
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

    useEffect(()=>{
        callAPITest()
    }, [])

    return (
        <div>
            This is home page
            <Input onChange={e => setInput(e.target.value)} placeholder={"Please Enter Agency name"}/>
            <Button onClick={() => callApi(input, setResult)}>Search</Button>
            <div>{result}</div>
        </div>
);
}

export default Home;
