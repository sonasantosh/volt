import { Stack, Button } from "@mui/material";
import { useNavigate } from "react-router";

type datastoreFooterProps = {
    btn1Text?: string;
    btn2Text?: string;
}

const DatastoreFooter = ({btn1Text, btn2Text}:datastoreFooterProps) => {
    const navigate = useNavigate();
    return (
        <>
            <Stack direction="row" gap={2} justifyContent={"flex-end"} className="footer-btn-wrapper datastore-footer btn-wrapper">
                <Button variant="outlined" className="default-outline-button">
                    {btn1Text || "Back"}
                </Button>
                <Button variant="contained" className="common-button" onClick={()=>navigate("/datastores")} >
                    {btn2Text || "Create"}
                </Button>
            </Stack>
        </>
    )
}

export default DatastoreFooter