import { useState } from 'react';
import { Box, TextField } from '@mui/material';
import SearchIcon from '../../../assets/images/search-icon.svg';
import InputAdornment from '@mui/material/InputAdornment';

type searchFieldProps = {
  placeholder?: string;
  label?: string;
}

export default function SearchField({placeholder, label}:searchFieldProps) {
  const [searchText, setSearchText] = useState("");

  return (
    <Box className="search-input">
    <TextField
      label={label && label}
      variant="filled"
      value={searchText}
      onChange={(e)=>setSearchText(e.target.value)}
      placeholder={placeholder || 'Search'}
      fullWidth
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <img src={SearchIcon} alt="Icon"/>
            </InputAdornment>
          ),
        },
      }}
    />
    </Box>
  );
}
