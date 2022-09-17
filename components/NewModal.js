import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function NewModal({ open, handleClose }) {
    return (
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Aun no tiene permiso para realizar esta accion
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Realice una donacion en esta causa y podra acceder al seguimiento cuando se le otorgue el NFT.
                </Typography>
            </Box>
        </Modal>
    );
}
