import { useState } from 'react';
import { Box, IconButton, Stack, Avatar, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { Link, useNavigate } from 'react-router';
import Logo from "../../../assets/images/Logo.svg";
import SmallLogo from "../../../assets/images/logo-icon.svg"
import ToggleIcon from "../../../assets/images/humbergur.svg";
import AgentIcon from "../../../assets/images/agents.svg";
import ConnectorIcon from "../../../assets/images/Connectors.svg";
import DataStoreIcon from "../../../assets/images/dataStoreHover.svg";
import ApiReferenceIcon from "../../../assets/images/api-refference.svg";
import SettingIcon from "../../../assets/images/setting.svg";
import UserAvatar from '../../../assets/images/profile-img.png';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState<Boolean>(true);
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const [themeSelector, setThemeSelector] = useState('light');

    const navigate = useNavigate();

    const handleMenuClick = () => {
        setOpenSubMenu(!openSubMenu);
    };

    return (
        <Box className={`sidebar ${sidebarOpen ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
            <Stack direction={`${sidebarOpen ? 'row' : 'column'}`} className="logo-toggle-wrapper space-between align-center">
                <Link className='q3-logo' to={"/"}>
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
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton onClick={() => navigate("/agent")}>
                    <ListItemIcon>
                        <img src={AgentIcon} alt='Agent' />
                    </ListItemIcon>
                    <ListItemText primary="Agents" />
                </ListItemButton>
                <ListItemButton onClick={() => navigate("/connectors")}>
                    <ListItemIcon>
                        <img src={ConnectorIcon} alt='Connectors' />
                    </ListItemIcon>
                    <ListItemText primary="Connectors" />
                </ListItemButton>
                <ListItemButton onClick={() => navigate("/datastores")}>
                    <ListItemIcon>
                        <img src={DataStoreIcon} alt='Datastores' />
                    </ListItemIcon>
                    <ListItemText primary="Datastores" />
                </ListItemButton>
                <ListItemButton onClick={() => navigate("/api-reference")}>
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
                <Stack direction={"row"} gap={"0.75rem"} alignItems={"center"}>
                    <Avatar
                        alt="Remy Sharp"
                        src={UserAvatar}
                        className='user-image'
                    />
                    <Box component={"span"} className='user-name'>Shray Mathur</Box>
                    <IconButton aria-label="user detail" className='p-0 default-color user-btn'>
                        <MoreHorizIcon />
                    </IconButton>
                </Stack>
                <ToggleButtonGroup
                    value={themeSelector}
                    exclusive
                    onChange={() => setThemeSelector(themeSelector === 'light' ? 'dark' : 'light')}
                    aria-label="Theme changer"
                    className='theme-wrappper'
                >
                    <ToggleButton value="light">
                        <LightModeIcon />
                        <Box component={"span"} className='default-text'>Light</Box>

                    </ToggleButton>
                    <ToggleButton value="dark">
                        <DarkModeOutlinedIcon />
                        <Box component={"span"} className='default-text'>Dark</Box>
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>
        </Box >
    )
}

export default Sidebar