import React, { useRef, useEffect, useState } from 'react';
import styled from "styled-components";
import * as Search from "./SearchBar/searchBarComponents"
import {API} from "aws-amplify";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Navbar from "./Navigation/NavBar";
import mapboxgl from 'mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import { Scrollbars } from 'react-custom-scrollbars';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import Card from '@material-ui/core/Card';
import LinearProgress from '@material-ui/core/LinearProgress';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2Fvd2FuZyIsImEiOiJja215anpwaDIwMTcwMnZvMm8xcDU5eXcyIn0.FmAr1bkX7r19ygBIqsySUQ';

const LinearProgressStyled = styled(LinearProgress)`
  && {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

const CheckBoxArea = styled.div`
  height: 20px;
  display: flex;
  margin-left: calc(-50% + 80px);
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
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 600;
  line-height: 30px;
  font-size: 1.5em;
`;


const WarningTextArea = styled.div`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 600;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  width: 100%;
  height: 30px;
  margin-bottom: -20px;
`;

const ResultArea = styled.div`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 600;
  font-size: 1.5em;
  margin-bottom: 20px;
  margin-top: 10px;
  color: ${props => 
     props.msg === `You can still search for agencies in suburb using the find agency feature` ? "red": "#2BA837"
  };
`;


const MapArea = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 65%;
  height: 800px;
  margin-bottom: 60px;
`;





async function agencySuburb(inputVal, callback, warningMsg, hospitalCheck, showScrollbar, setLoading) {
    if (!checkInputValid(inputVal)) {
        warningMsg("Invalid input");
    } else {
        warningMsg("");
        // Get agencies in the specific suburb
        setLoading(true);
        const data = await API.get("roof4all", '/agencyinsuburb', {
            "queryStringParameters": {
                "inputString": inputVal
            }
        });
        const suburbResult = data["results"];
        console.log(suburbResult)
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
        setLoading(false);
        // If No results got, get Nearby agency
        if (result.length === 0) {
            callback([]);
            const options = {
                title: 'No Record Found',
                message: 'Do you want to find agency nearby?',
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => getNearAgency(inputVal, callback, warningMsg, hospitalData, showScrollbar, setLoading)
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
            showScrollbar(false);
        }
    }
}

async function getNearAgency(inputVal, callback, warningMsg, hospitalData, showScrollbar, setLoading) {
    // Get nearby agency with specific input
    setLoading(true);
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
    setLoading(false);
    // If no results, get results in the melbourne city
    if (result.length === 0) {
        const options = {
            title: 'No nearby agency Found',
            message: 'Sorry, there are no nearby agencies . We can still suggest you some agencies,if you would like',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => getAgencyInMelbourne(callback, showScrollbar, setLoading)
                },
                {
                    label: 'No',
                    onClick: () => warningMsg("Try another postcode or suburb")
                }
            ]

        };
        confirmAlert(options)
    } else {
        showScrollbar(false)
        callback(result)
    }
}

async function getAgencyInMelbourne(callback, showScrollbar, setLoading) {
    try {
        // Get data with postcode 3000
        setLoading(true);
        const data = await API.get("roof4all", '/agencyinsuburb', {
            "queryStringParameters": {
                "inputString": 3000
            }
        });
        setLoading(false);
        callback(data["results"]);
        showScrollbar(false);
    } catch (err) {
        console.log("Error:", err)
    }
}

