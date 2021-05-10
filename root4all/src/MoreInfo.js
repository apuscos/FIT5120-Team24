import React from 'react';
import Navbar from "./Navigation/NavBar";
import styled from "styled-components";
import FAQBackground from "./Image/faqBackground.webp"
import {Typography, withStyles} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";

const SquareBlur = styled.div`
  width: 100%;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MoreInfoTitle = styled.div`
  font-family: 'Baloo Bhai 2', cursive;
  font-weight: 700;
  font-size: 5em;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${FAQBackground});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  height: 400px;
  margin-bottom: 70px;
  background-color: #7A7DA0;
`;

const TableContainerStyled = styled(TableContainer)`
  margin-bottom: 20px;
`;

const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
`;


function MoreInfo(){
    const StyledTableCell = withStyles(() => ({
        head: {
            backgroundColor: "#2BA837",
        }
    }))(TableCell);
    return (
        <>
            <Navbar></Navbar>
            <MoreInfoTitle>
                <SquareBlur>
                    More information
                </SquareBlur>
            </MoreInfoTitle>
            <TableWrapper>
                <Typography variant={"h4"}>Community Health Services(CHSs)</Typography>
                <TableContainerStyled component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align={"left"}><Typography variant={"h6"}>Community Health Services(CHSs)</Typography></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Ballarat CHS (Participation, Access, Research and Training on Homelessness)</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Barwon Health (Jigsaw Young Person’s Health Service)</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Bentleigh Bayside Community Health</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Bendigo CHS</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Centre for Adolescent Health (Young People’s Health Service)</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Darebin Community Health Service</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Eastern Access Community Health (Homeless Youth Project)</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Eastern Centre Against Sexual Assault (ECASA)</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Frankston Community Health Service (Peninsula Innovative Health Services for Homeless Youth)</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Greater Dandenong Community Health Service (Homeless Youth LINKS Project)</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Inner South Community Health Service</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Latrobe Community Health Services</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Ngwala Willumbong Co-operative Ltd</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Mildura Aboriginal Corporation</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Portland District Health (Portland and District Homeless Youth Project)</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Royal District Nursing Homeless Persons Program</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Rumbalara Aboriginal Co-operative Ltd</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Victorian Foundation for Survivors of Torture Inc.</Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainerStyled>
            </TableWrapper>
            <TableWrapper>
                <Typography variant={"h4"}>Housing Support for the Aged Program services</Typography>
                <TableContainerStyled component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align={"left"}><Typography variant={"h6"}>DHHS Division</Typography></StyledTableCell>
                                <StyledTableCell align={"left"}><Typography variant={"h6"}>Service provider</Typography></StyledTableCell>
                                <StyledTableCell align={"left"}><Typography variant={"h6"}>Phone</Typography></StyledTableCell>
                                <StyledTableCell align={"left"}><Typography variant={"h6"}>Address</Typography></StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>South</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Star Health</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>+61 3 9525 1300</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>240 Malvern Road, Prahran VIC 3181</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>South</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>ERMHA Pathways Cluster</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>+61 3 9706 7388 </Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>45 Assembly Drive, Dandenong VIC 3175</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>South</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Quantum Support Services</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>+61 3 5120 2165</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>227 Princes Drive, Morwell VIC 3840</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>North</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Merri Outreach Support Services</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>+61 3 9380 6036</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>351 Barkly Street, Brunswick VIC 3056</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>North</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Haven; Home, Safe</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>+61 3 5444 9044 </Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>10-16 Forest Street, Bendigo VIC 3550</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>West</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Cohealth</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>+61 3 9448 5510 </Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>215 Nicholson Street, Footscray VIC 3011</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>West</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Salvation Army Adult Services</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>+61 3 9328 5631</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Mail Box 62 /159 Melrose Street, North Melbourne VIC 3051</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>West</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Centacare Ballarat</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>+61 3 5337 8999</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>4-6 Peel Street, Ballarat VIC 3350</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>West</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Wintringham</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>+61 3 9375 3774</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>136 Mt Alexander Road, Flemington VIC 3031</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>West</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Genu- Karringal St Laurence</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>+61 3 5241 0685</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>117 Pakingston Street, Geelong West VIC 3128</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>East</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>SalvoCare</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>+61 3 5820 8000</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>2-8 McLennan Street, Mooroopna VIC 3629</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>East</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Uniting </Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>1300 277 478 </Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>321 Ferntree Gully Road, Mt Waverley VIC 3149</Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainerStyled>
            </TableWrapper>
            <TableWrapper>
                <Typography variant={"h4"}>Advisers contact details</Typography>
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
    )
}

export default MoreInfo;