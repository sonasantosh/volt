import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import NoDataStroeIcon from '../../assets/images/noDataStroeIcon.svg'
import PageTitle from './pageTitle';
const NoDataStoresFound = () => {
  return (
    <Box>
       <PageTitle />
        <Box className="nodatestoresfound">
            <Box className="nodatestoresfound-inner">
                <Box className="nodatastore-icon-wrap"><Box component={'img'} src={NoDataStroeIcon} alt="NoDataStore"/></Box>
                <Box component={'h1'}>No Datastores Found</Box>
                <Box component={'p'}>No datastore has been created yet. Click the 
                "Create datastore" button to create one.</Box>
                <Button variant="contained" className='common-button'>Create Datastore</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default NoDataStoresFound