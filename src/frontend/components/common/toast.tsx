import * as React from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import CheckCircleIcon from '../../../assets/images/success.svg';

type toastProps = {
    status?: string;
    openToast?: boolean;
}

const Toast = ({ status, openToast }: toastProps) => {

    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        openToast && setOpen(true);
     }, [openToast])

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
