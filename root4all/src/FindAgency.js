import React, {useState} from 'react';
import styled from "styled-components";
import * as Search from "./SearchBar/searchBarComponents"
import {Table, Tr} from 'styled-table-component';
import {API} from "aws-amplify";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


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

const CheckBoxArea = styled.div`
  height: 20px;
  display: flex;
  width: 100%;
  margin-left: calc( 50% - 90px);
  margin-top: -15px;
`;

const CheckBox = styled.input`
  height: 20px;
  width: 20px;
  &:checked  {
    background: blue;
  }
`;

const CheckBoxLabel = styled.div`
  height: 20px;
  color: black;
  font-family: "Bebas Neue", cursive;
  line-height: 30px;
  font-size: 1.5em;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;
const Disclaimer = styled.div`
  font-family: 'Lato', sans-serif;
  text-align: end;
  font-size: 0.8em;
`;

const WarningTextArea = styled.div`
  font-family: 'Lato', sans-serif;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  width: 100%;
  height: 30px;
  margin-bottom: -20px;
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

const ResultArea = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 1.5em;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const TableTr = styled.tr`
  background-color: #5dd95d;
`;






async function agencySuburb(inputVal, callback, warningMsg, hospitalCheck) {
    if (!checkInputValid(inputVal)){
        warningMsg("Invalid input");
    } else {
        warningMsg("");
        const data = await API.get("roof4all", '/agencyinsuburb', {"queryStringParameters": {
                "inputString": inputVal
            }
        });
        var suburbResult = data["results"]
        var result = []
        var hospitalData = []
        if (hospitalCheck){
            const hospital = await API.get("roof4all", '/checkagencynearhospital');
            hospitalData = hospital["output"]
            console.log(hospitalData)
            for (var i = 0; i<hospitalData.length; i++) {
                var hospitalAgency = hospitalData[i]
                for (var j = 0; j < suburbResult.length; j++){
                    var suburbAgency = suburbResult[j];
                    if (hospitalAgency["Agency_Name"] === suburbAgency["Agency_Name"]){
                        result.push(suburbAgency);
                        break;
                    }
                }
            }
        } else {
            result = suburbResult
        }

        if (result.length === 0 ){
            callback([]);
            const options = {
                title: 'No Record Found',
                message: 'Do you want to find agency nearby?',
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => getNearAgency(inputVal, callback, warningMsg, hospitalData)
                    },
                    {
                        label: 'No',
                        onClick: () => warningMsg("No record found")
                    }
                ]

            };
            confirmAlert(options, "a")
        } else {
            callback(result);
        }
    }
}

async function getNearAgency(inputVal, callback, warningMsg, hospitalData){
    const data = await API.get("roof4all", '/findnearagency ', {"queryStringParameters": {
            "inputString": inputVal
        }
    });
    var result = []
    console.log(data)
    console.log(hospitalData)
    if (hospitalData.length > 0){
        for (var i = 0; i<hospitalData.length; i++) {
            var hospitalAgency = hospitalData[i]
            for (var j = 0; j < data["results"].length; j++){
                var suburbAgency = data["results"][j];
                if (hospitalAgency["Agency_Name"] === suburbAgency["Agency_Name"]){
                    result.push(hospitalAgency);
                    break;
                }
            }
        }
    } else {
        result = data["results"]
    }
    if (result.length == 0) {
        warningMsg("No record found")
    } else {
        callback(result)
    }
}

async function getAgencyNearHospital(callback){
    try {
        const data = await API.get("roof4all", '/checkagencynearhospital');
        callback(data["results"])
    } catch (err) {
        console.log("Error:", err)
    }
}

async function checkEligibility(inputVal, callback) {
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
            callback(`${inputVal} agency is not a government registered agency`)
        }
    } catch (err) {
        console.log("Error:", err)
    }
}

function checkInputValid(inputVal) {
    var numberReg = /^[0-9]*$/
    var characterReg = /^[A-Za-z\s]+$/
    var digitalOnly = numberReg.test(inputVal);
    var characterOnly = characterReg.test(inputVal);
    if ((digitalOnly === true && characterOnly === true) || (digitalOnly === false && characterOnly === false) || inputVal.length === 0) {
        return false;
    } else {
        return true;
    }
}


function FindAgency() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState([{}]);
    const [warningMsg, setWarningMsg] = useState("");
    const [eligibleInput, setEligibleInput] = useState("");
    const [eligibleResult, setEligibleResult] = useState("");
    const [check, setCheck] = useState(false);
    return (
        <div>
            <Search.Area>
                <Search.TextArea>Search agency by Postcode or Suburb name</Search.TextArea>
                <Search.SearchArea>
                    <Search.InputArea onChange={e => setInput(e.target.value)}
                                      placeholder={"Please Enter PostCode/Suburb"}/>
                    <Search.SearchButton onClick={() => agencySuburb(input, setResult, setWarningMsg, check)}></Search.SearchButton>
                </Search.SearchArea>

                <CheckBoxArea>
                    <CheckBox type="checkbox" checked={check} onChange={()=>{setCheck(!check)}}/>
                    <CheckBoxLabel>Near Hospital</CheckBoxLabel>
                </CheckBoxArea>
                <WarningTextArea>{warningMsg}</WarningTextArea>

            </Search.Area>
            <Search.Area>
                <Search.TextArea>or check agency is registered or not?</Search.TextArea>
                <Search.SearchArea>
                    <Search.InputArea onChange={e => setEligibleInput(e.target.value)} placeholder={"Please Enter Agency name"}/>
                    <Search.SearchButton onClick={() => checkEligibility(eligibleInput, setEligibleResult)}></Search.SearchButton>
                </Search.SearchArea>
                <ResultArea>{eligibleResult}</ResultArea>
            </Search.Area>
            <TableTitle>Agency Information</TableTitle>
            <TableWrapper>
                <Table responsiveMd>
                    <thead>
                    <tr success>
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
                                <td><a target="_blank" href={x["Url"]}>{x["Agency_Name"]}</a></td>
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
