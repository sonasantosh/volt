import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import TitleArrow from '../../../assets/images/back-arrow.svg'
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid2';
import SelectDropdownWithSearchBox from '../common/selectDropdownWithCheckbox'
// import Upload from '../../components/common/uploadFile'
import TextInput from '../../../frontend/components/common/textField'
import { useNavigate } from 'react-router';

type CreateDatastoresFormProps = {
    updateDataStore?: boolean;
    title?: string;
}

const CreateDatastoresForm = ({ updateDataStore, title }: CreateDatastoresFormProps) => {
    const navigate = useNavigate();
    return (
        <Box>
            <Box className="title-with-arrow">
                <Stack direction="row" spacing={2}>
                    <IconButton aria-label="arrow" className='icon-button-arrow' onClick={() => navigate("/datastores")}>
                        <Box component={'img'} src={TitleArrow} alt="BackArrow"></Box>
                    </IconButton>
                    <Box className="page-title" component={'h1'}> {title || "Create Datastore"}</Box>
                </Stack>
            </Box>
            {updateDataStore && <>update data</>}
            {!updateDataStore &&
                <Box className="create-data-store-wrap">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid size={6}>
                                <TextInput />
                            </Grid>
                            <Grid size={6}><SelectDropdownWithSearchBox /></Grid>
                            {/* <Grid size={12}><Upload /></Grid> */}

                        </Grid>
                    </Box>

                </Box>
            }
        </Box>
    )
}

export default CreateDatastoresForm