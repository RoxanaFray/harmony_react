import * as React from "react";
import { makeStyles } from "@mui/styles";
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from "@mui/material/Box";
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles((theme) => ({ 
    ModalBackground: {
        "& div": {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
        }
    },
    modalBlock: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        width: "80%"
    },
    modalImage: {
        maxWidth: "90%",
        maxHeight: "100%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    modalClose: {
        position: 'absolute !important',
        top: 10,
        right: 20,
        backgroundColor: 'rgba(255, 255, 255, 0) !important',
        color: 'white',
        cursor: 'pointer'
    }
}));

export default function ImageModal (props) {
    const classes = useStyles();

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.ModalBackground}
            open={props.modal}
            onClose={props.setModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={props.modal}>
                <Box sx={classes.modalBlock}>
                    <img
                        alt='Изображение жилого комплекса'
                        src={props.image}
                        className={classes.modalImage}
                    />
                    <CloseIcon fontSize='large' className={classes.modalClose} onClick={props.close} />
                </Box>
            </Fade>
        </Modal>
    );
}
