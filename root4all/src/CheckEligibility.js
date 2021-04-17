import React, {useEffect, useRef, useState} from 'react';
import Navbar from "./Navigation/NavBar";
import styled from "styled-components";
import { useForm } from "react-hook-form";


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
    const [showError, setShowError] = useState(true);
    const [submitClicked, setSubmitClicked] = useState(false);
    const selectionBoxRef = useRef(null);
    const onSubmit = data => {
        if (data["citizenship"] === "Others"){
            data["residenship"] = "";
        }
        console.log(data)

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
                        <SelectionBox ref={selectionBoxRef} {...register("residenship" , {validate: value => valid(value)})} >
                            <SelectionOption value="">Select...</SelectionOption>
                            <SelectionOption value="Victorian_resident">Victorian resident</SelectionOption>
                            <SelectionOption value="Others">Others</SelectionOption>
                        </SelectionBox>
                        {errors.residenship && <WarningMsg>Please select the Residenship</WarningMsg>}
                    </Wrapper>
                </HiddenSection>

                <Label>Household Type</Label>
                <Wrapper>
                    <SelectionBox ref={selectionBoxRef} {...register("household" , {required: true})} >
                        <SelectionOption value="">Select...</SelectionOption>
                        <SelectionOption value="Single">Single person</SelectionOption>
                        <SelectionOption value="Couple">Couple, no dependants</SelectionOption>
                        <SelectionOption value="Family">Family (one or two parents) with up to two dependent children</SelectionOption>
                        <SelectionOption value="Additional">Each additional dependant</SelectionOption>
                    </SelectionBox>
                    {errors.household && <WarningMsg>Please select the Household type</WarningMsg>}
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
        </>
    );
}

export default CheckEligibility;