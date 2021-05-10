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
                                <StyledTableCell align={"left"}><Typography variant={"h6"}>Address</Typography></StyledTableCell>
                                <StyledTableCell align={"left"}><Typography variant={"h6"}>Phone</Typography></StyledTableCell>
                                <StyledTableCell align={"left"}><Typography variant={"h6"}>Operating Hours</Typography></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>safe steps Family Violence Response Centre - women and children experiencing family violence only</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Available only on phone</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>(03) 9322 3555 or toll free 1800 015 188 (not free from mobile)</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>24 hours</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Women's Housing Ltd - women and children</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Suite 1, Level 1, 21 Cremorne Street, Cremorne</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>(03) 9412 6868</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Monday - Friday 9am to 5pm</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Melbourne Youth Support Services - Frontyard Youth Services</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>19 King Street, Melbourne</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>(03) 9614 3688</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>Monday - Friday 8am to 5pm, Weekends and Public Holidays 10am to 6pm</Typography>
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