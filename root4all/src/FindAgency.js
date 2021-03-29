import React, {useState} from 'react';
import styled from "styled-components";
import * as Search from "./SearchBar/searchBarComponents"
import {Table, Tr} from 'styled-table-component';
import {API} from "aws-amplify";

const Button = styled.div`
  width: 400px;
  height: 75px;
  background-color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Bebas Neue", cursive;
  font-size: 2.5em;
  color: white;
  opacity: 1;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const TableTitle = styled.div`
  font-family: "Bebas Neue", cursive;
  font-size: 2.5em;
  color: black;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const TableWrapper = styled.div`
  width: 70%;
  text-align: center;
  margin-left: 15%;
`;


async function callApi(inputVal, callback) {
    checkInputValid(inputVal)
    console.log(inputVal)
}

async function getAgencyNearHospital(callback){
    try {
        const data = await API.get("roof4all", '/checkagencynearhospital');
        callback(data["results"])
    } catch (err) {
        console.log("Error:", err)
    }
}

function checkInputValid(inputVal) {
    var numberReg = /^[0-9]*$/
    var characterReg = /^[a-zA-Z]*$/
    var digitalOnly = numberReg.test(inputVal);
    var characterOnly = characterReg.test(inputVal);
    if ((digitalOnly === true && characterOnly === true) || (digitalOnly === false && characterOnly === false)) {
        console.log("Invalid input, please enter only postcode or suburb name")
    } else {
        console.log("Valid input")
    }
}

function FindAgency() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState([{}]);
    return (
        <div>
            <Search.Area>
                <Search.TextArea>Search agency by Postcode or Suburb name</Search.TextArea>
                <Search.SearchArea>
                    <Search.InputArea onChange={e => setInput(e.target.value)}
                                      placeholder={"Please Enter PostCode/Suburb"}/>
                    <Search.SearchButton onClick={() => callApi(input, setResult)}></Search.SearchButton>
                </Search.SearchArea>
            </Search.Area>
            <Search.Area>
                <Search.SearchArea>
                    <Search.TextArea>Or you can</Search.TextArea>
                </Search.SearchArea>
                <Button onClick={()=> getAgencyNearHospital(setResult)}>Find agency near hospital</Button>
            </Search.Area>
            <TableTitle>Agency Information</TableTitle>
            <TableWrapper>
                <Table responsiveMd theadDark>
                    <thead>
                    <tr>
                        <th scope="col">Agency Name</th>
                        <th scope="col">Agency Suburb</th>
                        <th scope="col">Agency Postcode</th>
                        <th scope="col">Agency Register Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {result.map((x, i) => {
                        return (
                            <Tr key={i}>
                                <td>{x["Agency_Name"]}</td>
                                <td>{x["Agency_Suburb"]}</td>
                                <td>{x["Agency_Postcode"]}</td>
                                <td>{x["Agency_Reg_Date"]}</td>
                            </Tr>
                        )
                    })}
                        </tbody>
                        </Table>
                        </TableWrapper>
                        </div>
                        )
                    }

export default FindAgency;
