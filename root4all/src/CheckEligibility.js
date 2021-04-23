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
import {Typography, withStyles} from "@material-ui/core";
import BackgroudImage from "./Image/checkEligibilityBackground.png"


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
  height: 400px;
  font-size: 5em;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${BackgroudImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #7A7DA0;
`;

const FormArea = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.input`
  line-height: 1;
  width: 365px;
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

const CheckBoxInput =styled.input`
  margin-top: -21px;
`;

const CheckBoxLabel = styled(Label)`
  margin-top: -30px;
`;

const SelectionBox = styled.select`
  width: 400px;
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
  &&{
    margin-bottom: 40px;
    margin-top: 10px;
    font-family: 'Baloo Bhai 2', cursive;
    font-weight: 700;
    background-color:#2BA837;
  }
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
  
  display: flex;
  align-items: center;
  padding-left: 100px;
  flex-direction: column;
  
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
  margin-bottom: 20px;
`;

const WrapperPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 100px;
  padding-right: 100px;
`;


function CheckEligibility(){
    const { register, handleSubmit, formState: { errors } } = useForm({});
    const [display, setDisplay] = useState(false);
    const [dependentDisplay, setDependentDisplay] = useState(false)
    const [showError, setShowError] = useState(true);
    const [showHouseHoldError, setShowHouseHoldError] = useState(true);
    const [showResidentError, setShowResidentError] = useState(true);
    const [showWeeklyIncomeError, setShowWeeklyIncomeError] = useState(true);
    const [showAssetError, setShowAssetError] = useState(true);
    const [submitClicked, setSubmitClicked] = useState(false);
    const [result, setResult] = useState(-1);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [residentshipDisable, setResidentshipDisable] = useState(false);
    const [limit1, setLimit1] = useState(0);
    const [limit2, setLimit2] = useState(0);
    const [userInputData, setUserInputData] =useState({});
    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: "#2BA837",

        }
    }))(TableCell);
    const onSubmit = async (data) => {
        if (data["citizenship"] === "Others"){
            data["residenship"] = "";
        }
        console.log(data);
        setUserInputData(data);
        setLoading(true);
        try {
            // Get data with postcode 3000
            const response = await API.get("roof4all", '/checkEligibility', {
                "queryStringParameters": {
                    "inputParams": JSON.stringify(data)
                }
            });
            if (response["limit"]){
                setLimit1(response["limit"]);
            }

            if (response["limit1"]){
                setLimit1(response["limit1"]);
            }
            if (response["limit2"]){
                setLimit2(response["limit2"]);
            }

            if (response["error"]){
                setResult(0);
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
    const result3 = (<><ResultTitle>You are not eligible</ResultTitle><ResultContent>Your weekly income has exceed the limit {limit1} AUD </ResultContent></>)
    const result4 = (<><ResultTitle>You are not eligible</ResultTitle><ResultContent>Your asset has exceed the limit {limit1} AUD </ResultContent></>)
    const result7 = (<><ResultTitle>You are not eligible</ResultTitle><ResultContent>Your weekly income has exceed the limit {limit1} AUD and your asset has exceed the limit {limit2} AUD</ResultContent></>)
    let result5 = (
        <>
            <Typography variant={"h5"}>You are eligible for registering for interest housing!</Typography>
            <ResultContent>Registered of interest application form: <a target="_blank"  rel="noreferrer" href="https://www.housing.vic.gov.au/register-interest-application-pdf">https://www.housing.vic.gov.au/register-interest-application-pdf</a></ResultContent>
            <TableContainerStyled component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align={"left"}><Typography variant={"h5"}>Document checklist</Typography></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={"Documents Name"}>
                            <TableCell component="th" scope="row" >
                                {"Proof of identity – Passport, driving licence or any government issued proof of identity."}
                            </TableCell>
                        </TableRow>
                        <TableRow key={"Additional adult household member form"}>
                            <TableCell component="th" scope="row">
                                {"Bank statement of past four weeks if not receiving payments from Centerlink"}
                            </TableCell>
                        </TableRow>
                        <TableRow key={"Additional dependent children form"}>
                            <TableCell component="th" scope="row">
                                {"Letter from a solicitor stating your property’s market value(if applicable)."}
                            </TableCell>
                        </TableRow>
                        <TableRow key={"Special accommodation requirements form"}>
                            <TableCell component="th" scope="row">
                                {"If the property stated above is on sale or under dispute, show the documents stating your ownership of the property."}
                            </TableCell>
                        </TableRow>
                        <TableRow key={"Proof of assets owned – like shares, businesses."}>
                            <TableCell component="th" scope="row">
                                {"Proof of assets owned – like shares, businesses."}
                            </TableCell>
                        </TableRow>
                        <TableRow key={"If expecting a child or adopting a child, provide proof of the same."}>
                            <TableCell component="th" scope="row">
                                {"If expecting a child or adopting a child, provide proof of the same."}
                            </TableCell>
                        </TableRow>
                        <TableRow key={"Australian Citizenship Certificate"}>
                            <TableCell component="th" scope="row">
                                {"Australian Citizenship Certificate, immigration visa, passport or a letter from the Department of Immigration and Border Protection for each resident of household not born in India."}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainerStyled>

            {userInputData["household"] === "Family" || userInputData["household"] === "Couple" ?
                <>
                    <TableContainerStyled component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align={"left"}><Typography variant={"h5"}>Document checklist for additional dependents</Typography></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow key={"Documents Name"}>
                                    <TableCell component="th" scope="row" >
                                        {"Proof of identity – Passport, driving licence or any government issued proof of identity."}
                                    </TableCell>
                                </TableRow>
                                <TableRow key={"Additional adult household member form"}>
                                    <TableCell component="th" scope="row">
                                        {"Bank statement of past four weeks if not receiving payments from Centerlink"}
                                    </TableCell>
                                </TableRow>
                                <TableRow key={"Additional dependent children form"}>
                                    <TableCell component="th" scope="row">
                                        {"Letter from a solicitor stating your property’s market value(if applicable)."}
                                    </TableCell>
                                </TableRow>
                                <TableRow key={"Special accommodation requirements form"}>
                                    <TableCell component="th" scope="row">
                                        {"If the property stated above is on sale or under dispute, show the documents stating your ownership of the property."}
                                    </TableCell>
                                </TableRow>
                                <TableRow key={"Proof of assets owned – like shares, businesses."}>
                                    <TableCell component="th" scope="row">
                                        {"Proof of assets owned – like shares, businesses."}
                                    </TableCell>
                                </TableRow>
                                <TableRow key={"If expecting a child or adopting a child, provide proof of the same."}>
                                    <TableCell component="th" scope="row">
                                        {"If expecting a child or adopting a child, provide proof of the same."}
                                    </TableCell>
                                </TableRow>
                                <TableRow key={"Australian Citizenship Certificate"}>
                                    <TableCell component="th" scope="row">
                                        {"Medicare card/ birth certificate of each dependent child."}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainerStyled>
                </>
                : null}

            {userInputData["numDependent"] > 0 ?
                <>
                    <Typography>If there are more than four dependent children, fill this form: <a target="_blank"  rel="noreferrer" href="https://www.housing.vic.gov.au/sites/default/files/documents/201808/additional-dependent-children-form.pdf">https://www.housing.vic.gov.au/sites/default/files/documents/201808/additional-dependent-children-form.pdf</a></Typography>
                    <Typography>If there are more than one dependent adult, fill this form: <a target="_blank"  rel="noreferrer" href="https://www.housing.vic.gov.au/sites/default/files/documents/201808/additional-adult-household-member-form.pdf">https://www.housing.vic.gov.au/sites/default/files/documents/201808/additional-adult-household-member-form.pdf</a></Typography>
                </>
                :null }

        </>
    )
    let result6 = (
        <>
            <ResultTitle>You are eligible for registering for priority housing!</ResultTitle>
            <ResultContent>Registered of priority access application form: <a target="_blank"  rel="noreferrer" href="https://www.housing.vic.gov.au/sites/default/files/documents/201808/Priority-access-application.pdf">https://www.housing.vic.gov.au/sites/default/files/documents/201808/Priority-access-application.pdf</a></ResultContent>
            <ResultContent>If not registed already with Victorian housing, needs to be filled along with Register of Interest form: <a target="_blank"  rel="noreferrer" href="https://www.housing.vic.gov.au/register-interest-application-pdf">https://www.housing.vic.gov.au/register-interest-application-pdf</a></ResultContent>
            <TableContainerStyled component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align={"left"}><Typography variant={"h5"}>Document checklist</Typography></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={"Documents Name"}>
                            <TableCell component="th" scope="row" >
                                {"Support letter from your tenancy worker or community support agency, if staying in a community housing"}
                            </TableCell>
                        </TableRow>
                        <TableRow key={"Additional adult household member form"}>
                            <TableCell component="th" scope="row">
                                {"If at risk if family violence, you need to provide an intervention order or an interim intervention order, or an application for one of these – a Family Court restraining order – a letter from a solicitor confirming that criminal proceedings have commenced against the alleged perpetrator of the violence."}
                            </TableCell>
                        </TableRow>
                        <TableRow key={"Additional dependent children form"}>
                            <TableCell component="th" scope="row">
                                {"An intervention order or an interim intervention order, or an application for one of these or a verbal or written report from a member of a federal, state or territory police service or a report from a community support worker(if subjected to physical violence by person not living with you)"}
                            </TableCell>
                        </TableRow>
                        <TableRow key={"Special accommodation requirements form"}>
                            <TableCell component="th" scope="row">
                                {"If you require major or full modifications, a detailed report about the modifications required by the occupational therapist."}
                            </TableCell>
                        </TableRow>
                        <TableRow key={"Proof of assets owned – like shares, businesses."}>
                            <TableCell component="th" scope="row">
                                {"Complete an Application for Special Accommodation Requirements, if you need major/minor modifications due to medical reasons."}
                            </TableCell>
                        </TableRow>
                        <TableRow key={"If expecting a child or adopting a child, provide proof of the same."}>
                            <TableCell component="th" scope="row">
                                {"Letter from a community support worker or statutory declarations from you and the person with whom the children are residing will be required for family reunification situation or inappropriate condition of the current house where the children cannot reside."}
                            </TableCell>
                        </TableRow>
                        <TableRow key={"Australian Citizenship Certificate"}>
                            <TableCell component="th" scope="row">
                                {"Written confirmation from the housing worker or the person you are staying with currently and would not be able to continue with them."}
                            </TableCell>
                        </TableRow>
                        <TableRow key={"Australian Citizenship Certificate"}>
                            <TableCell component="th" scope="row">
                                {"A letter from the service that helped you to get alternative housing options(if applicable)"}
                            </TableCell>
                        </TableRow>
                        <TableRow key={"Australian Citizenship Certificate"}>
                            <TableCell component="th" scope="row">
                                {"If not been helped with alternative housing then a written history of accommodation and attempts to get alternative housing options."}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainerStyled>

            {userInputData["check"] ?
                    <>
                        <ResultContent>Special accommodation for modification, fill this form : <a target="_blank"  rel="noreferrer" href="https://www.housing.vic.gov.au/sites/default/files/documents/201907/Special%20Accommodation%20Requirements_0.pdf">https://www.housing.vic.gov.au/sites/default/files/documents/201907/Special%20Accommodation%20Requirements_0.pdf</a></ResultContent>
                    </>
                : null}
        </>
    )


    return(
        <>
            {loading ? <LinearProgressStyled color="secondary"/> : null}
            <Navbar/>
            <CheckEligibilityTitle>Check Eligibility</CheckEligibilityTitle>
            <WrapperPage>
                <FormArea onSubmit={handleSubmit(onSubmit)}>
                    <Label>Citizenship</Label>
                    <Wrapper>
                        <SelectionBox {...register("citizenship", {required: true })} onChange={(e) => {
                            setResult(-1);
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
                        {disabled && <WarningMsg>Only Australian Citizen can apply for government housing</WarningMsg>}
                    </Wrapper>



                    <HiddenSection displayContent={display}>
                        <Label>Residentship</Label>
                        <Wrapper>
                            <SelectionBox {...register("residenship" , {require: true})} onChange={e => {
                                setResult(-1);
                                if (e.target.value === "Others"){
                                    setResidentshipDisable(true);
                                } else {
                                    setResidentshipDisable(false);
                                }
                                if (!valid(e.target.value)){
                                    setShowResidentError(true);
                                } else {
                                    setShowResidentError(false);
                                }
                            }}>
                                <SelectionOption value="">Select...</SelectionOption>
                                <SelectionOption value="Victorian_resident">Victorian resident</SelectionOption>
                                <SelectionOption value="Others">Others</SelectionOption>
                            </SelectionBox>
                            {(showResidentError && submitClicked) && <WarningMsg>Please select the Residenship</WarningMsg>}
                            {residentshipDisable && <WarningMsg>Only Victoria resident can apply for government housing</WarningMsg>}
                        </Wrapper>
                    </HiddenSection>

                    <Label>Household Type</Label>
                    <Wrapper>
                        <SelectionBox {...register("household" , {required: true})} onChange={(e) => {
                            setResult(-1);
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
                            <SelectionOption value="Couple">Couple</SelectionOption>
                            <SelectionOption value="Family">Family with up to two dependent children</SelectionOption>
                        </SelectionBox>
                        {(showHouseHoldError && submitClicked) && <WarningMsg>Please select the Household type</WarningMsg>}
                    </Wrapper>

                    <HiddenSection displayContent={dependentDisplay}>
                        <Label>Number of Dependent Children</Label>
                        <Wrapper>
                            <SelectionBox {...register("numChildren" , {required: true, valueAsNumber: true})} onChange={(e) => {setResult(-1);}} >
                                <SelectionOption value="0">0</SelectionOption>
                                <SelectionOption value="1">1</SelectionOption>
                                <SelectionOption value="2">2</SelectionOption>
                            </SelectionBox>
                            {errors.numChildren && <WarningMsg>Please select the Number of Children</WarningMsg>}
                        </Wrapper>
                    </HiddenSection>


                    <Label>Number of Additional Dependent</Label>
                    <Wrapper>
                        <SelectionBox {...register("numDependent" , {required: true, valueAsNumber: true})} onChange={(e) => {setResult(-1);}}>
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
                        <InputBox {...register("weeklyIncome", {required: true, min: 0, valueAsNumber: true, validate: value => !isNaN(value)})} onChange={(e) => {
                            setResult(-1);
                            if (isNaN(e.target.value)){
                                setShowWeeklyIncomeError(true);
                            } else {
                                setShowWeeklyIncomeError(false);
                            }
                        }} />
                        {(showWeeklyIncomeError && submitClicked) && <WarningMsg>Please enter valid weekly income</WarningMsg>}
                    </Wrapper>

                    <Label>Asset</Label>
                    <Wrapper>
                        <InputBox {...register("asset", {required: true, min: 0, valueAsNumber: true, validate: value => !isNaN(value)})} onChange={(e) => {
                            setResult(-1);
                            if (isNaN(e.target.value)){
                                setShowAssetError(true);
                            } else {
                                setShowAssetError(false);
                            }
                        }} />
                        {(showAssetError && submitClicked) && <WarningMsg>Please enter valid asset number</WarningMsg>}
                    </Wrapper>
                    <Wrapper>
                        <CheckBoxInput {...register("check")} type={"checkbox"} onChange={(e) => {
                            setResult(-1);
                        }} />
                        <CheckBoxLabel>Need major or full disability modifications</CheckBoxLabel>
                    </Wrapper>

                    <SubmitButton disabled={disabled || residentshipDisable} variant="contained" type="submit" onClick={()=> {setSubmitClicked(true); setResult(-1);}} > Check </SubmitButton>
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
                        {result === 7 ? result7 : null}
                    </ResultArea>
                }
            </WrapperPage>








        </>
    );
}

export default CheckEligibility;