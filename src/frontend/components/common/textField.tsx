import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type fullWidthTextFieldProps = {
    placeholder?: string;
    label?: string;
    fieldClass?: string;
    required?: boolean;
    disabled?: boolean;
  }

export default function FullWidthTextField({placeholder, label, fieldClass, required, disabled }:fullWidthTextFieldProps) {
    return (
        <Box className="inputwrap">
            <Box component="p">{label || "Datastore Name"} 
                {required && <Box component="span" className='required-sign'>*</Box>}
                </Box>
            <TextField
                fullWidth
                id="outlined-error"
                placeholder={placeholder || "Enter datastore name"}
                className={`input-text ${fieldClass}`}
                disabled={disabled ? true : false}
                variant="filled"
            />
        </Box>

    );
}

