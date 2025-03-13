import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid2';
import SelectDropdownWithSearchBox from '../common/selectDropdownWithCheckbox'
import { Button, Box, Switch, styled } from '@mui/material';
import CheckedIcon from '../../../assets/images/checked-icon.svg';
import AccDatastore from '../../../assets/images/acc-datastore.svg';
import AccGuardrails from '../../../assets/images/acc-guardrails.svg';
import AccLlm from '../../../assets/images/acc-LLM.svg';
import AccSettings from '../../../assets/images/acc-advance-settings.svg';
import InfoIcon from '../../../assets/images/info-icon.svg'
import ViewFilesDrawer from '../common/viewFilesDrawer';
import Upload from '../../components/common/uploadFile'
import PillTabs from '../common/PillTabs';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextInput from '../../../frontend/components/common/textField'
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import RowRadioButtons from '../common/radioGroup';

// Tooltips
const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
  },
});

const NoMaxWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none',
  },
});

const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`;

// Tooltips
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

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
    ClassNames:'Tabspannelpills'
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

                    <Box className="inputwrap">
                           <Box component="p">Select Datastore <Box component="span" className='required-sign'>*</Box></Box>
                           <Autocomplete
                           multiple
                           id="checkboxes-tags-demo"
                           options={top100Films}
                           disableCloseOnSelect
                           getOptionLabel={(option) => option.title}
                           renderOption={(props, option, { selected }) => {
                               const { key, ...optionProps } = props;
                               return (
                               <li key={key} {...optionProps}
                                 style={{padding:'0.625rem 0.75rem',fontSize:'0.875rem',lineHeight:'1.25rem',color:'#1B242C',fontWeight:'500'}}
                               >
                                 <Checkbox
                                 icon={icon}
                                 checkedIcon={checkedIcon}
                                 style={{ marginRight: 10 }}
                                 checked={selected}
                                 sx={{background:'transparent', padding:'0',outlineWidth:'0'}}
                                 
                                 />
                                 {option.title}
                               </li>
                               );
                           }}
                           style={{ width: '100%' }}
                             renderInput={(params) => (
                               <TextField {...params}  placeholder="Select connection" 
                               variant='filled'
                               />
                             )}
                           />
                       </Box>
                   
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

            <Grid size={6}>
            <Box component="p" sx={{margin:'0 0 5px 0'}}>  Confidentiality Filter </Box>
              <Upload />
              </Grid>
              
            <Grid size={6}>
            <Box component="p" sx={{margin:'0 0 5px 0'}}>  Compliance Verification </Box>
              <Upload />
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
            <Box component={'h3'}
           sx={{ alignItems: 'center', display:'flex', gap:'3px' }}
            > 
              Embedding  
            
              <Tooltip title={longText}
                 slotProps={{
                  tooltip: {
                    sx: {
                      color: "#fff",
                      backgroundColor: "#000",
                      fontSize: "14px",
                      lineHeight:'24px',
                      fontWeight:"400",
                      padding:"10px",
                    },
                  },
                }}
                >
                
                <Box component={'img'} src={InfoIcon}/> 
            </Tooltip>
              </Box>
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
          <Tab label="Azure Embedding" {...a11yProps(1)}  disabled/>
          <Tab label="Cohere Embedding" {...a11yProps(2)}  disabled/>
          <Tab label="Gemini Embedding" {...a11yProps(3)} disabled />
          <Tab label="Bedrock Embedding" {...a11yProps(4)}  disabled/>
          <Tab label="HuggingFace Embedding" {...a11yProps(5)}  disabled/>
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <Box>
        <Grid container spacing={2}>
            <Grid size={6}>
                <TextInput  />
            </Grid>
            <Grid size={6}> <SelectDropdownWithSearchBox /> </Grid>
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

{/* 2nd-row */}
          <Grid container spacing={2} 
            sx={{margin:'0 0 16px 0', padding: '0 0 20px 0'}}
          >
            <Grid size={3}>
            <Box component={'h3'}
           sx={{ alignItems: 'center', display:'flex', gap:'3px' }}
            > 
              Parsing Mode  
            
              <Tooltip title={longText}
                 slotProps={{
                  tooltip: {
                    sx: {
                      color: "#fff",
                      backgroundColor: "#000",
                      fontSize: "14px",
                      lineHeight:'24px',
                      fontWeight:"400",
                      padding:"10px",
                    },
                  },
                }}
                >
                
                <Box component={'img'} src={InfoIcon}/> 
            </Tooltip>
              </Box>

            </Grid>

            <Grid size={9}>
              <Box className="activeinactive-container">
                <Box className="SlectedBox inactivecard">
                <Box component={'span'} className='circle'></Box>
                <img src={CheckedIcon} alt=''/>
                  <Box component={'span'} className='namewithtooltip'> Fast 
                  <Tooltip title={longText}
                  slotProps={{
                    tooltip: {
                      sx: {
                        color: "#fff",
                        backgroundColor: "#000",
                        fontSize: "14px",
                        lineHeight:'24px',
                        fontWeight:"400",
                        padding:"10px",
                      },
                    },
                  }}
                  >
                  
                  <Box component={'img'} src={InfoIcon}/> 
              </Tooltip>
                  </Box>
                </Box>
                <Box className="inactivecard">
                <Box component={'span'} className='circle'> </Box>
                  <Box component={'span'} className='namewithtooltip'> Balance 
                  <Tooltip title={longText}
                  slotProps={{
                    tooltip: {
                      sx: {
                        color: "#fff",
                        backgroundColor: "#000",
                        fontSize: "14px",
                        lineHeight:'24px',
                        fontWeight:"400",
                        padding:"10px",
                      },
                    },
                  }}
                  >
                  
                  <Box component={'img'} src={InfoIcon}/> 
              </Tooltip>
                  </Box>
                </Box>

                <Box className="inactivecard">
                  <Box component={'span'} className='circle'> </Box>
                  <Box component={'span'} className='namewithtooltip'> Python Code-Based 
                  <Tooltip title={longText}
                  slotProps={{
                    tooltip: {
                      sx: {
                        color: "#fff",
                        backgroundColor: "#000",
                        fontSize: "14px",
                        lineHeight:'24px',
                        fontWeight:"400",
                        padding:"10px",
                      },
                    },
                  }}
                  >
                  
                  <Box component={'img'} src={InfoIcon}/> 
              </Tooltip>
                  </Box>
                </Box>
              </Box>
         
            </Grid>
          </Grid>
{/* 3rd-row */}
        <Grid container spacing={2}
           sx={{margin:'0 0 16px 0', padding: '0 0 20px 0'}}
        >
              <Grid size={3}>
                  <Box component={'h3'}
                sx={{ alignItems: 'center', display:'flex', gap:'3px' }}
                  > 
                LLM Infrastructure Options
              </Box>

            </Grid>
            
            <Grid size={9}>
              <Box className="activeinactive-container">
                <Box className="inactivecard">
                <Box component={'span'} className='circle'></Box>
              
                  <Box component={'span'} className='namewithtooltip'> Enable Load balancing 
                  
                  </Box>
                </Box>
                <Box className="inactivecard">
                <Box component={'span'} className='circle'> </Box>
                  <Box component={'span'} className='namewithtooltip'> Enable Fallback 
                  
                  </Box>
                </Box>

              </Box>
         
            </Grid>
         
          </Grid>

          {/* 4th row */}
        
          <Grid container spacing={2} 
           sx={{padding: '0 0 20px 0'}}
          >
            <Grid size={3}>
            <Box component={'h3'}
           sx={{ alignItems: 'center', display:'flex', gap:'3px' }}
            > 
              Chunking Method

              <Tooltip title={longText}
                 slotProps={{
                  tooltip: {
                    sx: {
                      color: "#fff",
                      backgroundColor: "#000",
                      fontSize: "14px",
                      lineHeight:'24px',
                      fontWeight:"400",
                      padding:"10px",
                    },
                  },
                }}
                >
                
                <Box component={'img'} src={InfoIcon}/> 
            </Tooltip>
              </Box>

            </Grid>

            <Grid size={9}>
              <Box className="activeinactive-container">
                <Box className="SlectedBox inactivecard">
                <Box component={'span'} className='circle'></Box>
                <img src={CheckedIcon} alt=''/>
                  <Box component={'span'} className='namewithtooltip'> Recursive Character-Based 
                  <Tooltip title={longText}
                  slotProps={{
                    tooltip: {
                      sx: {
                        color: "#fff",
                        backgroundColor: "#000",
                        fontSize: "14px",
                        lineHeight:'24px',
                        fontWeight:"400",
                        padding:"10px",
                      },
                    },
                  }}
                  >
                  
                  <Box component={'img'} src={InfoIcon}/> 
              </Tooltip>
                  </Box>
                </Box>
                <Box className="inactivecard">
                <Box component={'span'} className='circle'> </Box>
                  <Box component={'span'} className='namewithtooltip'> Markdown-Based 
                  <Tooltip title={longText}
                  slotProps={{
                    tooltip: {
                      sx: {
                        color: "#fff",
                        backgroundColor: "#000",
                        fontSize: "14px",
                        lineHeight:'24px',
                        fontWeight:"400",
                        padding:"10px",
                      },
                    },
                  }}
                  >
                  
                  <Box component={'img'} src={InfoIcon}/> 
              </Tooltip>
                  </Box>
                </Box>

                <Box className="inactivecard">
                  <Box component={'span'} className='circle'> </Box>
                  <Box component={'span'} className='namewithtooltip'> Python Code-Based 
                  <Tooltip title={longText}
                  slotProps={{
                    tooltip: {
                      sx: {
                        color: "#fff",
                        backgroundColor: "#000",
                        fontSize: "14px",
                        lineHeight:'24px',
                        fontWeight:"400",
                        padding:"10px",
                      },
                    },
                  }}
                  >
                  
                  <Box component={'img'} src={InfoIcon}/> 
              </Tooltip>
                  </Box>
                </Box>
              </Box>
         
            </Grid>
          </Grid>
          
        </AccordionDetails>
      </Accordion>  
    </div>
  );
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
];
