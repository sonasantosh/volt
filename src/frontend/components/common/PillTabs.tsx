import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SelectDropdownWithSearchBox from '../common/selectDropdownWithCheckbox'
// import Upload from '../../components/common/uploadFile'
import TextInput from '../../../frontend/components/common/textField'

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
    <Box className="pill-tabs">
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
         variant="scrollable"
         scrollButtons="auto"
          aria-label="full width tabs example"       
       
        >
          <Tab label="Open AI" {...a11yProps(0)} />
          <Tab label="Anthropic" {...a11yProps(1)}   disabled />
          <Tab label="Google" {...a11yProps(2)}   disabled />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <Box>
        <Grid container spacing={2}>
            <Grid size={{xs: 12, sm: 12, md:6, lg: 6}}>
                <TextInput  />
            </Grid>
            <Grid size={{xs: 12, sm: 12, md:6, lg: 6}}><SelectDropdownWithSearchBox /></Grid>
        </Grid>
        </Box>
      </TabPanel>

      <TabPanel value={value} index={1} dir={theme.direction}>
      <Box>
        <Grid container spacing={2}>
            <Grid size={{xs: 12, sm: 12, md:6, lg: 6}} >
                <TextInput  />
            </Grid>
           
        </Grid>
        </Box>
      </TabPanel>

      <TabPanel value={value} index={2} dir={theme.direction}>
      <Box>
        <Grid container spacing={2}>
            <Grid size={{xs: 12, sm: 12, md:6, lg: 6}}>
                <TextInput  />
            </Grid>
            <Grid size={{xs: 12, sm: 12, md:6, lg: 6}}><SelectDropdownWithSearchBox /></Grid>
        </Grid>
        </Box>
      </TabPanel>
    </Box>
  );
}
