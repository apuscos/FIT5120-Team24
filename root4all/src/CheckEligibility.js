import React, {useState} from 'react';
import Navbar from "./Navigation/NavBar";
import styled from "styled-components";
import {useForm} from "react-hook-form";
import {API} from "aws-amplify";
import Button from '@material-ui/core/Button';
import LinearProgress from "@material-ui/core/LinearProgress";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const LinearProgressStyled = styled(LinearProgress)`
  && {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

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
  width: 465px;
  height: 40px;
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 600;
  font-size: 1.25em;
  padding-left: 30px;
  margin-bottom: 30px;
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
  height: 40px;
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 500;
  font-size: 1em;
  padding-left: 10px;
  margin-bottom: 30px;
  
`;

const SelectionOption = styled.option`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 500;
  font-size: 1em;
`;

const SubmitButton = styled(Button)`
  width: 100px;
  &&{margin-bottom: 50px;}
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

const ResultArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;
  margin-bottom: 60px;
`;

const ResultTitle = styled.div`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 500;
  font-size: 24px;
`;

const ResultContent = styled.div`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 500;
  font-size: 16px;
`;

const TableContainerStyled = styled(TableContainer)`
      &&{
        width: 1000px;
      }
`;


function CheckEligibility(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [display, setDisplay] = useState(false);
    const [dependentDisplay, setDependentDisplay] = useState(false)
    const [showError, setShowError] = useState(true);
    const [showHouseHoldError, setShowHouseHoldError] = useState(true);
    const [submitClicked, setSubmitClicked] = useState(false);
    const [result, setResult] = useState(-1);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [residentshipDisable, setResidentshipDisable] = useState(false);
    const onSubmit = async (data) => {
        if (data["citizenship"] === "Others"){
            data["residenship"] = "";
        }
        console.log(data);
        setLoading(true);
        try {
            // Get data with postcode 3000
            const response = await API.get("roof4all", '/checkEligibility', {
                "queryStringParameters": {
                    "inputParams": JSON.stringify(data)
                }
            });
            if (response["error"]){
                setResult(0)
            } else {
                setResult(response["result"])
            }
        } catch (err) {
            console.log("Error:", err)
        }
        setLoading(false);

    };

    const valid = (value) => {
        if (!display){
            return true;
        } else {
            return value !== "";
        }
    }

    const result0 = (<><ResultTitle>Input Error</ResultTitle></>)
    const result1 = (<><ResultTitle>You are not eligible</ResultTitle><ResultContent>You have to be the Australian citizen or Permanent resident</ResultContent></>)
    const result2 = (<><ResultTitle>You are not eligible</ResultTitle><ResultContent>You have to be the victorian resident</ResultContent></>)
    const result3 = (<><ResultTitle>You are not eligible</ResultTitle><ResultContent>Your weekly income has exceed the limit</ResultContent></>)
    const result4 = (<><ResultTitle>You are not eligible</ResultTitle><ResultContent>Your asset has exceed the limit</ResultContent></>)
    const result5 = (
        <>
            <ResultTitle>You are eligible for registering interest housing!</ResultTitle>
            <ResultContent>Below are some documents you need</ResultContent>
            <TableContainerStyled component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Document Name</TableCell>
                            <TableCell>Link</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={"Documents Name"}>
                            <TableCell component="th" scope="row">
                                {"Priority Access application form"}
                            </TableCell>
                            <TableCell><a target="_blank"  rel="noreferrer" href="https://www.housing.vic.gov.au/register-interest-application-pdf">https://www.housing.vic.gov.au/register-interest-application-pdf</a></TableCell>
                        </TableRow>
                        <TableRow key={"Additional adult household member form"}>
                            <TableCell component="th" scope="row">
                                {"Additional adult household member form"}
                            </TableCell>
                            <TableCell><a target="_blank"  rel="noreferrer"  href="https://www.housing.vic.gov.au/sites/default/files/documents/201808/additional-adult-household-member-form.pdf">https://www.housing.vic.gov.au/sites/default/files/documents/201808/additional-adult-household-member-form.pdf</a></TableCell>
                        </TableRow>
                        <TableRow key={"Additional dependent children form"}>
                            <TableCell component="th" scope="row">
                                {"Additional dependent children form"}
                            </TableCell>
                            <TableCell><a target="_blank"  rel="noreferrer" href="https://www.housing.vic.gov.au/sites/default/files/documents/201808/additional-dependent-children-form.pdf">https://www.housing.vic.gov.au/sites/default/files/documents/201808/additional-dependent-children-form.pdf</a></TableCell>
                        </TableRow>
                        <TableRow key={"Special accommodation requirements form"}>
                            <TableCell component="th" scope="row">
                                {"Special accommodation requirements form"}
                            </TableCell>
                            <TableCell><a target="_blank"  rel="noreferrer" href="https://www.housing.vic.gov.au/sites/default/files/documents/201907/Special%20Accommodation%20Requirements_0.pdf">https://www.housing.vic.gov.au/sites/default/files/documents/201907/Special%20Accommodation%20Requirements_0.pdf</a></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainerStyled>

        </>
    )
    const result6 = (
        <>
            <ResultTitle>You are eligible for registering priority housing!</ResultTitle>
            <ResultContent>Below are some documents you need</ResultContent>
            <TableContainerStyled component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Document Name</TableCell>
                            <TableCell>Link</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={"Priority Access application form"}>
                            <TableCell component="th" scope="row">
                                {"Priority Access application form"}
                            </TableCell>
                            <TableCell><a target="_blank"  rel="noreferrer" href="https://www.housing.vic.gov.au/priority-access-application-pdf">https://www.housing.vic.gov.au/priority-access-application-pdf</a></TableCell>
                        </TableRow>
                        <TableRow key={"Additional adult household member form"}>
                            <TableCell component="th" scope="row">
                                {"Additional adult household member form"}
                            </TableCell>
                            <TableCell><a target="_blank"  rel="noreferrer" href="https://www.housing.vic.gov.au/sites/default/files/documents/201808/additional-adult-household-member-form.pdf">https://www.housing.vic.gov.au/sites/default/files/documents/201808/additional-adult-household-member-form.pdf</a></TableCell>
                        </TableRow>
                        <TableRow key={"Additional dependent children form"}>
                            <TableCell component="th" scope="row">
                                {"Additional dependent children form"}
                            </TableCell>
                            <TableCell><a target="_blank"  rel="noreferrer" href="https://www.housing.vic.gov.au/sites/default/files/documents/201808/additional-dependent-children-form.pdf">https://www.housing.vic.gov.au/sites/default/files/documents/201808/additional-dependent-children-form.pdf</a></TableCell>
                        </TableRow>
                        <TableRow key={"Insecure housing eligibility confirmation form"}>
                            <TableCell component="th" scope="row">
                                {"Insecure housing eligibility confirmation form"}
                            </TableCell>
                            <TableCell><a target="_blank"  rel="noreferrer" href="https://www.housing.vic.gov.au/sites/default/files/documents/201809/Insecure-housing-eligibility-confirmation.pdf">https://www.housing.vic.gov.au/sites/default/files/documents/201809/Insecure-housing-eligibility-confirmation.pdf</a></TableCell>
                        </TableRow>
                        <TableRow key={"Special accommodation requirements form"}>
                            <TableCell component="th" scope="row">
                                {"Special accommodation requirements form"}
                            </TableCell>
                            <TableCell><a target="_blank"  rel="noreferrer" href="https://www.housing.vic.gov.au/sites/default/files/documents/201907/Special%20Accommodation%20Requirements_0.pdf">https://www.housing.vic.gov.au/sites/default/files/documents/201907/Special%20Accommodation%20Requirements_0.pdf</a></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainerStyled>
        </>
    )
    return(
        <>
            {loading ? <LinearProgressStyled color="secondary"/> : null}
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
                        if (e.target.value === "Others"){
                            setDisabled(true);
                        } else {
                            setDisabled(false);
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
                    {disabled && <WarningMsg>Sorry, since you are not a Australian Citizen, you are not eligible to apply for government housing</WarningMsg>}
                </Wrapper>



                <HiddenSection displayContent={display}>
                    <Label>Residenship</Label>
                    <Wrapper>
                        <SelectionBox {...register("residenship" , {validate: value => valid(value)})} onChange={e => {
                            if (e.target.value === "Others"){
                                setResidentshipDisable(true);
                            } else {
                                setResidentshipDisable(false);
                            }
                        }}>
                            <SelectionOption value="">Select...</SelectionOption>
                            <SelectionOption value="Victorian_resident">Victorian resident</SelectionOption>
                            <SelectionOption value="Others">Others</SelectionOption>
                        </SelectionBox>
                        {errors.residenship && <WarningMsg>Please select the Residenship</WarningMsg>}
                        {residentshipDisable && <WarningMsg>Sorry, since you are not a resident, you are not eligible to apply for government housing in Victoria</WarningMsg>}
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
                    {errors.asset && <WarningMsg>Please enter valid asset number</WarningMsg>}
                </Wrapper>
                <Wrapper>
                    <input {...register("check")} type={"checkbox"} />
                    <Label>Need major or full disability modifications</Label>
                </Wrapper>

                <SubmitButton disabled={disabled || residentshipDisable} variant="contained" type="submit" onClick={()=> setSubmitClicked(true)} > Check </SubmitButton>
            </FormArea>
            {result === -1 ? null :
                <ResultArea>
                    {result === 0 ? result0 : null}
                    {result === 1 ? result1 : null}
                    {result === 2 ? result2 : null}
                    {result === 3 ? result3 : null}
                    {result === 4 ? result4 : null}
                    {result === 5 ? result5 : null}
                    {result === 6 ? result6 : null}
                </ResultArea>
            }








        </>
    );
}

export default CheckEligibility;