import {Typography, withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import React from "react";
import {NavLink as Link} from "react-router-dom"
import styled from "styled-components";
import TableContainer from "@material-ui/core/TableContainer";
import Navbar from "./Navigation/NavBar";
import Button from "@material-ui/core/Button";
const LinkNoUnderline = styled(Link)`
  text-decoration: none;
  margin-left: 10%;
`

const BlankArea = styled.div`
    height: 50px;
`;

const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
`;

const TableContainerStyled = styled(TableContainer)`
  margin-bottom: 20px;
`;

const TypographStyled = styled(Typography)`
  padding-left: 10%;
  padding-right: 10%;
`;
function AdviserContactDetails(){
    const StyledTableCell = withStyles(() => ({
        head: {
            backgroundColor: "#2BA837",
        }
    }))(TableCell);
    return(
        <>
            <Navbar/>
            <BlankArea/>
            <LinkNoUnderline to={"/moreInfo"}><Button variant="contained" color="secondary">Back</Button></LinkNoUnderline>
            <br/>
            <br/>
            <TypographStyled variant={"h6"}>If you don't have anywhere to live there are organisations that can help you find accommodation. You can apply for emergency accommodation and public housing.</TypographStyled>
            <br/>
            <TypographStyled variant={"h6"}>There are other services that can help you with legal matters, financial hardship, and family violence</TypographStyled>
            <TypographStyled variant={"h4"}>Victoria Legal Aid</TypographStyled>
            <br/>
            <TypographStyled variant={"h6"}>Get help over the phone by calling Legal Help on 1300 792 387 (Monday to Friday, 8 am to 6 pm)</TypographStyled>
            <TypographStyled variant={"h6"}>The free legal services include:</TypographStyled>
            <TypographStyled variant={"h6"}>1)<a href={'https://www.legalaid.vic.gov.au/get-legal-services-and-advice/free-legal-advice/see-lawyer'}>seeing a lawyer</a> for legal advice</TypographStyled>
            <TypographStyled variant={"h6"}>2)<a href={'https://www.legalaid.vic.gov.au/get-legal-services-and-advice/free-legal-advice/get-help-court'}>help at courts</a> depending on your income, circumstances, and the nature of your charges.</TypographStyled>
            <br/>
            <TypographStyled variant={"h4"}>Justice Connect</TypographStyled>
            <br/>
            <TypographStyled variant={"h6"}><a href={'https://help.justiceconnect.org.au/homelesslaw/'}>Justice Connect's Homeless Law program</a>provides free legal advice to, and acts on behalf of, people who are homeless or at risk of homelessness. This includes people in transition, emergency or social housing.</TypographStyled>
            <br/>
            <TypographStyled variant={"h6"}>The clinic will assist with:</TypographStyled>
            <TypographStyled variant={"h6"}>1)housing and tenancy matters</TypographStyled>
            <TypographStyled variant={"h6"}>2)fines and infringement notices connected to homelessness</TypographStyled>
            <TypographStyled variant={"h6"}>3)guardianship and administration orders</TypographStyled>
            <TypographStyled variant={"h6"}>4)credit and debt problems</TypographStyled>
            <TypographStyled variant={"h6"}>5)Centrelink matters</TypographStyled>
            <TypographStyled variant={"h6"}>6)Human rights advocacy</TypographStyled>
            <br/>
            <TypographStyled variant={"h6"}>The clinic does not assist with family or criminal law matters.</TypographStyled>
            <TableWrapper>
                <Typography variant={"h4"}>Active and Healthy ageing Advisers contact details</Typography>
                <TableContainerStyled component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align={"left"}><Typography variant={"h6"}>Name</Typography></StyledTableCell>
                                <StyledTableCell align={"left"}><Typography variant={"h6"}>Division</Typography></StyledTableCell>
                                <StyledTableCell align={"left"}><Typography variant={"h6"}>Former health region</Typography></StyledTableCell>
                                <StyledTableCell align={"left"}><Typography variant={"h6"}>Location</Typography></StyledTableCell>
                                <StyledTableCell align={"left"}><Typography variant={"h6"}>Phone</Typography></StyledTableCell>
                                <StyledTableCell align={"left"}><Typography variant={"h6"}>Email</Typography></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Karen Cameron</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>West</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Barwon and South West</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Geelong</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>5226 4890</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>karen.cameron@dhhs.vic.gov.au</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Ebony Morelli</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>West</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Western Metro Melbourne and Brimbank Melton</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Footscray</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>9275 7417</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>ebony.morelli@dhhs.vic.gov.au</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Megan Clifford</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>West</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Central Highlands and Wimmera</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Ballarat</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>5333 6213</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>megan.clifford@dhhs.vic.gov.au</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Marianna Pisani</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>North</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>North Metro Melbourne</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Fitzroy</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>9412 7749</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>marianna.pisani@dhhs.vic.gov.au</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Clare Thurman</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>North</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Loddon and Mallee</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Bendigo</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>5434 5611</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>clare.thurman@dhhs.vic.gov.au</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Deb Mitchell</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>South</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Inner and Outer Gippsland</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Traralgon</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>5177 2575</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>deborah.mitchell@dhhs.vic.gov.au</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Denise Olsson</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>South</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Southern Metro Melbourne and Bayside Peninsula</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Dandenong</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>8765 7330</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>denise.olsson@dhhs.vic.gov.au</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Sarah Pain</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>East</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Murray and Goulburn</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Shepparton</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>5831 8456</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>sarah@valleysport.net.au</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Sharon Porteous</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>East</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Eastern Metro Melbourne</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Box Hill</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>8843 2254</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>sharon.porteous@iepcp.org.au</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Vacant</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>East</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Ovens-Murray</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Wangaratta</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Contact State-wide Coordinator</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>-</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>State-wide Coordinator
                                        Megan Clifford (0.4 EFT)</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Central</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>-</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Melbourne</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>9096 5866</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>megan.clifford@dhhs.vic.gov.au</Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainerStyled>
            </TableWrapper>
        </>
    );
}

export default AdviserContactDetails;