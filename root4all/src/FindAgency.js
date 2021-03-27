import React, {useState} from 'react';
import styled from "styled-components";
import * as Search from "./SearchBar/searchBarComponents"
import { Table, Tr } from 'styled-table-component';
const Button =  styled.div`
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
  &:hover{
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
    console.log(inputVal)
    callback([
        {agencyName: "test1", agencyAddress: "Address1", agencyPhone: 123},
        {agencyName: "test2", agencyAddress: "Address2", agencyPhone: 1234},
        {agencyName: "test3", agencyAddress: "Address3", agencyPhone: 1235}
    ])
}


function FindAgency() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState([{}]);
    return (
        <div>
            <Search.Area>
                <Search.TextArea >Search agency by Postcode or Suburb name</Search.TextArea>
                <Search.SearchArea>
                    <Search.InputArea onChange={e => setInput(e.target.value)} placeholder={"Please Enter PostCode/Suburb"}/>
                    <Search.SearchButton onClick={() => callApi(input, setResult)}></Search.SearchButton>
                </Search.SearchArea>
            </Search.Area>
            <Search.Area>
                <Search.SearchArea>
                    <Search.TextArea>Or you can</Search.TextArea>
                </Search.SearchArea>
                <Button>Find agency near hospital</Button>
            </Search.Area>
            <TableTitle>Agency Information</TableTitle>
            <TableWrapper>
                <Table responsiveMd theadDark >
                    <thead>
                    <tr>
                        <th scope="col">Agency Name</th>
                        <th scope="col">Agency Address</th>
                        <th scope="col">Agency Phonenumber</th>
                    </tr>
                    </thead>
                    <tbody>
                       {result.map((x, i) => {
                           return (
                           <Tr>
                               <td>{x["agencyName"]}</td>
                               <td>{x["agencyAddress"]}</td>
                               <td>{x["agencyPhone"]}</td>
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
