import * as React from 'react';
import { Box, IconButton, Stack, List, ListItem, ListItemText, Divider, FormGroup, Switch, styled } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import GuardianIcon from '../../../assets/images/guardian-btn-icon.svg';
import CloseIcon from '../../../assets/images/close.svg';

const GuardianDrawer = () => {

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
          Guardian
        </Box>
        <IconButton size="small" edge="start" className='icon-btn close-btn' onClick={toggleDrawer(false)}>
          <img src={CloseIcon} alt='close drawer' />
        </IconButton>
      </Stack>
      <List className='detail-listing'>
        <ListItem>
          <ListItemText
            primary="Personal Information"
            secondary="Mask your personal information, such as name, date of birth, phone number, and address."
          />
          <FormGroup>
            <CustomSwitch defaultChecked />
          </FormGroup>
        </ListItem>
        <Divider component={"li"} />
        <ListItem>
          <ListItemText
            primary="Financial Information"
            secondary="Mask your financial information, such as account numbers, credit card details, salary, and loan amounts, to ensure privacy and security."
          />
          <FormGroup>
            <CustomSwitch defaultChecked />
          </FormGroup>
        </ListItem>
        <Divider component={"li"} />
        <ListItem>
          <ListItemText
            primary="Legal Information"
            secondary="Mask your legal information, such as case numbers, contract details, court records, and personal identifiers, to ensure confidentiality and compliance with privacy regulations."
          />
          <FormGroup>
            <CustomSwitch defaultChecked />
          </FormGroup>
        </ListItem>
        <Divider component={"li"} />
        <ListItem>
          <ListItemText
            primary="Sales Data"
            secondary="Mask your sales information, such as customer details, transaction amounts, pricing data, and contract terms, to protect confidentiality and maintain business security."
          />
          <FormGroup>
            <CustomSwitch />
          </FormGroup>
        </ListItem>
        <Divider component={"li"} />
      </List>
      <Stack direction={"row"} p={2} gap={"1.25rem"} className='btn-wrapper'>
        <Button variant="outlined" className='default-outline-button'>
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
        className='default-outline-button'
      >
        <img src={GuardianIcon} alt='Guartian' />
        Guardian
      </Button>

      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  )
}

export default GuardianDrawer