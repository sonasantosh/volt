import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import UploadIcon from '../../../assets/images/upload-arrow.svg' ;

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload() {
  return (
    <Box className="uploadfile-wrap">
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<img src={UploadIcon} alt='icon'/>}
      >
        <Box className="filetext-wrap">
          Drag & drop file or <Box component={'span'} sx={{color:'#2E4ACD'}} className='file-browse'>Browse</Box>
          {/* <Box component="div" className='filesub-text'>PNG, JPG, GIF up to 5MB</Box> */}
        </Box>
        <VisuallyHiddenInput
          type="file"
          onChange={(event) => console.log(event.target.files)}
          multiple
        />
      </Button>
    </Box>
  );
}