import React, {useEffect, useRef, useState} from 'react';
import Navbar from "./Navigation/NavBar";
import styled from "styled-components";
import {set, useForm} from "react-hook-form";
import {API} from "aws-amplify";


const CheckEligibilityTitle = styled.div`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 700;
  font-size: 5em;
  color: black;
  margin-left: calc(15% + 40px);
`;

const FormArea = styled.form`
  margin-left: calc(15% + 40px);
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.input`
  line-height: 1;
  width: 500px;
  height: 50px;
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 600;
  font-size: 1.25em;
  padding-left: 30px;
  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 600;
  font-size: 1.25em;
`;

const SelectionBox = styled.select`
  width: 500px;
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 500;
  font-size: 1em;
  border: 2px solid black;
  padding-left: 10px;
  margin-bottom: 5px;
  
`;

const SelectionOption = styled.option`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 500;
  font-size: 1em;
`;

const SubmitButton = styled.input`
  width: 100px;
`;

const Wrapper = styled.div`
  display: flex;
`;
const WarningMsg = styled.div`
  color: red;
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 500;
  font-size: 1em;
  margin-left: 20px;
`;

const HiddenSection = styled.div`
  visibility: ${props => props.displayContent === true ? "visible" : "hidden"};
  position: ${props => props.displayContent === true ? "static" : "absolute"};
