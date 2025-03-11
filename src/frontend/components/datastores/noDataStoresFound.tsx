import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import PageTitle from '../common/pageTitle';
import NoDataStroeIcon from '../../../assets/images/noDataStroeIcon.svg';
import { useNavigate } from 'react-router';

const NoDataStoresFound = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <PageTitle />
      <Box className="nodatestoresfound">
        <Box className="nodatestoresfound-inner">
          <Box className="nodatastore-icon-wrap"><Box component={'img'} src={NoDataStroeIcon} alt="NoDataStore" /></Box>
          <Box component={'h1'}>No Datastores Found</Box>
          <Box component={'p'}>No datastore has been created yet. Click the
            "Create datastore" button to create one.</Box>
          <Button variant="contained" className='common-button' onClick={() => navigate("create")}>Create Datastore</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default NoDataStoresFound