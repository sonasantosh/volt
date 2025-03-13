import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router"

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{
            height: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
        }}>
            <h1 style={{marginBottom: "2rem"}}>
                Page Not Found
            </h1>
            <Button variant="contained" className='common-button' onClick={()=> navigate("/")}>
                Back to home
            </Button>
        </Box>
    )
}

export default PageNotFound