`;



function CheckEligibility(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [display, setDisplay] = useState(false);
    const [dependentDisplay, setDependentDisplay] = useState(false)
    const [showError, setShowError] = useState(true);
    const [showHouseHoldError, setShowHouseHoldError] = useState(true);
    const [submitClicked, setSubmitClicked] = useState(false);
    const [result, setResult] = useState("");
    const onSubmit = async (data) => {
        if (data["citizenship"] === "Others"){
            data["residenship"] = "";
        }
        console.log(data);
        try {
            // Get data with postcode 3000
            const response = await API.get("roof4all", '/checkEligibility', {
                "queryStringParameters": {
                    "inputParams": JSON.stringify(data)
                }
            });
            let content = "";
            if (response["error"]){
                content = <div>Input Error</div>;
            } else if (response["result"] === 1){
                content = <div>You are not eligible, you have to be the Australian citizen or Permanent resident</div>;
            } else if (response["result"] === 2){
                content = <div>You are not eligible, you have to be the victorian resident</div>;
            } else if (response["result"] === 3){
                content = <div>You are not eligible, your weekly income has exceed the limit</div>;
            } else if (response["result"] === 4){
                content = <div>You are not eligible, your asset has exceed the limit</div>;
            } else if (response["result"] === 5){
                content = (<><div>You are eligible!</div><div>You are eligible, you can register for interest housing</div><a target="_blank" href="https://www.housing.vic.gov.au/register-interest-application-pdf">You can find the application form here</a></>);
            } else if (response["result"] === 6){
                content = (<><div>You are eligible!</div><div>You are eligible, you can register for priority housing</div><a target="_blank" href="https://www.housing.vic.gov.au/priority-access-application-pdf">You can find the application form here</a></>);
            }
            setResult(content)
        } catch (err) {
            console.log("Error:", err)
        }

    };

    const valid = (value) => {
        if (!display){
            return true;
        } else {
            return value !== "";
        }
    }


    return(
        <>
            <Navbar/>
            <CheckEligibilityTitle>Check Eligibility</CheckEligibilityTitle>
            <FormArea onSubmit={handleSubmit(onSubmit)}>
                <Label>Citizenship</Label>
                <Wrapper>
                    <SelectionBox {...register("citizenship", {required: true })} onChange={(e) => {
                        if (e.target.value === ""){
                            setShowError(true);
                        } else {
                            setShowError(false);
                        }
                        if (e.target.value === "Others" || e.target.value === ""){
                            setDisplay(false);
                        } else {
                            setDisplay(true);
                        }
                    }}>
                        <SelectionOption value="">Select...</SelectionOption>
                        <SelectionOption value="Australian_citizen">Australian citizen</SelectionOption>
                        <SelectionOption value="Permanent_resident">Permanent resident</SelectionOption>
                        <SelectionOption value="Others">Others</SelectionOption>
                    </SelectionBox>
                    {(showError && submitClicked) && <WarningMsg>This field is required</WarningMsg>}
                </Wrapper>



                <HiddenSection displayContent={display}>
                    <Label>Residenship</Label>
                    <Wrapper>
                        <SelectionBox {...register("residenship" , {validate: value => valid(value)})} >
                            <SelectionOption value="">Select...</SelectionOption>
                            <SelectionOption value="Victorian_resident">Victorian resident</SelectionOption>
                            <SelectionOption value="Others">Others</SelectionOption>
                        </SelectionBox>
                        {errors.residenship && <WarningMsg>Please select the Residenship</WarningMsg>}
                    </Wrapper>
                </HiddenSection>

                <Label>Household Type</Label>
                <Wrapper>
                    <SelectionBox {...register("household" , {required: true})} onChange={(e) => {
                        if (e.target.value === ""){
                            setShowHouseHoldError(true);
                        } else {
                            setShowHouseHoldError(false);
                        }

                        if (e.target.value === "Family"){
                            setDependentDisplay(true);
                        } else {
                            setDependentDisplay(false);
                        }
                    }}>
                        <SelectionOption value="">Select...</SelectionOption>
                        <SelectionOption value="Single">Single person</SelectionOption>
                        <SelectionOption value="Couple">Couple, no dependants</SelectionOption>
                        <SelectionOption value="Family">Family (one or two parents) with up to two dependent children</SelectionOption>
                    </SelectionBox>
                    {(showHouseHoldError && submitClicked) && <WarningMsg>Please select the Household type</WarningMsg>}
                </Wrapper>

                <HiddenSection displayContent={dependentDisplay}>
                    <Label>Number of Dependent Children</Label>
                    <Wrapper>
                        <SelectionBox {...register("numChildren" , {required: true, valueAsNumber: true})} >
                            <SelectionOption value="0">0</SelectionOption>
                            <SelectionOption value="1">1</SelectionOption>
                            <SelectionOption value="2">2</SelectionOption>
                        </SelectionBox>
                        {errors.numChildren && <WarningMsg>Please select the Number of Children</WarningMsg>}
                    </Wrapper>
                </HiddenSection>


                <Label>Number of Additional Dependent</Label>
                <Wrapper>
                    <SelectionBox {...register("numDependent" , {required: true, valueAsNumber: true})} >
                        <SelectionOption value="0">0</SelectionOption>
                        <SelectionOption value="1">1</SelectionOption>
                        <SelectionOption value="2">2</SelectionOption>
                        <SelectionOption value="3">3</SelectionOption>
                        <SelectionOption value="4">4</SelectionOption>
                    </SelectionBox>
                    {errors.numDependent && <WarningMsg>Please select the Number of dependent</WarningMsg>}
                </Wrapper>





                <Label>Weekly Income</Label>
                <Wrapper>
                    <InputBox {...register("weeklyIncome", {required: true, min: 0, valueAsNumber: true, validate: value => !isNaN(value)})} />
                    {errors.weeklyIncome && <WarningMsg>Please enter valid weekly income</WarningMsg>}
                </Wrapper>

                <Label>Asset</Label>
                <Wrapper>
                    <InputBox {...register("asset", {required: true, min: 0, valueAsNumber: true, validate: value => !isNaN(value)})} />
                    <input {...register("check")} type={"checkbox"} />
                    <Label>Need major or full disability modifications</Label>
                    {errors.asset && <WarningMsg>Please enter valid asset number</WarningMsg>}
                </Wrapper>

                <SubmitButton type="submit" onClick={()=> setSubmitClicked(true)} />
            </FormArea>
            <>
                {result}
            </>



        </>
    );
}

export default CheckEligibility;