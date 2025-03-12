import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField() {
    return (
        <Box className="inputwrap">
            <Box component="p">Datastore Name <Box component="span" className='required-sign'>*</Box></Box>
            <TextField
                fullWidth
                id="outlined-error"
                placeholder="Enter datastore name"
                className="input-text"
            //   disabled
                variant="filled"
            />
        </Box>
    );
}

