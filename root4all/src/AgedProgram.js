import {Typography, withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import React, {useState} from "react";
import styled from "styled-components";
import TableContainer from "@material-ui/core/TableContainer";
import Navbar from "./Navigation/NavBar";
import Button from "@material-ui/core/Button";
import {NavLink as Link} from "react-router-dom"
import Highlighter from "react-highlight-words";
import {makeStyles} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import * as Search from "./SearchBar/searchBarComponents";
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

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        width: 800,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: "auto",
        marginBottom: 50,
        marginTop: 50,
    },
    input: {
        flex: 1,
        marginLeft: 20,
        fontFamily: theme.typography.fontFamily,
    },
}));

function AgedProgram(){
    const StyledTableCell = withStyles(() => ({
        head: {
            backgroundColor: "#2BA837",
        }
    }))(TableCell);
    const classes = useStyles();
    const [input, setInput] = useState("");
    const [highlightText, setHighlightText] = useState("");
    const searchContent = () => {
        setHighlightText(input);
    }
    return (
        <>
            <Navbar/>
            <BlankArea/>
            <LinkNoUnderline to={"/moreInfo"}><Button variant="contained" color="secondary">Back</Button></LinkNoUnderline>
            <TableWrapper>
                <Typography variant={"h4"}>Housing Support for the Aged Program services</Typography>
                <Paper className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search for address"
                        inputProps={{ 'aria-label': 'Search for address' }}
                        onChange={
                            (e) => {
                                setInput(e.target.value);
                            }
                        }
                    />
                    <Search.SearchButton onClick={searchContent}/>
                </Paper>
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
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"240 Malvern Road, Prahran VIC 3181"}
                                        />
                                    </Typography>
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
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"45 Assembly Drive, Dandenong VIC 3175"}
                                        />
                                    </Typography>
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
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"227 Princes Drive, Morwell VIC 3840"}
                                        />
                                    </Typography>
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
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"351 Barkly Street, Brunswick VIC 3056"}
                                        />
                                    </Typography>
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
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"10-16 Forest Street, Bendigo VIC 3550"}
                                        />
                                    </Typography>
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
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"215 Nicholson Street, Footscray VIC 3011"}
                                        />
                                    </Typography>
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
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"Mail Box 62 /159 Melrose Street, North Melbourne VIC 3051"}
                                        />
                                    </Typography>
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
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"4-6 Peel Street, Ballarat VIC 3350"}
                                        />
                                    </Typography>
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
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"136 Mt Alexander Road, Flemington VIC 3031"}
                                        />
                                    </Typography>
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
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"117 Pakingston Street, Geelong West VIC 3128"}
                                        />
                                    </Typography>
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
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"2-8 McLennan Street, Mooroopna VIC 3629"}
                                        />
                                    </Typography>
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
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"321 Ferntree Gully Road, Mt Waverley VIC 3149"}
                                        />
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainerStyled>
            </TableWrapper>
        </>
    );
}

export default AgedProgram;