async function checkEligibility(inputVal, callback, listInfo, setScrollbarHidden, setLoading) {
    if (inputVal.length <= 0) {
        callback(`Please enter the agency name`);
        return
    }
    try {
        setLoading(true);
        const data = await API.get("roof4all", '/checkAgency', {
            "queryStringParameters": {
                "inputString": inputVal
            }
        })
        setLoading(false);
        if (data["found"]) {
            callback(`${inputVal} agency is a government registered agency`)
        } else {
            const options = {
                title: 'Oops!',
                message: `${inputVal} agency is not a government registered agency, if you would like, we may suggest you some agencies in the city`,
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => getAgencyInMelbourne(listInfo, setScrollbarHidden, setLoading)
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


function getBoundingBox (data) {
    let bounds = {},latitude, longitude;
    for (let j = 0; j < data.length; j++) {

        longitude = data[j][0];
        latitude = data[j][1];

        // Update the bounds recursively by comparing the current
        // xMin/xMax and yMin/yMax with the coordinate
        // we're currently checking
        bounds.xMin = bounds.xMin < longitude ? bounds.xMin : longitude;
        bounds.xMax = bounds.xMax > longitude ? bounds.xMax : longitude;
        bounds.yMin = bounds.yMin < latitude ? bounds.yMin : latitude;
        bounds.yMax = bounds.yMax > latitude ? bounds.yMax : latitude;
    }
    // Returns an object that contains the bounds of this GeoJSON
    // data. The keys of this object describe a box formed by the
    // northwest (xMin, yMin) and southeast (xMax, yMax) coordinates.
    return bounds;
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
    const [scrollbarHidden, setScrollbarHidden] = useState(true);
    const [map, setMap]= useState(null);
    const [allBound, setAllBound] = useState([]);
    const [currentlyIdx, setCurrentlyIdx] = useState(-1);
    const [markerList, setMarkerList] = useState([]);
    const scrollRef = useRef(null);
    const [markerClicked, setMarkerClicked] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11?optimize=true',
            center: [lng, lat],
            zoom: zoom
        });
        setMap(map);
        setCurrentlyIdx(-1);
        setAllBound([]);
        let markers = [];
        let markerListTemp = [];
        for (let i = 0; i < result.length; i++){
            const location = result[i];
            const lat = location["Lat"];
            const lng = location["Lng"];
            let popup = new mapboxgl.Popup({ offset: 25, closeButton:false }).setHTML(
                "<h2>" + location['Agency_Name'] + "</h2>"
            );
            popup.on('open', function(){
               setCurrentlyIdx(i);
               setMarkerClicked(true);
            });
            popup.on('close', function(){
                setCurrentlyIdx(-1);
                setMarkerClicked(false);
            });
            let marker = new mapboxgl.Marker().setLngLat([lng, lat]).setPopup(popup).addTo(map);
            markers.push([lat, lng]);
            markerListTemp.push(marker);
        }
        setMarkerList(markerListTemp);
        if (markers.length > 0){
            const bound = getBoundingBox(markers);
            const xMin = bound.xMin;
            const yMin = bound.yMin;
            const xMax = bound.xMax;
            const yMax = bound.yMax;
            let bounds = [[yMin, xMin], [yMax, xMax]];
            if (markers.length === 1){
                bounds = [[yMin - 0.002, xMin-0.002], [yMax+0.002, xMax+0.002]];
            }
            setAllBound(bounds);
            map.fitBounds(bounds, {padding: 40})
        }

        return () => map.remove();
    }, [lng, lat, zoom, result]);

    useEffect(()=> {
        if (currentlyIdx !== -1) {
            for(let i = 0; i < markerList.length; i++){
                if (i !== currentlyIdx) {
                    markerList[i].getPopup().remove();
                }
            }
            const lat = markerList[currentlyIdx].getLngLat().lat
            const lng = markerList[currentlyIdx].getLngLat().lng
            map.fitBounds([[lng - 0.001, lat - 0.001], [lng + 0.001, lat + 0.001]], {padding: 40});
            markerList[currentlyIdx].getPopup().addTo(map);
        } else if (allBound.length > 0){
            for(let i = 0; i < markerList.length; i++){
                markerList[i].getPopup().remove();
            }
            map.fitBounds(allBound, {padding: 40});
        }

    }, [allBound,map,markerList, currentlyIdx]);

    return (
        <>
            {loading ? <LinearProgressStyled color="secondary"/> : null}
            <Navbar />
            <Search.Area>
                <Search.TextArea>Search agency by Postcode or Suburb name</Search.TextArea>
                <Search.SearchArea>
                    <Search.InputArea onChange={e => setInput(e.target.value)}
                                      placeholder={"Please Enter PostCode/Suburb"}/>
                    <Search.SearchButton onClick={() => {
                        agencySuburb(input, setResult, setWarningMsg, check, setScrollbarHidden, setLoading);
                        setScrollbarHidden(true);
                    }}/>
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
                    <Search.SearchButton onClick={() => {checkEligibility(eligibleInput, setEligibleResult, setResult, setScrollbarHidden, setLoading);
                                                        setScrollbarHidden(true);
                    }}/>
                </Search.SearchArea>
                <ResultArea msg={eligibleResult}>{eligibleResult}</ResultArea>
            </Search.Area>
            <AgencyInfoArea>
                {!scrollbarHidden ?
                    <Scrollbars ref={scrollRef} style={{ width: "35%", height: 800, background:"#f7f7f7"}}>
                        {result.map((x, i) => {
                            return(
                                <AgencyInfo result={x} scrollbar={scrollRef} id={i} currentlyIdx={currentlyIdx} setCurrentIdx={setCurrentlyIdx} markerClicked={markerClicked} setMarkerClicked={setMarkerClicked}/>
                            );
                        })}
                    </Scrollbars> : null
                }
                <MapArea ref={mapContainer}/>
            </AgencyInfoArea>
        </>

    )
}

