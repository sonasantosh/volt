import { Box, IconButton, Stack } from '@mui/material';
import { useState } from 'react';
import "./assets/css/style.scss";
import { Link } from 'react-router';
import Logo from "./assets/images/Logo.svg";
import SmallLogo from "./assets/images/logo-icon.svg"
import ToggleIcon from "./assets/images/humbergur.svg";
import AgentIcon from "./assets/images/agents.svg";
import ConnectorIcon from "./assets/images/Connectors.svg";
import DataStoreIcon from "./assets/images/dataStoreHover.svg";
import ApiReferenceIcon from "./assets/images/api-refference.svg";
import SettingIcon from "./assets/images/setting.svg";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import NoDataStoresFound from './frontend/components/noDataStoresFound';
function App() {
  const [sidebarOpen, setSidebarOpen] = useState<Boolean>(true);
  const [openSubMenu, setOpenSubMenu] = useState(true);

  const handleMenuClick = () => {
    setOpenSubMenu(!openSubMenu);
  };
  return (
    <>
      <Stack direction='row' className="global-wrapper">
        <Box className={`sidebar ${sidebarOpen ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
          <Stack direction={`${sidebarOpen ? 'row' : 'column'}`} className="logo-toggle-wrapper space-between align-center">
            <Link to={"/"}>
              <img src={sidebarOpen ? Logo : SmallLogo} alt="Vold AI" />
            </Link>
            {
              sidebarOpen &&
              <IconButton aria-label="Toggle Sidebar" onClick={() => { setSidebarOpen((prev) => !prev) }} className='p-0'>
                <img src={ToggleIcon} alt="Toggle Icon" />
              </IconButton>
            }
            {

              !sidebarOpen &&
              <IconButton aria-label="Toggle Sidebar" onClick={() => { setSidebarOpen((prev) => !prev) }} className='collapsed-toggle-icon'>
                <img src={ToggleIcon} alt="Toggle Icon" />
              </IconButton>
            }
          </Stack>
          <List
            className="links-wrapper"
            sx={{ width: '100%' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton>
              <ListItemIcon>
                <img src={AgentIcon} alt='Agent' />
              </ListItemIcon>
              <ListItemText primary="Agents" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <img src={ConnectorIcon} alt='Connectors' />
              </ListItemIcon>
              <ListItemText primary="Connectors" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <img src={DataStoreIcon} alt='Datastores' />
              </ListItemIcon>
              <ListItemText primary="Datastores" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <img src={ApiReferenceIcon} alt='Api Reference' />
              </ListItemIcon>
              <ListItemText primary="API References" />
            </ListItemButton>
            <ListItemButton onClick={handleMenuClick}>
              <ListItemIcon>
                <img src={SettingIcon} alt='Setting' />
              </ListItemIcon>
              <ListItemText primary="Settings" />
              {openSubMenu ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
            <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <img src={SettingIcon} alt='Setting' />
                  </ListItemIcon>
                  <ListItemText primary="Link1" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <Box className="user-theme-wrapper">

          </Box>
        </Box >
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
