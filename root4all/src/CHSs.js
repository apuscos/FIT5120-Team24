import {Typography, withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import React from "react";
import styled from "styled-components";
import TableContainer from "@material-ui/core/TableContainer";
import Navbar from "./Navigation/NavBar";
import Button from "@material-ui/core/Button";
import {NavLink as Link} from "react-router-dom"
const LinkNoUnderline = styled(Link)`
  text-decoration: none;
  margin-left: 20%;
`

const BlankArea = styled.div`
    height: 50px;
`;
const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
`;

const TableContainerStyled = styled(TableContainer)`
  margin-bottom: 20px;
  
`;

function CHSs(){
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
        </>
    );
}

export default CHSs;