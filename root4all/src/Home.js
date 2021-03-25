import React, {useState} from 'react';
import styled from "styled-components";


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

function Home() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
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
