import React, { useRef, useEffect, useState } from 'react';
import styled from "styled-components";
import * as Search from "./SearchBar/searchBarComponents"
import {Table, Tr} from 'styled-table-component';
import {API} from "aws-amplify";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Navbar from "./Navigation/Nav";
import mapboxgl from 'mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2Fvd2FuZyIsImEiOiJja215anpwaDIwMTcwMnZvMm8xcDU5eXcyIn0.FmAr1bkX7r19ygBIqsySUQ';

const CheckBoxArea = styled.div`
  height: 20px;
  display: flex;
  margin-left: calc(-50% + 50px);
  margin-top: -15px;
`;

const CheckBox = styled.input`
  height: 20px;
  width: 20px;

  &:checked {
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
  color: red;
`;


const MapArea = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 800px;
  height: 800px;
`;

async function agencySuburb(inputVal, callback, warningMsg, hospitalCheck) {
    if (!checkInputValid(inputVal)) {
        warningMsg("Invalid input");
    } else {
        warningMsg("");
        // Get agencies in the specific suburb
        const data = await API.get("roof4all", '/agencyinsuburb', {
            "queryStringParameters": {
                "inputString": inputVal
            }
        });
        const suburbResult = data["results"];
        let result = [];
        let hospitalData = [];
        if (hospitalCheck) {
            // Get all agencies that near hospital
            const hospital = await API.get("roof4all", '/checkagencynearhospital', {});
            hospitalData = hospital["output"]
            // Matching the agencies near hospital with the agencies in the specific suburb
            for (let i = 0; i < hospitalData.length; i++) {
                const hospitalAgency = hospitalData[i];
                for (let j = 0; j < suburbResult.length; j++) {
                    const suburbAgency = suburbResult[j];
                    if (hospitalAgency["Agency_Name"] === suburbAgency["Agency_Name"]) {
                        result.push(suburbAgency);
                        break;
                    }
                }
            }
        } else {
            // No hospital check, just return the agencies in specific suburb
            result = suburbResult
        }
        // If No results got, get Nearby agency
        if (result.length === 0) {
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
                        onClick: () => warningMsg("Try another postcode or suburb")
                    }
                ]

            };
            confirmAlert(options)
        } else {
            callback(result);
        }
    }
}

async function getNearAgency(inputVal, callback, warningMsg, hospitalData) {
    // Get nearby agency with specific input
    const data = await API.get("roof4all", '/findnearagency ', {
        "queryStringParameters": {
            "inputString": inputVal
        }
    });
    let result = [];
    // Compare with hospital data just get
    if (hospitalData.length > 0) {
        for (let i = 0; i < hospitalData.length; i++) {
            const hospitalAgency = hospitalData[i];
            for (let j = 0; j < data["results"].length; j++) {
                const suburbAgency = data["results"][j];
                if (hospitalAgency["Agency_Name"] === suburbAgency["Agency_Name"]) {
                    result.push(hospitalAgency);
                    break;
                }
            }
        }
    } else {
        result = data["results"]
    }
    // If no results, get results in the melbourne city
    if (result.length === 0) {
        const options = {
            title: 'No nearby agency Found',
            message: 'Sorry, there are no nearby agencies . We can still suggest you some agencies,if you would like',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => getAgencyInMelbourne(callback)
                },
                {
                    label: 'No',
                    onClick: () => warningMsg("Try another postcode or suburb")
                }
            ]

        };
        confirmAlert(options)
    } else {
        callback(result)
    }
}

async function getAgencyInMelbourne(callback) {
    try {
        // Get data with postcode 3000
        const data = await API.get("roof4all", '/agencyinsuburb', {
            "queryStringParameters": {
                "inputString": 3000
            }
        });
        callback(data["results"])
    } catch (err) {
        console.log("Error:", err)
    }
}

async function checkEligibility(inputVal, callback, listInfo) {
    if (inputVal.length <= 0) {
        callback(`Please enter the agency name`);
        return
    }
    try {
        const data = await API.get("roof4all", '/checkAgency', {
            "queryStringParameters": {
                "inputString": inputVal
            }
        })
        if (data["found"]) {
            callback(`${inputVal} agency is a government registered agency`)
        } else {
            const options = {
                title: 'Oops!',
                message: `${inputVal} agency is not a government registered agency, if you would like, we may suggest you some agencies in the city`,
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => getAgencyInMelbourne(listInfo)
                    },
                    {
                        label: 'No',
                        onClick: () => callback(`You can still search for agencies in suburb using the find agency feature`)
                    }
                ]

            };
            confirmAlert(options)
        }
    } catch (err) {
        console.log("Error:", err)
    }
}

function checkInputValid(inputVal) {
    const numberReg = /^[0-9]*$/;
    const characterReg = /^[A-Za-z\s]+$/;
    const digitalOnly = numberReg.test(inputVal);
    const characterOnly = characterReg.test(inputVal);
    return !((digitalOnly === true && characterOnly === true) || (digitalOnly === false && characterOnly === false) || inputVal.length === 0);
}




function FindAgency() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState([]);
    const [warningMsg, setWarningMsg] = useState("");
    const [eligibleInput, setEligibleInput] = useState("");
    const [eligibleResult, setEligibleResult] = useState("");
    const [check, setCheck] = useState(false);

    const mapContainer = useRef();
    const [lng, setLng] = useState(145.00916604815802);
    const [lat, setLat] = useState(-37.78036799990421);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });

        for (let i = 0; i < result.length; i++){
            const location = result[i];
            const lat = location["Lat"];
            const lng = location["Lng"];
            let marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map)
        }

        return () => map.remove();
    }, [lng, lat, zoom, result]);

    return (
        <>
            <Navbar />
            <Search.Area>
                <Search.TextArea>Search agency by Postcode or Suburb name</Search.TextArea>
                <Search.SearchArea>
                    <Search.InputArea onChange={e => setInput(e.target.value)}
                                      placeholder={"Please Enter PostCode/Suburb"}/>
                    <Search.SearchButton onClick={() => agencySuburb(input, setResult, setWarningMsg, check)}/>
                </Search.SearchArea>
                <CheckBoxArea>
                    <CheckBox type="checkbox" checked={check} onChange={() => {
                        setCheck(!check)
                    }}/>
                    <CheckBoxLabel>Near Hospital</CheckBoxLabel>
                </CheckBoxArea>
                <WarningTextArea>{warningMsg}</WarningTextArea>
            </Search.Area>
            <Search.Area>
                <Search.TextArea>or check agency is registered or not?</Search.TextArea>
                <Search.SearchArea>
                    <Search.InputArea onChange={e => setEligibleInput(e.target.value)}
                                      placeholder={"Please Enter Agency name"}/>
                    <Search.SearchButton onClick={() => checkEligibility(eligibleInput, setEligibleResult, setResult)}/>
                </Search.SearchArea>
                <ResultArea>{eligibleResult}</ResultArea>
            </Search.Area>
            <TableTitle>Agency Information</TableTitle>
            <TableWrapper>
                <Table>
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
                                <td><a target="_blank"  rel="noreferrer"  href={x["Url"]}>{x["Agency_Name"]}</a></td>
                                <td>{x["Agency_Suburb"]}</td>
                                <td>{x["Agency_Postcode"]}</td>
                                <td>{x["Agency_Reg_Date"]}</td>
                            </Tr>
                        )
                    })}
                    </tbody>
                </Table>
            </TableWrapper>
            <MapArea ref={mapContainer}>
            </MapArea>
        </>

    )
}

export default FindAgency;
