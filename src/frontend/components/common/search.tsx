import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
import SearchIcon from '../../../assets/images/search-icon.svg';
import InputAdornment from '@mui/material/InputAdornment';

export default function SearchField() {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <Box className="search-input">
    <TextField
    //   label="Search"
      variant="filled"
      value={searchText}
      onChange={handleSearchChange}
      placeholder='Search'
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
