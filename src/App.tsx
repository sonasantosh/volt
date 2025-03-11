import { Box, Stack } from '@mui/material';
import "./assets/css/style.scss";
import "./assets/css/styles2.scss";
import "./assets/css/styles3.scss";
import NoDataStoresFound from './frontend/components/datastores/noDataStoresFound';
import CreateDataStores from './frontend/components/datastores/createDataStores';
import Sidebar from './frontend/components/common/sidebar';
function App() {

  return (
    <>
      <Stack direction='row' className="global-wrapper">
        <Sidebar />
        <Box className="main-wrapper" >
          <Box component={"main"}>
            {/* <NoDataStoresFound /> */}
            <CreateDataStores />
          </Box>

        </Box>
      </Stack >
    </>
  )
}

export default App
