import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid2';
import SelectDropdownWithSearchBox from '../common/selectDropdownWithCheckbox'
import { Button, Box } from '@mui/material';
import AccDatastore from '../../../assets/images/acc-datastore.svg';
import AccGuardrails from '../../../assets/images/acc-guardrails.svg';
import AccLlm from '../../../assets/images/acc-LLM.svg';
import AccSettings from '../../../assets/images/acc-advance-settings.svg';
import ViewFilesDrawer from '../common/viewFilesDrawer';
import Upload from '../../components/common/uploadFile'
import PillTabs from '../common/PillTabs';


export default function AccordionExpandDefault() {
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
         <Box>
          <Box component={'h3'}> LLM</Box>
          <Box>
           <PillTabs/>
          </Box>
         </Box>
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
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>  
    </div>
  );
}
