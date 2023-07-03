import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';

import './Modal.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    borderRadius: '6px',
    p: 4,
};
export default function ModalComponent() {

    const [open, setOpen] = React.useState(false);
    return (
        <div>
            <Button variant='contained' onClick={() => setOpen(true)}>Open modal</Button>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <h3>Modal Name</h3>
                            </Grid>
                            <Grid item xs={4} className='text-end'>
                                <Button variant="text" onClick={() => setOpen(false)}><CloseIcon /></Button>
                            </Grid>
                        </Grid>
                        <hr className='mt-0' />
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        vsd
                    </Typography>
                    <div className="saveandclosebtns text-end">
                        <Button variant="contained" className='ms-2' onClick={() => setOpen(false)}>Close</Button>
                        <Button variant="contained" className='ms-2' onClick={() => setOpen(false)}>Save</Button>

                    </div>
                </Box>

            </Modal>

        </div>
    )
}
