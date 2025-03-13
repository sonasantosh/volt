import { Stack, Button } from "@mui/material";
import { useNavigate } from "react-router";


const DatastoreFooter = () => {
    const navigate = useNavigate();
    return (
        <>
            <Stack direction="row" gap={2} justifyContent={"flex-end"} className="footer-btn-wrapper datastore-footer btn-wrapper">
                <Button variant="outlined" className="default-outline-button">
                    Back
                </Button>
                <Button variant="contained" className="common-button" onClick={()=>navigate("/datastores")} >
                    Create
                </Button>
            </Stack>
        </>
    )
}

export default DatastoreFooter