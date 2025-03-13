import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectDropdown() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 200 }} className="inputwrap selectdropdown">
      <Box component="p">Connections <Box component="span" className='required-sign'>*</Box></Box>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age || "0"}  // Default to "0" if age is undefined or null
          // label="Age"
          onChange={handleChange}
          // error
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
  );
}