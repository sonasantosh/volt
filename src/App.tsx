import { Box, Stack } from '@mui/material';
import { Outlet } from 'react-router';
import "./assets/css/style.scss";
import "./assets/css/styles2.scss";
import "./assets/css/styles3.scss";
import Sidebar from './frontend/components/common/sidebar';

function App() {

  return (
    <>
      <Stack direction='row' className="global-wrapper">
        <Sidebar />
        <Box className="main-wrapper" >
          <Box component={"main"}>
            <Outlet />
          </Box>
        </Box>
      </Stack >
    </>
  )
}

export default App
