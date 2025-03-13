import * as React from 'react';
import { Box, IconButton, Stack, List, ListItem, ListItemText, Divider, FormGroup, Switch, styled } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import CloseIcon from '../../../assets/images/close.svg';
import DrawerTabs from '../common/drawerTabs';

const ViewFilesDrawer = () => {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const CustomSwitch = styled(Switch)(({ theme }) => ({
    width: 36,
    height: 20,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 14,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(3px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 3,
      '&.Mui-checked': {
        transform: 'translateX(15px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#0DA051',
          ...theme.applyStyles('dark', {
            backgroundColor: '#1B242C',
          }),
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 14,
      height: 14,
      borderRadius: 30,
      transition: theme.transitions.create(['width'], {
        duration: 100,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 30,
      opacity: 1,
      backgroundColor: '#CFD6DD',
      boxSizing: 'border-box',
      ...theme.applyStyles('dark', {
        backgroundColor: 'rgba(255,255,255,.35)',
      }),
    },
  }));

  const DrawerList = (
    <Box sx={{ width: 560 }} role="presentation">
      <Stack className="title-close-wrapper" direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Box className="drawer-title" component={"span"}>
          View Files
        </Box>
      
        <IconButton size="small" edge="start" className='icon-btn close-btn' onClick={toggleDrawer(false)}>
          <img src={CloseIcon} alt='close drawer' />
        </IconButton>
      </Stack>

      <DrawerTabs/>

  

      <Stack direction={"row"} p={2} gap={"1.25rem"} className='btn-wrapper'>
        <Button variant="outlined" className='default-outline-button' onClick={toggleDrawer(false)}>
          Cancel
        </Button>
        <Button variant="contained" className='common-button'>
          Update
        </Button>
      </Stack>
    </Box>
  );

  return (
    <>
      <Button
        variant="outlined"
        onClick={toggleDrawer(true)}
        className='default-outline-button filesbtn'
      >
        View Files
      </Button>

      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  )
}

export default ViewFilesDrawer