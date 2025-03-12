import { Box } from "@mui/material"
import Grid from '@mui/material/Grid2';
import SelectDropdown from '../common/selectdropdown';
import Stack from '@mui/material/Stack';
import Search from '../common/search'
import GuardianDrawer from "../common/guardianDrawer";
const TableHeadingWithFilters = () => {
  return (
    <Box className="table-heading-wrap">
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}
            direction="row"
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
            >
                <Grid size={3}> 
                    <Box className="table-title">Files</Box>
                </Grid>
                <Grid size={9}> 

                    <Stack direction="row" spacing={2} justifyContent={"flex-end"} alignItems={'center'}>
                        <Search/>
                        <SelectDropdown/>
                        <SelectDropdown/>
                        <GuardianDrawer />
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    </Box>
  )
}

export default TableHeadingWithFilters