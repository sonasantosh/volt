import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid2';
import SelectDropdownWithSearchBox from '../common/selectDropdownWithCheckbox'
import { Button, Box, Switch, styled } from '@mui/material';
import AccDatastore from '../../../assets/images/acc-datastore.svg';
import AccGuardrails from '../../../assets/images/acc-guardrails.svg';
import AccLlm from '../../../assets/images/acc-LLM.svg';
import AccSettings from '../../../assets/images/acc-advance-settings.svg';
import ViewFilesDrawer from '../common/viewFilesDrawer';
import Upload from '../../components/common/uploadFile'
import PillTabs from '../common/PillTabs';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextInput from '../../../frontend/components/common/textField'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';

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

// Tabs

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

   const [age, setAge] = React.useState('');
  
    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };

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


export default function AccordionExpandDefault() {

    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
           <Box component={'img'} src={AccDatastore} alt="NoDataStore" />
          <Typography component="span">Datastore</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Grid container spacing={2} className="accordionbody-content">                        
                <Grid size={6}>  
                    <Grid size={12} className="multiselect-container">                
                    <SelectDropdownWithSearchBox />
                    {/* <Button variant="outlined" className=''>
                         
                        </Button>     */}
                  <ViewFilesDrawer />
                    </Grid>               
                </Grid>
                <Grid size={6} className="accordian-btn-end">
                    <Button variant="contained" className='common-button'> Create Datastore </Button>
                </Grid>
            </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Box component={'img'} src={AccGuardrails} alt="NoDataStore" />
          <Typography component="span">Guardrails</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Grid container spacing={2}>

          <Grid size={6} className="switchbox">
              <Box component={'h3'}> Red Teaming </Box>
              <CustomSwitch defaultChecked />
            </Grid>

            <Grid size={6} className="switchbox">
              <Box component={'h3'}> Bias Detection </Box>
              <CustomSwitch defaultChecked />
            </Grid>

            <Grid size={6}><Upload /></Grid>
            <Grid size={6}><Upload /></Grid>
            
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Box component={'img'} src={AccLlm} alt="NoDataStore" />
          <Typography component="span">LLM</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={2}>
            <Grid size={3}>
            <Box component={'h3'}> LLM</Box>
            </Grid>
            <Grid size={9}>
              <Box>
                <PillTabs/>
                
              </Box>
            </Grid>
          </Grid>
        
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Box component={'img'} src={AccSettings} alt="NoDataStore" />
          <Typography component="span">Advance Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={2}>
            <Grid size={3}>
            <Box component={'h3'}> Embedding</Box>
            </Grid>
            <Grid size={9}>

              <Box>
                <Box className="pill-tabs">
          <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
         variant="scrollable"
         scrollButtons={false}
          aria-label="full width tabs example"       
       
        >
          <Tab label="OpenAI Embedding" {...a11yProps(0)} />
          <Tab label="Azure Embedding" {...a11yProps(1)} />
          <Tab label="Cohere Embedding" {...a11yProps(2)} />
          <Tab label="Gemini Embedding" {...a11yProps(3)} />
          <Tab label="Bedrock Embedding" {...a11yProps(4)} />
          <Tab label="HuggingFace Embedding" {...a11yProps(5)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <Box>
        <Grid container spacing={2}>
            <Grid size={6}>
                <TextInput  />
            </Grid>
            <Grid size={6}>
            <Box sx={{ minWidth: 200 }} className="inputwrap selectdropdown">
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          variant='filled'
        > 
          <MenuItem value={0}>
          <Box className="select-placeholder" component={'span'}>Select</Box>
          </MenuItem>
          <MenuItem value={1}>All connectors</MenuItem>
          <MenuItem value={2}>Connectors1</MenuItem>
          <MenuItem value={3}>Connectors2</MenuItem>
        </Select>
      </FormControl>
      {/* <Box className="error-text">Please enter value</Box> */}
    </Box>

            </Grid>
        </Grid>
        </Box>
      </TabPanel>

      <TabPanel value={value} index={1} dir={theme.direction}>
      <Box>
        <Grid container spacing={2}>
            <Grid size={6}>
                <TextInput  />
            </Grid>
           
        </Grid>
        </Box>
      </TabPanel>

      <TabPanel value={value} index={2} dir={theme.direction}>
      <Box>
        <Grid container spacing={2}>
            <Grid size={6}>
                <TextInput  />
            </Grid>
            <Grid size={6}><SelectDropdownWithSearchBox /></Grid>
        </Grid>
        </Box>
      </TabPanel>
    </Box>
              </Box>
            </Grid>
          </Grid>
        
        </AccordionDetails>
      </Accordion>  
    </div>
  );
}
