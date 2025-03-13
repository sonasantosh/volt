import { Stack, Button } from "@mui/material"
import SearchField from "../common/search"
import { useNavigate } from 'react-router';

const SearchDatasoteCreateBtn = () => {
    const navigate = useNavigate();
    return (
        <Stack direction={"row"} gap={2} alignItems={"center"} className="search-create-btn-wrapper">
            <SearchField placeholder={"Search datastores"} />
            <Button variant="contained" className="common-button" onClick={() => navigate("create")}>
                Create New Datastore
            </Button>
        </Stack>
    )
}

export default SearchDatasoteCreateBtn;