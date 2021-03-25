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

async function callApi(inputVal, callback) {
    console.log(inputVal)
    callback(["test1", "test2", "test3"])
}

function FindAgency() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState([]);
    return (
        <div>
            <Input onChange={e => setInput(e.target.value)} placeholder={"Please Enter PostCode/Suburb"}/>
            <Button onClick={() => callApi(input, setResult)}>Search</Button>
            <div>
                <h3>Result:</h3>
                <ul>
                    {result.map((x,i) => {
                            return (
                                <li key={i}>{x}</li>
                            )
                        }
                    )}
                </ul>
            </div>
        </div>
    )
}

export default FindAgency;
