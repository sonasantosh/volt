import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid2';
import SelectDropdownWithSearchBox from '../common/selectDropdownWithCheckbox'
import { Button, Box } from '@mui/material';
import AccDatastore from '../../../assets/images/acc-datastore.svg';

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
                    <Button variant="outlined" className='filesbtn'>View Files</Button>    
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
          <Typography component="span">Header</Typography>
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
