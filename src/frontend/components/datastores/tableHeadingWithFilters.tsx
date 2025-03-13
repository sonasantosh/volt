import { Box, Button } from "@mui/material"
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Search from '../common/search'
import GuardianDrawer from "../common/guardianDrawer";
import SelectDropdown from "../common/selectDropdown";
import AddIcon from "../../../assets/images/plus-icon.svg";
import { useNavigate } from "react-router";

const TableHeadingWithFilters = () => {
  const navigate = useNavigate();
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
          <Grid size={2}>
            <Box className="table-title">Files</Box>
          </Grid>
          <Grid size={10}>

            <Stack direction="row" spacing={2} justifyContent={"flex-end"} alignItems={'center'}>
              <Search placeholder="Search" />
              <SelectDropdown />
              <SelectDropdown />
              <GuardianDrawer />
              <Button
                variant="outlined"
                className='default-outline-button add-btn'
                onClick={()=> navigate("/datastores/update")}
              >
                <img src={AddIcon} alt="Add/Edit Data" />
                Add/Edit Data
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default TableHeadingWithFilters