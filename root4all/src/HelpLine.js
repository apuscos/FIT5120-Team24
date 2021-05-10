import {Typography, withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import {NavLink as Link} from "react-router-dom"
import styled from "styled-components";
import TableContainer from "@material-ui/core/TableContainer";
import Button from "@material-ui/core/Button";
import React from "react";
import NavBar from "./Navigation/NavBar";

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

function HelpLine(){
    const StyledTableCell = withStyles(() => ({
        head: {
            backgroundColor: "#2BA837",
        }
    }))(TableCell);
    return(
        <>
            <NavBar/>
            <BlankArea/>
            <LinkNoUnderline to={"/moreInfo"}><Button variant="contained" color="secondary">Back</Button></LinkNoUnderline>

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
                        </TableBody>
                    </Table>
                </TableContainerStyled>
            </TableWrapper>


        </>
    )
}



export default HelpLine;