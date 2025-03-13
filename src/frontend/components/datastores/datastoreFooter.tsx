import { Stack } from "@mui/material";
import ButtonWrapper from "../common/buttonWrapper";

const DatastoreFooter = () => {
    return (
        <>
            <Stack justifyContent={"flex-end"} className="datastore-footer">
                <ButtonWrapper
                    stackDirection='row'
                    stackGap={2}
                    stackClass='footer-btn-wrapper'
                    buttonsData=
                    {
                        [
                            {
                                btnVariant: "outlined",
                                btnClassName: "default-outline-button",
                                btnText: "Back",
                            },
                            {
                                btnVariant: "contained",
                                btnClassName: "common-button",
                                btnText: "Create",
                            },
                        ]
                    }
                />
            </Stack >
        </>
    )
}

export default DatastoreFooter