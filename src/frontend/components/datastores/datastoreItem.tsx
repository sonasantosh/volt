import { Box, Button, Stack, Typography } from "@mui/material";
import CloudIcon from '../../../assets/images/upload-icon.svg';
import DeleteIcon from '../../../assets/images/delete.svg';

const DatastoreItem = () => {
    return (
        <Stack direction={"column"} gap={2} className="datastore-item">
            <Box className="image-wraper">
                <img src={CloudIcon} alt="Datastore cloud" />
            </Box>
            <Stack direction={"column"} gap={".385rem"} className="content-wrapper">
                <Typography component={"h3"}>
                    Search Datastore
                </Typography>
                <Typography component={"p"}>
                    1 Docx . 1 PDF
                </Typography>
            </Stack>
            <Stack direction={"row"} gap={2} className="btn-wrapper">
                <Button variant="contained" className='common-button'>
                    Edit
                </Button>
                <Button variant="outlined" className='default-outline-button'>
                    <img src={DeleteIcon} alt="Delete Item" />
                </Button>
            </Stack>
        </Stack>
    )
}

export default DatastoreItem