import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup() {
  return (
    <FormControl  className="radioGroup-container">
   
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
       
      >
        <FormControlLabel className='slected' value="Fast" control={<Radio />} label="Fast" checked/>
        <FormControlLabel value="Balance" control={<Radio />} label="Balance"  disabled/>
        <FormControlLabel value="Python Code-Based" control={<Radio />} label="Python Code-Based"  disabled/>
       
      </RadioGroup>
    </FormControl>
  );
}