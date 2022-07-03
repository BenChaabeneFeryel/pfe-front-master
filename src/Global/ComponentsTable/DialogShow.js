import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function DialogZoneTravailShow({open,handleClose,data, show}) {

  let rows = [];
  for (let i = 0; i < show.length; i++) {
    if(show[i][0]==="photo"){
      rows.push(
        <img style={{height:"200px", width:"200px", borderRadius:"50%"}} 
        src={`http://127.0.0.1:8000/storage/images/ouvrier/${data[show[i][0]]}`} alt="gestionnaire"/>
      );
    }
  }

  return (
    <div>
      <Button variant="outlined" onClick={open}>
        Affichage des données
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        open={open}
        aria-describedby="alert-dialog-description" fullWidth
      >
        <BootstrapDialogTitle id="alert-dialog-title" onClose={handleClose} sx={{fontWeight: "400",fontSize:"30px", backgroundColor: 'white', textAlign:"center", color:"green"}}>
          Affichage des données
        </BootstrapDialogTitle>
        <DialogContent sx={{backgroundColor: 'white', display: "flex" }}>
          <div>{rows}</div> 
          <ul >
            {show.length!==0?(show.map((sh, key) =>   
              ((sh[1]!=="created_at" && sh[1]!=="updated_at" && sh[1]!=="photo" && sh[1]!=="qrcode"  && sh[1]!=="mot_de_passe")?(
                <li key={key}><b>{sh[0]}:</b>{data[sh[1]]}</li>
                ): null)
            )):null
            }
          </ul>     
        </DialogContent>
        {/* <DialogActions sx={{backgroundColor: 'white'}}>
          <Button onClick={handleClose} sx={{color:"white"}} color="success" variant="contained">Annuler</Button>
        </DialogActions> */}
      </BootstrapDialog>
    </div>
  );
}