import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Search from '../common/search';
import DatafileIcon from '../../../assets/images/file.svg'
import viewIcon from '../../../assets/images/viewicon.svg'
import { Padding } from '@mui/icons-material';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className="drawersTabs-container">
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
            variant="scrollable"
            scrollButtons={false}
            aria-label="full width tabs example"   
          
       
        >
          <Tab label="Search Datastore" {...a11yProps(0)} />
          <Tab label="HR Document Search Datastore " {...a11yProps(1)} disabled/>
          <Tab label="Company Policy" {...a11yProps(2)} disabled/>
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>

        <Box className="tabs-searchfilter" dir={theme.direction}>
        <FormGroup>
            <FormControlLabel control={<Checkbox  color="primary"/>} label="Select All" />
        </FormGroup>
        <Search/>
        </Box>

        <Box className="tabscontent-card">
            <Box className="cardcontent-wrapper">
                <Box className="leftSec">
                    <Checkbox
                        color="primary"
                    />
                <Box className="fileicons-box">
                <Box component={'img'} src={DatafileIcon} alt="NoDataStore" />
                </Box>
                <Box>
                    <Box component={'h3'}>Recruitment & Hiring</Box>
                    <Box >
                    <MenuList dense className='filetype-wrap'>
                        <MenuItem>
                        <ListItemText inset>4 MB</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>PDF</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>Google Cloud - Data Instance</ListItemText>
                        </MenuItem>
                    </MenuList>
                    </Box>
                </Box>
            
                </Box>
                <Box className="rightSec">
                    <Box component={'img'} src={viewIcon} alt="NoDataStore" />
                    <Box component={'span'}> View</Box>
                </Box>
            </Box>
        </Box>

        <Box className="tabscontent-card">
            <Box className="cardcontent-wrapper">
                <Box className="leftSec">
                    <Checkbox
                        color="primary"
                    />
                <Box className="fileicons-box">
                <Box component={'img'} src={DatafileIcon} alt="NoDataStore" />
                </Box>
                <Box>
                    <Box component={'h3'}>Recruitment & Hiring</Box>
                    <Box >
                    <MenuList dense className='filetype-wrap'>
                        <MenuItem>
                        <ListItemText inset>4 MB</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>PDF</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>Google Cloud - Data Instance</ListItemText>
                        </MenuItem>
                    </MenuList>
                    </Box>
                </Box>
            
                </Box>
                <Box className="rightSec">
                    <Box component={'img'} src={viewIcon} alt="NoDataStore" />
                    <Box component={'span'}> View</Box>
                </Box>
            </Box>
        </Box>

        <Box className="tabscontent-card">
            <Box className="cardcontent-wrapper">
                <Box className="leftSec">
                    <Checkbox
                        color="primary"
                    />
                <Box className="fileicons-box">
                <Box component={'img'} src={DatafileIcon} alt="NoDataStore" />
                </Box>
                <Box>
                    <Box component={'h3'}>Recruitment & Hiring</Box>
                    <Box >
                    <MenuList dense className='filetype-wrap'>
                        <MenuItem>
                        <ListItemText inset>4 MB</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>PDF</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>Google Cloud - Data Instance</ListItemText>
                        </MenuItem>
                    </MenuList>
                    </Box>
                </Box>
            
                </Box>
                <Box className="rightSec">
                    <Box component={'img'} src={viewIcon} alt="NoDataStore" />
                    <Box component={'span'}> View</Box>
                </Box>
            </Box>
        </Box>
        <Box className="tabscontent-card">
            <Box className="cardcontent-wrapper">
                <Box className="leftSec">
                    <Checkbox
                        color="primary"
                    />
                <Box className="fileicons-box">
                <Box component={'img'} src={DatafileIcon} alt="NoDataStore" />
                </Box>
                <Box>
                    <Box component={'h3'}>Recruitment & Hiring</Box>
                    <Box >
                    <MenuList dense className='filetype-wrap'>
                        <MenuItem>
                        <ListItemText inset>4 MB</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>PDF</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>Google Cloud - Data Instance</ListItemText>
                        </MenuItem>
                    </MenuList>
                    </Box>
                </Box>
            
                </Box>
                <Box className="rightSec">
                    <Box component={'img'} src={viewIcon} alt="NoDataStore" />
                    <Box component={'span'}> View</Box>
                </Box>
            </Box>
        </Box>

        <Box className="tabscontent-card">
            <Box className="cardcontent-wrapper">
                <Box className="leftSec">
                    <Checkbox
                        color="primary"
                    />
                <Box className="fileicons-box">
                <Box component={'img'} src={DatafileIcon} alt="NoDataStore" />
                </Box>
                <Box>
                    <Box component={'h3'}>Recruitment & Hiring</Box>
                    <Box >
                    <MenuList dense className='filetype-wrap'>
                        <MenuItem>
                        <ListItemText inset>4 MB</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>PDF</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>Google Cloud - Data Instance</ListItemText>
                        </MenuItem>
                    </MenuList>
                    </Box>
                </Box>
            
                </Box>
                <Box className="rightSec">
                    <Box component={'img'} src={viewIcon} alt="NoDataStore" />
                    <Box component={'span'}> View</Box>
                </Box>
            </Box>
        </Box>
    
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
      <Box className="tabs-searchfilter">
        <FormGroup>
            <FormControlLabel control={<Checkbox  color="primary"/>} label="Select All" />
        </FormGroup>
        <Search/>
        </Box>

        <Box className="tabscontent-card">
            <Box className="cardcontent-wrapper">
                <Box className="leftSec">
                    <Checkbox
                        color="primary"
                    />
                <Box className="fileicons-box">
                <Box component={'img'} src={DatafileIcon} alt="NoDataStore" />
                </Box>
                <Box>
                    <Box component={'h3'}>Recruitment & Hiring</Box>
                    <Box >
                    <MenuList dense className='filetype-wrap'>
                        <MenuItem>
                        <ListItemText inset>4 MB</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>PDF</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>Google Cloud - Data Instance</ListItemText>
                        </MenuItem>
                    </MenuList>
                    </Box>
                </Box>
            
                </Box>
                <Box className="rightSec">
                    <Box component={'img'} src={viewIcon} alt="NoDataStore" />
                    <Box component={'span'}> View</Box>
                </Box>
            </Box>
        </Box>

        <Box className="tabscontent-card">
            <Box className="cardcontent-wrapper">
                <Box className="leftSec">
                    <Checkbox
                        color="primary"
                    />
                <Box className="fileicons-box">
                <Box component={'img'} src={DatafileIcon} alt="NoDataStore" />
                </Box>
                <Box>
                    <Box component={'h3'}>Recruitment & Hiring</Box>
                    <Box >
                    <MenuList dense className='filetype-wrap'>
                        <MenuItem>
                        <ListItemText inset>4 MB</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>PDF</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>Google Cloud - Data Instance</ListItemText>
                        </MenuItem>
                    </MenuList>
                    </Box>
                </Box>
            
                </Box>
                <Box className="rightSec">
                    <Box component={'img'} src={viewIcon} alt="NoDataStore" />
                    <Box component={'span'}> View</Box>
                </Box>
            </Box>
        </Box>

        <Box className="tabscontent-card">
            <Box className="cardcontent-wrapper">
                <Box className="leftSec">
                    <Checkbox
                        color="primary"
                    />
                <Box className="fileicons-box">
                <Box component={'img'} src={DatafileIcon} alt="NoDataStore" />
                </Box>
                <Box>
                    <Box component={'h3'}>Recruitment & Hiring</Box>
                    <Box >
                    <MenuList dense className='filetype-wrap'>
                        <MenuItem>
                        <ListItemText inset>4 MB</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>PDF</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>Google Cloud - Data Instance</ListItemText>
                        </MenuItem>
                    </MenuList>
                    </Box>
                </Box>
            
                </Box>
                <Box className="rightSec">
                    <Box component={'img'} src={viewIcon} alt="NoDataStore" />
                    <Box component={'span'}> View</Box>
                </Box>
            </Box>
        </Box>
        <Box className="tabscontent-card">
            <Box className="cardcontent-wrapper">
                <Box className="leftSec">
                    <Checkbox
                        color="primary"
                    />
                <Box className="fileicons-box">
                <Box component={'img'} src={DatafileIcon} alt="NoDataStore" />
                </Box>
                <Box>
                    <Box component={'h3'}>Recruitment & Hiring</Box>
                    <Box >
                    <MenuList dense className='filetype-wrap'>
                        <MenuItem>
                        <ListItemText inset>4 MB</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>PDF</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>Google Cloud - Data Instance</ListItemText>
                        </MenuItem>
                    </MenuList>
                    </Box>
                </Box>
            
                </Box>
                <Box className="rightSec">
                    <Box component={'img'} src={viewIcon} alt="NoDataStore" />
                    <Box component={'span'}> View</Box>
                </Box>
            </Box>
        </Box>

        <Box className="tabscontent-card">
            <Box className="cardcontent-wrapper">
                <Box className="leftSec">
                    <Checkbox
                        color="primary"
                    />
                <Box className="fileicons-box">
                <Box component={'img'} src={DatafileIcon} alt="NoDataStore" />
                </Box>
                <Box>
                    <Box component={'h3'}>Recruitment & Hiring</Box>
                    <Box >
                    <MenuList dense className='filetype-wrap'>
                        <MenuItem>
                        <ListItemText inset>4 MB</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>PDF</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>Google Cloud - Data Instance</ListItemText>
                        </MenuItem>
                    </MenuList>
                    </Box>
                </Box>
            
                </Box>
                <Box className="rightSec">
                    <Box component={'img'} src={viewIcon} alt="NoDataStore" />
                    <Box component={'span'}> View</Box>
                </Box>
            </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
      <Box className="tabs-searchfilter">
        <FormGroup>
            <FormControlLabel control={<Checkbox  color="primary"/>} label="Select All" />
        </FormGroup>
        <Search/>
        </Box>

        <Box className="tabscontent-card">
            <Box className="cardcontent-wrapper">
                <Box className="leftSec">
                    <Checkbox
                        color="primary"
                    />
                <Box className="fileicons-box">
                <Box component={'img'} src={DatafileIcon} alt="NoDataStore" />
                </Box>
                <Box>
                    <Box component={'h3'}>Recruitment & Hiring</Box>
                    <Box >
                    <MenuList dense className='filetype-wrap'>
                        <MenuItem>
                        <ListItemText inset>4 MB</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>PDF</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>Google Cloud - Data Instance</ListItemText>
                        </MenuItem>
                    </MenuList>
                    </Box>
                </Box>
            
                </Box>
                <Box className="rightSec">
                    <Box component={'img'} src={viewIcon} alt="NoDataStore" />
                    <Box component={'span'}> View</Box>
                </Box>
            </Box>
        </Box>

        <Box className="tabscontent-card">
            <Box className="cardcontent-wrapper">
                <Box className="leftSec">
                    <Checkbox
                        color="primary"
                    />
                <Box className="fileicons-box">
                <Box component={'img'} src={DatafileIcon} alt="NoDataStore" />
                </Box>
                <Box>
                    <Box component={'h3'}>Recruitment & Hiring</Box>
                    <Box >
                    <MenuList dense className='filetype-wrap'>
                        <MenuItem>
                        <ListItemText inset>4 MB</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>PDF</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>Google Cloud - Data Instance</ListItemText>
                        </MenuItem>
                    </MenuList>
                    </Box>
                </Box>
            
                </Box>
                <Box className="rightSec">
                    <Box component={'img'} src={viewIcon} alt="NoDataStore" />
                    <Box component={'span'}> View</Box>
                </Box>
            </Box>
        </Box>

        <Box className="tabscontent-card">
            <Box className="cardcontent-wrapper">
                <Box className="leftSec">
                    <Checkbox
                        color="primary"
                    />
                <Box className="fileicons-box">
                <Box component={'img'} src={DatafileIcon} alt="NoDataStore" />
                </Box>
                <Box>
                    <Box component={'h3'}>Recruitment & Hiring</Box>
                    <Box >
                    <MenuList dense className='filetype-wrap'>
                        <MenuItem>
                        <ListItemText inset>4 MB</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>PDF</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>Google Cloud - Data Instance</ListItemText>
                        </MenuItem>
                    </MenuList>
                    </Box>
                </Box>
            
                </Box>
                <Box className="rightSec">
                    <Box component={'img'} src={viewIcon} alt="NoDataStore" />
                    <Box component={'span'}> View</Box>
                </Box>
            </Box>
        </Box>
        <Box className="tabscontent-card">
            <Box className="cardcontent-wrapper">
                <Box className="leftSec">
                    <Checkbox
                        color="primary"
                    />
                <Box className="fileicons-box">
                <Box component={'img'} src={DatafileIcon} alt="NoDataStore" />
                </Box>
                <Box>
                    <Box component={'h3'}>Recruitment & Hiring</Box>
                    <Box >
                    <MenuList dense className='filetype-wrap'>
                        <MenuItem>
                        <ListItemText inset>4 MB</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>PDF</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>Google Cloud - Data Instance</ListItemText>
                        </MenuItem>
                    </MenuList>
                    </Box>
                </Box>
            
                </Box>
                <Box className="rightSec">
                    <Box component={'img'} src={viewIcon} alt="NoDataStore" />
                    <Box component={'span'}> View</Box>
                </Box>
            </Box>
        </Box>

        <Box className="tabscontent-card">
            <Box className="cardcontent-wrapper">
                <Box className="leftSec">
                    <Checkbox
                        color="primary"
                    />
                <Box className="fileicons-box">
                <Box component={'img'} src={DatafileIcon} alt="NoDataStore" />
                </Box>
                <Box>
                    <Box component={'h3'}>Recruitment & Hiring</Box>
                    <Box >
                    <MenuList dense className='filetype-wrap'>
                        <MenuItem>
                        <ListItemText inset>4 MB</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>PDF</ListItemText>
                        </MenuItem>
                        <MenuItem>
                        <ListItemText inset>Google Cloud - Data Instance</ListItemText>
                        </MenuItem>
                    </MenuList>
                    </Box>
                </Box>
            
                </Box>
                <Box className="rightSec">
                    <Box component={'img'} src={viewIcon} alt="NoDataStore" />
                    <Box component={'span'}> View</Box>
                </Box>
            </Box>
        </Box>
      </TabPanel>
    </Box>
  );
}
