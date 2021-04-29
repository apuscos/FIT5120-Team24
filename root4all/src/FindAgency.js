import React, { useRef, useEffect, useState } from 'react';
import styled from "styled-components";
import * as Search from "./SearchBar/searchBarComponents"
import {API} from "aws-amplify";
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
import Slider from '@material-ui/core/Slider';
import FindAgencyBackground from "./Image/FindAgencyBackground.webp"
import "mapbox-gl/dist/mapbox-gl.css"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2Fvd2FuZyIsImEiOiJja215anpwaDIwMTcwMnZvMm8xcDU5eXcyIn0.FmAr1bkX7r19ygBIqsySUQ';

const BackgroundWrapper = styled.div`
  background-image: url(${FindAgencyBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #7A7DA0;
  background-position: center;
`;

const GreenButton = styled(Button)`
    && {color: #2BA837;}
`;


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
`;

const ResultArea = styled.div`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 600;
  font-size: 1.5em;
  margin-bottom: 20px;
  margin-top: 10px;
  color: ${props => 
     props.msg === "You can still search for agencies in suburb using the find agency feature" ? "red": "#2BA837"
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

const SliderStyled = styled(Slider)`
  
  && {
    width: 500px;
    color: green;
  }
`




async function agencySuburb(inputVal, callback, warningMsg, hospitalCheck, showScrollbar, setLoading, setNearByDialogs, setHospitalData, setRadius) {
    const data = await API.get("roof4all", '/agencyinsuburb', {
        "queryStringParameters": {
            "inputString": inputVal
        }
    });
    if (data["error"]){
        warningMsg("Invalid suburb input");
        setLoading(false);
        return;
    }
    const suburbResult = data["results"];
    let result = [];
    if (hospitalCheck) {
        // Get all agencies that near hospital
        const hospital = await API.get("roof4all", '/checkagencynearhospital', {});
        const hospitalData = hospital["output"];
        setHospitalData(hospitalData);
        // Matching the agencies near hospital with the agencies in the specific suburb
        for (const hospitalAgency of hospitalData) {
            for (const suburbAgency of suburbResult) {
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
        setRadius(5);
        callback([]);
        setNearByDialogs(true)
    } else {
        callback(result);
        showScrollbar(false);
    }

}

async function getNearAgency(inputVal, callback, warningMsg, hospitalData, showScrollbar, setLoading, radius, check, setSuggestDialog) {
    // Get nearby agency with specific input
    setLoading(true);
    console.log(radius);
    const data = await API.get("roof4all", '/findnearagency ', {
        "queryStringParameters": {
            "inputString": inputVal,
            "radius": radius
        }
    });
    if (data["error"]){
        warningMsg("Invalid suburb input");
        setLoading(false);
        return;
    }
    let result = [];
    // Compare with hospital data just get
    if (check) {
        for (const hospitalAgency of hospitalData) {
            for (const suburbAgency of data["output"]) {
                if (hospitalAgency["Agency_Name"] === suburbAgency["Agency_Name"]) {
                    result.push(hospitalAgency);
                    break;
                }
            }
        }
    } else {
        result = data["output"];
    }
    console.log(result);
    setLoading(false);
    // If no results, get results in the melbourne city
    if (result.length === 0) {
        setSuggestDialog(true);
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

async function checkEligibility(inputVal, callback, listInfo, setScrollbarHidden, setLoading, setCheckEligibilityDialog) {
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
            setCheckEligibilityDialog(true);
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
    for (const latlng of data) {
        longitude = latlng[0];
        latitude = latlng[1];
        bounds.xMin = bounds.xMin < longitude ? bounds.xMin : longitude;
        bounds.xMax = bounds.xMax > longitude ? bounds.xMax : longitude;
        bounds.yMin = bounds.yMin < latitude ? bounds.yMin : latitude;
        bounds.yMax = bounds.yMax > latitude ? bounds.yMax : latitude;
    }
    return bounds;
}

function FindAgency() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState([]);
    const [warningMsg, setWarningMsg] = useState("");
    const [eligibleInput, setEligibleInput] = useState("");
    const [eligibleResult, setEligibleResult] = useState("");
    const [check, setCheck] = useState(false);
    const [radius, setRadius] = useState(5);
    const mapContainer = useRef();
    const [scrollbarHidden, setScrollbarHidden] = useState(true);
    const [globalMap, setMap]= useState(null);
    const [allBound, setAllBound] = useState([]);
    const [currentlyIdx, setCurrentlyIdx] = useState(-1);
    const [markerList, setMarkerList] = useState([]);
    const scrollRef = useRef(null);
    const [markerClicked, setMarkerClicked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [nearByDialogs, setNearByDialogs] = useState(false);
    const [hospitalData, setHospitalData] = useState([]);
    const [suggestDialog, setSuggestDialog] = useState(false);
    const [checkEligibilityDialog, setCheckEligibilityDialog] = useState(false);

    const marks = [
        {
            value: 5,
            label: '5KM',
        },
        {
            value: 10,
            label: '10KM',
        },
        {
            value: 15,
            label: '15KM',
        },
        {
            value: 20,
            label: '20KM',
        },
        {
            value: 25,
            label: '25KM',
        },
        {
            value: 30,
            label: '30KM',
        },
        {
            value: 35,
            label: '35KM',
        },
        {
            value: 40,
            label: '40KM',
        },
        {
            value: 45,
            label: '45KM',
        },
        {
            value: 50,
            label: '50KM',
        },
        {
            value: 55,
            label: '>50KM'
        }
    ];

    function valuetext(value) {
        return `${value}KM`;
    }


    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11?optimize=true',
            center: [145.00916604815802, -37.78036799990421],
            zoom: 9
        });
        setMap(map);
        setCurrentlyIdx(-1);
        setAllBound([]);
        let markers = [];
        let markerListTemp = [];
        for (let i = 0; i < result.length; i++){
            const location = result[i];
            const latPoint = location["Lat"];
            const lngPoint = location["Lng"];
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
            let marker = new mapboxgl.Marker().setLngLat([lngPoint, latPoint]).setPopup(popup).addTo(map);
            markers.push([latPoint, lngPoint]);
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
    }, [result]);

    useEffect(()=> {
        if (currentlyIdx !== -1) {
            for(let i = 0; i < markerList.length; i++){
                if (i !== currentlyIdx) {
                    markerList[i].getPopup().remove();
                }
            }
            const latItem = markerList[currentlyIdx].getLngLat().lat
            const lngItem = markerList[currentlyIdx].getLngLat().lng
            globalMap.fitBounds([[lngItem - 0.001, latItem - 0.001], [lngItem + 0.001, latItem + 0.001]], {padding: 40});
            markerList[currentlyIdx].getPopup().addTo(globalMap);
        } else if (allBound.length > 0){
            for(const marker of markerList){
                marker.getPopup().remove();
            }
            globalMap.fitBounds(allBound, {padding: 40});
        }

    }, [allBound,globalMap,markerList, currentlyIdx]);

    const closeNearByDisagree = () => {
        setNearByDialogs(false);
        setWarningMsg("Try another postcode or suburb");
    }

    const closeNearByAgree = () => {
        setNearByDialogs(false);
        getNearAgency(input, setResult, setWarningMsg, hospitalData, setScrollbarHidden, setLoading, radius, check, setSuggestDialog).then(_ => {
            // This is intentional
        })
    }
    const closeSuggestDisagree = () => {
        setSuggestDialog(false);
        setWarningMsg("Try another postcode or suburb");
    }

    const closeSuggestAgree = () => {
        setSuggestDialog(false);
        getAgencyInMelbourne(setResult, setScrollbarHidden, setLoading).then(_ =>{
            // This is intentional
        })
    }


    const closeCheckDisagree = () => {
        setCheckEligibilityDialog(false);
        setEligibleResult("You can still search for agencies in suburb using the find agency feature");
    }

    const closeCheckAgree = () => {
        setCheckEligibilityDialog(false);
        getAgencyInMelbourne(setResult, setScrollbarHidden, setLoading).then(_ => {
            // This is intentional
        });

    }

    const handleAgencySearch = () => {
        if (!checkInputValid(input)) {
            setWarningMsg("Invalid input");
        } else {
            setWarningMsg("");
            setLoading(true);
            setScrollbarHidden(true);
            agencySuburb(input, setResult, setWarningMsg, check, setScrollbarHidden, setLoading, setNearByDialogs, setHospitalData, setRadius).then(_ => {
                //Undefined
            });
        }
    }


    return (
        <div>
            {loading ? <LinearProgressStyled color="secondary"/> : null}
            <Navbar />
            <Dialog
                open={nearByDialogs}
                onClose={closeNearByDisagree}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"No Record Found"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Do you want to find agency nearby?
                        <div>Set your desired radius:</div>
                        <SliderStyled
                            defaultValue={5}
                            getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider-always"
                            step={5}
                            marks={marks}
                            min={5}
                            max={55}
                            onChange={(_, value) => {
                                setRadius(value);
                            }}
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <GreenButton onClick={closeNearByDisagree} color="primary">
                        Disagree
                    </GreenButton>
                    <GreenButton onClick={closeNearByAgree} color="primary" autoFocus>
                        Agree
                    </GreenButton>
                </DialogActions>
            </Dialog>
            <Dialog
                open={suggestDialog}
                onClose={closeSuggestDisagree}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"No nearby agency found"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Sorry, there are no nearby agencies. We can still suggest you some agencies, if you would like
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <GreenButton onClick={closeSuggestDisagree} color="primary">
                        Disagree
                    </GreenButton>
                    <GreenButton onClick={closeSuggestAgree} color="primary" autoFocus>
                        Agree
                    </GreenButton>
                </DialogActions>
            </Dialog>
            <Dialog
                open={checkEligibilityDialog}
                onClose={closeCheckDisagree}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Oops!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {eligibleInput} agency is not a government registered agency, if you would like, we may suggest you some agencies in the city
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <GreenButton onClick={closeCheckDisagree} color="primary">
                        Disagree
                    </GreenButton>
                    <GreenButton onClick={closeCheckAgree} color="primary" autoFocus>
                        Agree
                    </GreenButton>
                </DialogActions>
            </Dialog>

            <BackgroundWrapper>
                <Search.Area>
                    <Search.TextArea>Check if an agency is registered</Search.TextArea>
                    <Search.SearchArea>
                        <Search.InputArea onChange={e => setEligibleInput(e.target.value)}
                                          placeholder={"Please Enter Agency name"}/>
                        <Search.SearchButton onClick={() => {checkEligibility(eligibleInput, setEligibleResult, setResult, setScrollbarHidden, setLoading, setCheckEligibilityDialog).then(_ => {
                            // This is intentional
                        });
                            setScrollbarHidden(true);
                        }}/>
                    </Search.SearchArea>
                    <ResultArea msg={eligibleResult}>{eligibleResult}</ResultArea>
                </Search.Area>
                <Search.Area>
                    <Search.TextArea>Search agency by Postcode or Suburb name</Search.TextArea>
                    <Search.SearchArea>
                        <Search.InputArea onChange={e => setInput(e.target.value)}
                                          placeholder={"Please Enter PostCode/Suburb"}/>
                        <Search.SearchButton onClick={handleAgencySearch}/>
                    </Search.SearchArea>
                    <CheckBoxArea>
                        <CheckBox type="checkbox" checked={check} onChange={() => {
                            setCheck(!check)
                        }}/>
                        <CheckBoxLabel>Near Hospital</CheckBoxLabel>
                    </CheckBoxArea>
                    <WarningTextArea>{warningMsg}</WarningTextArea>
                </Search.Area>
            </BackgroundWrapper>

            <AgencyInfoArea>
                {!scrollbarHidden ?
                    <Scrollbars ref={scrollRef} style={{ width: "35%", height: 800, background:"#f7f7f7"}}>
                        {result.map((x, i) => {
                            return(
                                <AgencyInfo key={i} result={x} scrollbar={scrollRef} id={i} currentlyIdx={currentlyIdx} setCurrentIdx={setCurrentlyIdx} markerClicked={markerClicked} setMarkerClicked={setMarkerClicked}/>
                            );
                        })}
                    </Scrollbars> : null
                }
                <MapArea ref={mapContainer}/>
            </AgencyInfoArea>
        </div>

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
            if(props.markerClicked && !clickStatus) {
                props.scrollbar.current.scrollTop(220 * id);
            }
            setClicked(true);
        }
    }, [currentlyIdx, id, props.markerClicked, props.scrollbar, clickStatus]);
    return(
        <>
            <AgencyInfoBlock ref={scrollRef} clicked={clicked ? 1 : 0} onClick={()=>{
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
