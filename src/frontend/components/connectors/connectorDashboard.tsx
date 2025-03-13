
import { Box, Checkbox, FormControlLabel, List, ListItem, ListItemText, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import * as React from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import "../../../assets/css/style4.scss";
import s3Logo from '../../../assets/images/connector-img/s3-logo.svg';
import googleCloud from '../../../assets/images/connector-img/google-cloud-logo.svg';
import azureLogo from '../../../assets/images/connector-img/azure-devops-logo.svg';
import mySQl from '../../../assets/images/connector-img/my-sql-logo.svg';
import r2Logo from '../../../assets/images/connector-img/r2-logo.svg';
import googleStorage from '../../../assets/images/connector-img/google-storage.svg'; 
import gitHub from '../../../assets/images/connector-img/git-hub.svg';
import gitLab from '../../../assets/images/connector-img/git-lab-logo.svg';
import svnLogo from '../../../assets/images/connector-img/svn-logo.svg';
import bitbuketLogo from '../../../assets/images/connector-img/bitbucket-logo.svg';
import noConnector from '../../../assets/images/connector-img/no-connect-img.svg';
import filterIcon from '../../../assets/images/connector-img/filter-icon.svg';
import searchIcon from '../../../assets/images/connector-img/search-icon.svg';
import { Label } from '@mui/icons-material';

// import TitleArrow from '../../../assets/images/back-arrow.svg'

const ConnectorDashboard = () => {
    const navigate = useNavigate();
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    const rows = [
        createData('QPM Connection 1', '24 March 2025', 15, <span className='table-badge'>Connected</span>, 4.0),
        createData('QPM Connection 2', '24 March 2025', 15, <span className='table-badge'>Connected</span>, 4.3), 
    ];

    function createData(
        name: string,
        calories: string,
        fat: number,
        carbs: string,
        protein: number,
      ) {
        return { name, calories, fat, carbs, protein };
      }

    return (
        <Box>
            <Box className="title-with-arrow">
                <Stack direction="row" spacing={2}>
                    {/* <IconButton aria-label="arrow" className='icon-button-arrow' onClick={() => navigate("/datastores")}>
                        <Box component={'img'} src={TitleArrow} alt="BackArrow"></Box>
                    </IconButton> */}
                    <Box className="page-title" component={'h1'}>Connectors</Box>
                </Stack>
            </Box>

            <Box className="connector-dashboard">
                <Box className="connector-creator">
                    <Box component={'h4'}>Create new connector</Box>
                    <Box component={'p'}>Please choose a connector to proceed.</Box>  
                    
                    <Box className="connector-creator-logo">
                        <Box className="creator-logo-card" onClick={() => navigate("create")}>
                            <img src={s3Logo} />
                            <Typography>S3</Typography>
                        </Box>
                        <Box className="creator-logo-card">
                            <img src={googleCloud} />
                            <Typography>Google Cloud</Typography>
                        </Box>
                        <Box className="creator-logo-card">
                            <img src={azureLogo} />
                            <Typography>Azure DevOps Repos</Typography>
                        </Box>
                        <Box className="creator-logo-card">
                            <img src={mySQl} />
                            <Typography>My SQL</Typography>
                        </Box>
                        <Box className="creator-logo-card diabed-card">
                            <img src={r2Logo} />
                            <Typography>R2</Typography>
                        </Box>
                        <Box className="creator-logo-card diabed-card">
                            <img src={googleStorage} />
                            <Typography>Google Storage</Typography>
                        </Box>
                        <Box className="creator-logo-card diabed-card">
                            <img src={gitHub} />
                            <Typography>Github</Typography>
                        </Box>
                        <Box className="creator-logo-card diabed-card">
                            <img src={gitLab} />
                            <Typography>Gitlab</Typography>
                        </Box>
                        <Box className="creator-logo-card diabed-card">
                            <img src={svnLogo} />
                            <Typography>SVN</Typography>
                        </Box>
                        <Box className="creator-logo-card diabed-card">
                            <img src={bitbuketLogo} />
                            <Typography>BitBucket</Typography>
                        </Box>
                    </Box>

                    <Box className="my-connectors">
                        <Box className="my-connectors-header">
                            <Box component={'h4'}>My connectors</Box>
                            <Box className="connector-filter">
                                <Box className="filter-input">
                                    <TextField placeholder='Search connector' />
                                    <img src={searchIcon} />
                                </Box>
                                <Box className="filter-box">
                                    <Box className="filterbox-icon">
                                        <img src={filterIcon} />
                                    </Box>
                                    <Box className="filter-drop">
                                        <Box component="h4">Filter by Connectors</Box>
                                        <List>
                                            <ListItem> 
                                                <FormControlLabel value="File" control={<Checkbox />} label="File"  />
                                            </ListItem>
                                            <ListItem> 
                                                <FormControlLabel value="Amazon S3" control={<Checkbox />} label="Amazon S3"  />
                                            </ListItem>
                                            <ListItem> 
                                                <FormControlLabel value="R2" control={<Checkbox />} label="R2"  />
                                            </ListItem>
                                            <ListItem> 
                                                <FormControlLabel value="Google Cloud" control={<Checkbox />} label="Google Cloud"  />
                                            </ListItem>
                                            <ListItem> 
                                                <FormControlLabel value="Google Storage" control={<Checkbox />} label="Google Storage"  />
                                            </ListItem>
                                            <ListItem> 
                                                <FormControlLabel value="Github" control={<Checkbox />} label="Github"  />
                                            </ListItem>
                                            <ListItem> 
                                                <FormControlLabel value="Gitlab" control={<Checkbox />} label="Gitlab"  />
                                            </ListItem>
                                            <ListItem> 
                                                <FormControlLabel value="SVN" control={<Checkbox />} label="SVN"  />
                                            </ListItem>
                                            <ListItem> 
                                                <FormControlLabel value="BitBucket" control={<Checkbox />} label="BitBucket"  />
                                            </ListItem>
                                            <ListItem> 
                                                <FormControlLabel value="Azure DevOps Repos" control={<Checkbox />} label="Azure DevOps Repos"  />
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Box>
                            </Box>
                        </Box> 

                        <Box className="added-connector">
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            >
                            <Typography className='connector-logo' component="span">
                                <img src={googleCloud} /> Google Cloud
                            </Typography>
                            <Box className="connect-accord-header">
                                <Box className="connect-upload">
                                    <Typography component="label">2</Typography>
                                    <Typography>Connector</Typography>
                                </Box>
                                <Box className="connect-file">
                                    <Typography component="label">18</Typography>
                                    <Typography>File</Typography>
                                </Box>
                            </Box>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box className="add-connector-table">
                                    <TableContainer>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead>
                                            <TableRow>
                                                <TableCell>Connector name</TableCell>
                                                <TableCell align="left">Created on</TableCell>
                                                <TableCell align="left">Total files</TableCell>
                                                <TableCell align="left">Status</TableCell>
                                                <TableCell align="left">Action</TableCell>
                                            </TableRow>
                                            </TableHead>
                                            <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                <TableCell >
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="left">{row.calories}</TableCell>
                                                <TableCell align="left">{row.fat}</TableCell>
                                                <TableCell align="left">{row.carbs}</TableCell>
                                                <TableCell align="left">{row.protein}</TableCell>
                                                </TableRow>
                                            ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </AccordionDetails>
                            </Accordion> 
                        </Box>

                        <Box className="no-connector">
                            <img src={noConnector} />
                            <Typography>No connector has been created yet!</Typography>
                        </Box>
                    
                    </Box>

                </Box>
            </Box>

        </Box>
    )
}

export default ConnectorDashboard 