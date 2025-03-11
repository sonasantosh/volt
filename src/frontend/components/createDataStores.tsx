import { Box, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import TitleArrow from '../../assets/images/back-arrow.svg'
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid2';
const CreateDataStores = () => {
  return (
    <Box>
        <Box className="title-with-arrow">
            <Stack direction="row" spacing={2}>
                <IconButton aria-label="arrow" className='icon-button-arrow'>
                <Box component={'img'} src={TitleArrow} alt="BackArrow"></Box>
                </IconButton>
                <Box className="page-title" component={'h1'}>Create Datastore</Box>
            </Stack>
        </Box>
        <Box className="create-data-store-wrap">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <Box className="inputwrap">
                            <Box component="p">Datastore Name <Box component="span" className='required-sign'>*</Box></Box>
                            <TextField
                              fullWidth
                              id="outlined-error"
                              placeholder="Enter ADID"
                              className="input-text"
                            //   disabled
                                variant="filled"
                            />
                          </Box>


                    </Grid>
                    <Grid size={6}>1</Grid>
                    <Grid size={6}>1</Grid>
                    <Grid size={6}>1</Grid>
                </Grid>
            </Box>

        </Box>
        
        
    </Box>
  )
}

export default CreateDataStores