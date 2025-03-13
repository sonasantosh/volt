import { Stack, Button } from "@mui/material";

type buttonsDataProp = {
    btnVariant: "text" | "outlined" | "contained";
    btnClassName?: string;
    btnText?: string;
};

type buttonWrapperProps = {
    stackDirection?: "row" | "column";
    stackGap?: number;
    stackClass?: string;
    buttonsData?: buttonsDataProp[];
};

const ButtonWrapper = ({
    stackDirection = "row",
    stackGap,
    stackClass,
    buttonsData
}: buttonWrapperProps) => {

    const defaultButtonsData: buttonsDataProp[] = [
        {
            btnVariant: "contained",
            btnClassName: "common-button",
            btnText: "default button",
        },
    ];

    const buttonsToRender = buttonsData || defaultButtonsData;

    return (
        <Stack direction={stackDirection} gap={stackGap} className={`${stackClass} btn-wrapper`}>
            {
                buttonsToRender.map((button, index) => (
                    <Button
                        key={index}
                        variant={button.btnVariant}
                        className={button.btnClassName || "default-class"}
                    >
                        {button.btnText || "Default Button"}
                    </Button>
                ))
            }
        </Stack>
    );
};

export default ButtonWrapper;
