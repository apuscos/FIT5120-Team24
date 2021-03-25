import React, {useState} from 'react';
import styled from "styled-components";


const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  width: 100%;
  border: solid black;
  
  
`;


async function callApi(inputVal) {
    console.log(inputVal)
}

function Home() {
    const [input, setInput] = useState("");
    return (
        <div>
            <Input onChange={e => setInput(e.target.value)} />
            <Button onClick={() => callApi(input)}>Search</Button>
        </div>
    );
}

export default Home;
