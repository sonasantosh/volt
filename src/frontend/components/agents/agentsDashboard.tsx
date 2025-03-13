

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import AgentOne from '../../../assets/images/agent1.svg';
import AgentTwo from '../../../assets/images/agent2.svg';
import Agentfour from '../../../assets/images/agent4.svg';
import NoAgentList from '../../../assets/images/no-agents.png';
import AddMorePlusIcon from '../../../assets/images/add-more-plus.svg';
import { useNavigate } from 'react-router';
import "../../../assets/css/styles5.scss";


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
                    <Grid size={3}>
                    <Link href="#" onClick={() => navigate("create")} underline="none" className='agentcard'>
                    
                            <Box component={'img'} src={AgentOne} alt="NoDataStore" />
                            <Box component={'h3'}>Smart Search Agent</Box>
                            <Box component={'p'}>Use generative AI for smart discovery, summaries, Q&A, and content creation.</Box>
                        </Link>
                    </Grid>

                    <Grid size={3}>
                    <Link href="#" underline="none" className='agentcard'>
                            <Box component={'img'} src={AgentTwo} alt="NoDataStore" />
                            <Box component={'h3'}>Smart Search Agent</Box>
                            <Box component={'p'}>Use generative AI for smart discovery, summaries, Q&A, and content creation.</Box>
                        </Link>
                    </Grid>

                    <Grid size={3}>
                    <Link href="#" underline="none" className='agentcard'>
                            <Box component={'img'} src={Agentfour} alt="NoDataStore" />
                            <Box component={'h3'}>Smart Search Agent</Box>
                            <Box component={'p'}>Use generative AI for smart discovery, summaries, Q&A, and content creation.</Box>
                        </Link>
                    </Grid>

                    <Grid size={3}>
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
                    <Box className="subtitle">
                        <Box component={'h2'}>My agents</Box>
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