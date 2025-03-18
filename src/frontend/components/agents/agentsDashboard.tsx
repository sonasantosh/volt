

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import AgentOne from '../../../assets/images/agent1.svg';
import AgentTwo from '../../../assets/images/agent2.svg';
import Agentfour from '../../../assets/images/agent4.svg';
import agentSearchIcon from '../../../assets/images/agent-search.svg';
import NoAgentList from '../../../assets/images/no-agents.png';
import AddMorePlusIcon from '../../../assets/images/add-more-plus.svg';
import { useNavigate } from 'react-router';
import "../../../assets/css/styles5.scss";
import { Button, Checkbox, FormControlLabel, List, ListItem, TextField, Typography } from '@mui/material';
import filterIcon from '../../../assets/images/connector-img/filter-icon.svg';
import searchIcon from '../../../assets/images/connector-img/search-icon.svg';

import editIcon from '../../../assets/images/outline_edit.svg';
import playIcon from '../../../assets/images/Play.svg';


const AgentsList = () => { 
    const navigate = useNavigate();  
    return (
        <Box>
            <Box className="page-title" component={'h1'}>Agents</Box>
            <Box className="subtitle">
                <Box component={'h2'}>Create new agent</Box>
                <Box component={'p'}> Please choose an agent to proceed. </Box>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid size={{xs: 12, sm: 6, md:6, lg: 3}}>
                    <Link href="#" onClick={() => navigate("create")} underline="none" className='agentcard'>
                    
                            <Box component={'img'} src={AgentOne} alt="NoDataStore" />
                            <Box component={'h3'}>Smart Search Agent</Box>
                            <Box component={'p'}>Use generative AI for smart discovery, summaries, Q&A, and content creation.</Box>
                        </Link>
                    </Grid>

                    <Grid size={{xs: 12, sm: 6, md:6, lg: 3}}>
                    <Link href="#" underline="none" className='agentcard'>
                            <Box component={'img'} src={AgentTwo} alt="NoDataStore" />
                            <Box component={'h3'}>Smart Search Agent</Box>
                            <Box component={'p'}>Use generative AI for smart discovery, summaries, Q&A, and content creation.</Box>
                        </Link>
                    </Grid>

                    <Grid size={{xs: 12, sm: 6, md:6, lg: 3}}>
                    <Link href="#" underline="none" className='agentcard'>
                            <Box component={'img'} src={Agentfour} alt="NoDataStore" />
                            <Box component={'h3'}>Smart Search Agent</Box>
                            <Box component={'p'}>Use generative AI for smart discovery, summaries, Q&A, and content creation.</Box>
                        </Link>
                    </Grid>

                    <Grid size={{xs: 12, sm: 6, md:6, lg: 3}}>
                    <Link href="#" underline="none" className='agentcard'>
                            <Box component={'img'} src={Agentfour} alt="NoDataStore" />
                            <Box component={'h3'}>Smart Search Agent</Box>
                            <Box component={'p'}>Use generative AI for smart discovery, summaries, Q&A, and content creation.</Box>
                        </Link>
                    </Grid>

                    <Box className="addmorewrap-container">
                        <Link href="#" underline="none" className="addmorewrap">
                            <Box component={'img'} src={ AddMorePlusIcon} alt="NoDataStore" /> 
                            <Box component={'span'}> View more agents </Box>                    
                        </Link>
                    
                    </Box>

                </Grid>

            <Box className="myagents-list"> 
                    <Box className="myagents-list-header">
                        <Box component={'h2'}>My agents</Box>
                        <Box className="connector-filter">
                                <Box className="filter-input">
                                    <TextField placeholder='Search connector' />
                                    <img src={searchIcon}  alt='Search Icon'/>
                                </Box>
                                <Box className="filter-box">
                                    <Box className="filterbox-icon">
                                        <img src={filterIcon}  alt='Search Icon'/>
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

                    <Box className="add-agent">
                        <Box className="add-agent-wrappr">
                            <Box className="add-agent-left">
                                <img src={agentSearchIcon} alt='AgentSearchIcon' />
                                <Box>
                                    <Typography component='p'>Smart Search Agent</Typography>
                                    <Typography component='label'>Search for anything across data sources.</Typography>
                                </Box>
                            </Box> 
                            <Box className="add-agent-right">
                                <Box className="connect-accord-header">
                                    <Box className="connect-upload">
                                        <Typography component="label">2</Typography>
                                        <Typography>Connector</Typography>
                                    </Box>
                                    <Box className="connect-file">
                                        <Typography component="label">18</Typography>
                                        <Typography>File</Typography>
                                    </Box>
                                    <Box className="agent-grid-btn">
                                        <Button variant="outlined" className='default-outline-button'>
                                            <img src={editIcon}  alt='Edit Icon'/>
                                        </Button>
                                        <Button variant="contained" className='common-button'>
                                        <img src={playIcon}  alt='Play Icon'/> Run
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="listwrap">
                    <Box component={'img'} src={NoAgentList} alt="NoDataStore" />                  
                        <Box component={'p'}>  No agent has been created yet!</Box>
                    </Box>
            </Box>
                
                
            </Box>
        </Box>
    )
}

export default AgentsList 