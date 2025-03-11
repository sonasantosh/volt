import { Box, Stack } from '@mui/material';
import "./assets/css/style.scss";
import "./assets/css/style3.scss";
import NoDataStoresFound from './frontend/components/datastores/noDataStoresFound';
import Sidebar from './frontend/components/common/sidebar';
function App() {

  return (
    <>
      <Stack direction='row' className="global-wrapper">
        <Sidebar />
        <Box className="main-wrapper" >
          <Box component={"main"}>
            <NoDataStoresFound />
          </Box>

        </Box>
      </Stack >
    </>
  )
}

export default App