const AgencyLink = styled.a`
  color: black;
  &:visited{
    color: black;
  }
  font-size: 20px;
`;

const LinkIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AgencyInfoArea = styled.div`
  display: flex;
  height: 1000px;
`;

const AgencyInfoBlock = styled(Card)`
  display: flex;
  height: 200px;
  margin: 20px;
  position: relative;
  cursor: pointer;
  flex-direction: column;

  &:hover {
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      border: 4px solid #2BA837;
      width: calc(100% - 8px);
    }
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    border: ${props => props.clicked ? "4px solid #2BA837" : "0px solid #2BA837"};
    width: calc(100% - 8px);
  }

`
const AgencyInfoTitle = styled.div`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 600;
  font-size: 28px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
`;

const AgencyInfoContent = styled.div`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 500;
  font-size: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;


function AgencyInfo(props) {
    const [clicked, setClicked] = useState(false)
    const [clickStatus, setClickStatus] = useState(false);
    const agencyName = props.result["Agency_Name"] ? props.result["Agency_Name"] : "";
    const url = props.result["Url"] ? props.result["Url"] : "";
    const address = props.result["Address"] ? props.result["Address"] : ""
    const phone = props.result["Phone"] ? props.result["Phone"] : ""
    const id = props.id;
    const currentlyIdx = props.currentlyIdx;
    const scrollRef = useRef(null);
    useEffect(()=>{
        if (currentlyIdx === -1){
            setClicked(false);
            setClickStatus(false);
        }
        if(currentlyIdx !== id && currentlyIdx !== -1){
            setClicked(false);
            setClickStatus(false);
        } else if (currentlyIdx === id){
            console.log(props.markerClicked);
            console.log(!clickStatus)
            if(props.markerClicked && !clickStatus) {
                props.scrollbar.current.scrollTop(220 * id);
            }
            setClicked(true);
        }
    }, [currentlyIdx, id, props.markerClicked, props.scrollbar, clickStatus]);
    return(
        <>
            <AgencyInfoBlock ref={scrollRef} clicked={clicked} onClick={()=>{
                setClicked(!clicked);
                if (!clicked){
                    props.setCurrentIdx(id);
                    setClickStatus(true);
                } else {
                    props.setCurrentIdx(-1);
                }
            }}>
                <AgencyInfoTitle>{agencyName}</AgencyInfoTitle>
                <AgencyInfoContent>
                    <LinkIconWrapper>
                        <HomeRoundedIcon/> &nbsp;
                        <div>{address}</div>
                    </LinkIconWrapper>
                    <LinkIconWrapper>
                        <PhoneRoundedIcon/> &nbsp;
                        <div>{phone}</div>
                    </LinkIconWrapper>
                    <LinkIconWrapper>
                        <LanguageRoundedIcon/> &nbsp;
                        <AgencyLink target="_blank" rel="noreferrer" href={url}>Go to website</AgencyLink>
                    </LinkIconWrapper>
                </AgencyInfoContent>
            </AgencyInfoBlock>
        </>
    );
}



export default FindAgency;
