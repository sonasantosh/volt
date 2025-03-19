
import { Box, Button, IconButton,Stack, Typography} from '@mui/material';
import { useNavigate } from 'react-router';
import Grid from '@mui/material/Grid2';


import "../../../assets/css/style4.scss";
import googleCloud from '../../../assets/images/connector-img/google-cloud-logo.svg';
import TextInput from '../../../frontend/components/common/textField';
import SelectDropdownWithSearchBox from '../common/selectDropdownWithCheckbox';

import TitleArrow from '../../../assets/images/back-arrow.svg'
import SelectDropdown from '../common/selectDropdown';
const CreateConnectors = () => {
    const navigate = useNavigate();
    return (
        <Box className="create-connector-page">
            <Box className="title-with-arrow">
                <Stack direction="row" spacing={2}>
                    <IconButton aria-label="arrow" className='icon-button-arrow' onClick={() => navigate("/connectors")}>
                        <Box component={'img'} src={TitleArrow} alt="BackArrow"></Box>
                    </IconButton>
                    <Box className="page-title" component={'h1'}>Create connector 
                        <img src={googleCloud} />
                    </Box>
                </Stack>
            </Box>

            <Box className="creat-connector-form">
                <Grid container spacing={2}>
                    <Grid size={4}>
                        <Box>
                            <TextInput label='Name' placeholder='Enter Name' required />
                        </Box>
                    </Grid>
                    <Grid size={4}>
                        <Box>
                            <SelectDropdown selectLabel='Authentication Method*' />
                        </Box>
                    </Grid>
                    <Grid size={4}>
                        <Box>
                            <TextInput label='AWS Kay' placeholder='Enter AWS Kay' required />
                        </Box>
                    </Grid>
                    <Grid size={4}>
                        <Box>
                            <TextInput label='AWS Secret Kay' placeholder='Enter AWS Secret Kay' required />
                        </Box>
                    </Grid>
                    <Grid size={4}>
                        <Box>
                            <SelectDropdownWithSearchBox label='Format' placeholder='Select Format' required />
                        </Box>
                    </Grid> 
                </Grid>
            </Box>

            <Box className="crate-connector-btn">
                <Stack direction={"row"} gap={2} className="btn-wrapper">
                    <Button variant="outlined" className='default-outline-button'>
                        Back
                    </Button>
                    <Button variant="outlined" className='default-outline-button delete-btn'>
                        Delete
                    </Button>
                    <Button variant="contained" className='common-button'>
                        Create
                    </Button>
                    <Button variant="contained" className='common-button'>
                        Update
                    </Button>
                    
                </Stack>
            </Box>

          

        </Box>
    )
}

export default CreateConnectors 