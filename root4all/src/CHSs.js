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
import InputBase from "@material-ui/core/InputBase";
import * as Search from "./SearchBar/searchBarComponents";
import {makeStyles} from "@material-ui/core/styles";
import Highlighter from "react-highlight-words";
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

const AStyled = styled.a`
  color: black;
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

function CHSs(){
    const classes = useStyles();
    const [input, setInput] = useState("");
    const [highlightText, setHighlightText] = useState("");
    const StyledTableCell = withStyles(() => ({
        head: {
            backgroundColor: "#2BA837",
        }
    }))(TableCell);

    const searchContent = () => {
        setHighlightText(input);
    }
    return(
        <>
            <Navbar/>
            <BlankArea/>
            <LinkNoUnderline to={"/moreInfo"}><Button variant="contained" color="secondary">Back</Button></LinkNoUnderline>
            <TableWrapper>
                <Typography variant={"h4"}>Community Health Services(CHSs)</Typography>

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
                                <StyledTableCell align={"left"}><Typography variant={"h6"}>Agency</Typography></StyledTableCell>
                                <StyledTableCell align={"left"}><Typography variant={"h6"}>Address</Typography></StyledTableCell>
                                <StyledTableCell align={"left"}><Typography variant={"h6"}>Phone</Typography></StyledTableCell>
                                <StyledTableCell align={"left"}><Typography variant={"h6"}>Website</Typography></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Ballarat CHS (Participation, Access, Research and Training on Homelessness)</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"3 Cargo Way, Mitchell Park VIC 3355"}
                                        />
                                    </Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>(03) 4313 6770</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography><AStyled target="_blank" rel="noreferrer" href={"https://www.chsbroadbent.com/"}>https://www.chsbroadbent.com/</AStyled></Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Barwon Health (Jigsaw Young Person’s Health Service)</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"Level 1/126 Little Malop St, Geelong VIC 3220"}
                                        />
                                    </Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>(03) 4215 8300</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography><AStyled target="_blank" rel="noreferrer" href={"http://www.barwonhealth.org.au/"}>http://www.barwonhealth.org.au/</AStyled></Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Bentleigh Bayside Community Health</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"2a Gardeners Rd, Bentleigh East VIC 3165"}
                                        />
                                    </Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>(03) 9575 5333</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography><AStyled target="_blank" rel="noreferrer" href={"http://www.connecthealth.org.au/"}>http://www.connecthealth.org.au/</AStyled></Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Bendigo CHS</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"165-171 Hargreaves St, Bendigo VIC 3550"}
                                        />
                                    </Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>(03) 5406 1200</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography><AStyled target="_blank" rel="noreferrer" href={"http://www.bchs.com.au/"}>http://www.bchs.com.au/</AStyled></Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Centre for Adolescent Health (Young People’s Health Service)</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"Level 1/126 Little Malop St, Geelong VIC 3220"}
                                        />
                                    </Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>(03) 4215 8300</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography><AStyled target="_blank" rel="noreferrer" href={"https://www.rch.org.au/cah/"}>https://www.rch.org.au/cah/</AStyled></Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Your Community Health (East Reservoir)</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"125 Blake StreetEast Reservoir VIC 3073"}
                                        />
                                    </Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>(03) 8470 1111</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography><AStyled target="_blank" rel="noreferrer" href={"http://www.yourcommunityhealth.org.au/"}>http://www.yourcommunityhealth.org.au/</AStyled></Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Eastern Access Community Health (Homeless Youth Project)</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography><AStyled target="_blank" rel="noreferrer" href={"https://www.each.com.au/our-locations/"}>https://www.each.com.au/our-locations/</AStyled></Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>1300 003 224</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography><AStyled target="_blank" rel="noreferrer" href={"https://www.each.com.au/"}>https://www.each.com.au/</AStyled></Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Eastern Centre Against Sexual Assault (ECASA)</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"17 Ware Cres, Ringwood East VIC 3135"}
                                        />
                                    </Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>1300 342 255</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography><AStyled target="_blank" rel="noreferrer" href={"https://www.easternhealth.org.au/"}>https://www.easternhealth.org.au/</AStyled></Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Frankston Community Health Service (Peninsula Innovative Health Services for Homeless Youth)</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"2 Hastings Rd, Frankston VIC 3199"}
                                        />
                                    </Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>1300 665 781</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography><AStyled target="_blank" rel="noreferrer" href={"https://www.peninsulahealth.org.au/services/peninsula-health-community-health/frankston/"}>https://www.peninsulahealth.org.au/services/peninsula-health-community-health/frankston/</AStyled></Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Greater Dandenong Community Health Service (Homeless Youth LINKS Project)</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"122 Thomas St, Dandenong VIC 3175"}
                                        />
                                    </Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>(03) 9792 8100</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography><AStyled target="_blank" rel="noreferrer" href={"https://www.facebook.com/pages/Greater-Dandenong-Community-Health-Services"}>https://www.facebook.com/pages/Greater-Dandenong-Community-Health-Services</AStyled></Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Inner South Community Health Service</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"18 Mitford Street St Kilda VIC 3182"}
                                        />
                                    </Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>03 9525 3180</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography><AStyled target="_blank" rel="noreferrer" href={"www.ischs.org.au"}>www.ischs.org.au</AStyled></Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Latrobe Community Health Services</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"81-87 Buckley St. Morwell, VIC 3840"}
                                        />
                                    </Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>+61 351365400</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography><AStyled target="_blank" rel="noreferrer" href={"https://www.lchs.com.au/"}>https://www.lchs.com.au/</AStyled></Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Ngwala Willumbong Co-operative Ltd</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"93 Wellington St, St Kilda VIC 3182"}
                                        />
                                    </Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>(03) 9510 3233</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography><AStyled target="_blank" rel="noreferrer" href={"https://www.ngwala.org.au/"}>https://www.ngwala.org.au/</AStyled></Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Mildura Aboriginal Corporation</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"120 Madden Ave, Mildura VIC 3500"}
                                        />
                                    </Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>(03) 5018 4100</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography><AStyled target="_blank" rel="noreferrer" href={"http://www.mdas.org.au/"}>http://www.mdas.org.au/</AStyled></Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Portland District Health (Portland and District Homeless Youth Project)</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"141-151 Bentinck St, Portland VIC 3305"}
                                        />
                                    </Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>(03) 5521 0333</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography><AStyled target="_blank" rel="noreferrer" href={"https://pdh.net.au/"}>https://pdh.net.au/</AStyled></Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Royal District Nursing Homeless Persons Program</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"973 Nepean Hwy, Bentleigh VIC 3204"}
                                        />
                                    </Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>1300 334 455</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography><AStyled target="_blank" rel="noreferrer" href={"https://www.alfredhealth.org.au"}>https://www.alfredhealth.org.au/</AStyled></Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Rumbalara Aboriginal Co-operative Ltd</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"31 Wyndham St, Shepparton VIC 3630"}
                                        />
                                    </Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>(03) 5820 0000</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography><AStyled target="_blank" rel="noreferrer" href={"https://www.rumbalara.org.au/"}>https://www.rumbalara.org.au/</AStyled></Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow key={"single"}>
                                <TableCell component="th" scope="row" >
                                    <Typography>Victorian Foundation for Survivors of Torture Inc.</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>
                                        <Highlighter
                                            highlightClassName="YourHighlightClass"
                                            searchWords={[highlightText]}
                                            autoEscape={true}
                                            textToHighlight={"4 Gardiner St, Brunswick VIC 3056"}
                                        />
                                    </Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography>(03) 9388 0022</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <Typography><AStyled target="_blank" rel="noreferrer" href={"http://www.foundationhouse.org.au/"}>http://www.foundationhouse.org.au/</AStyled></Typography>
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