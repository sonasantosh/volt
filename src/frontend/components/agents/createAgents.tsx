import { Box, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import TitleArrow from '../../../assets/images/back-arrow.svg'
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid2';
import TextInput from '../../../frontend/components/common/textField';
import Accordion from '../../../frontend/components/common/accordion';
import GuardianDrawer from "../common/guardianDrawer";
import { useNavigate } from 'react-router';

const CreateAgents = () => {
    const navigate = useNavigate();
    return (
        <Box>
            <Box className="title-with-arrow">
                <Stack direction="row" spacing={2}>
                    <IconButton aria-label="arrow" className='icon-button-arrow' onClick={() => navigate("/datastores")}>
                        <Box component={'img'} src={TitleArrow} alt="BackArrow"></Box>
                    </IconButton>
                    <Box className="page-title" component={'h1'}>Create Smart Search Agent</Box>
                </Stack>
            </Box>

            <Box className="create-data-store-wrap">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid size={6}>
                            <TextInput />
                        </Grid>

                        <Grid size={6}>
                            <TextInput />
                        </Grid>

                        <Grid size={12}>
                            <TextInput />
                        </Grid>
                       
                        

                    </Grid>
                    <Box className="btn-endplacement">
                         <Button className='outlinebtn'>View Prompt Library</Button>
                    </Box>
                </Box>

            </Box>

        <Box className="accordion-container">
        <Accordion></Accordion>
      
        </Box>
        </Box>
    )
}

export default CreateAgents 