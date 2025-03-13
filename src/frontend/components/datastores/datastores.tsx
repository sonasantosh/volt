import { Box, Stack } from "@mui/material";
import Grid from '@mui/material/Grid2';
import SearchDatasoteCreateBtn from "./searchDatasoteCreateBtn";
import DatastoreItem from "./datastoreItem";
import Toast from "../common/toast";

const Datastores = () => {
    return (
        <>
            <Box className="title-with-arrow">
                <Stack direction="row" spacing={2} justifyContent={"space-between"}>
                    <Box className="page-title" component={'h1'}>Datastore</Box>
                    <SearchDatasoteCreateBtn />
                </Stack>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={3}>
                        <DatastoreItem />
                    </Grid>
                </Grid>
            </Box>
            <Toast status="success" openToast={true} />
        </>
    )
}

export default Datastores