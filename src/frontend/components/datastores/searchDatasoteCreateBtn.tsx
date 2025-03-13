import { Stack, Button } from "@mui/material"
import SearchField from "../common/search"

const SearchDatasoteCreateBtn = () => {
    return (
        <Stack direction={"row"} gap={2} alignItems={"center"} className="search-create-btn-wrapper">
            <SearchField placeholder={"Search datastores"} />
            <Button variant="contained" className="common-button">
                Create New Datastore
            </Button>
        </Stack>
    )
}

export default SearchDatasoteCreateBtn;