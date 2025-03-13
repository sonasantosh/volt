import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import CheckCircleIcon from '../../../assets/images/success.svg';

type toastProps = {
    status?: string;
}

const Toast = ({status}: toastProps) => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <Button onClick={handleClick}>Open Snackbar</Button>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={200000}
                onClose={handleClose}
                message={<><img src={CheckCircleIcon} alt='Datastore status' /> Datastore successfully created</>}
                className={`${status} default-toast`}
            />
        </>
    )
}

export default Toast;

{/* <Toast status='success | danger' /> */}