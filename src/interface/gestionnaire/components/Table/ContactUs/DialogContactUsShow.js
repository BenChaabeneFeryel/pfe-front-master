import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function DialogContactUsShow({open,handleClose,data}) {
    console.log(data)
  return (
    <div>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{backgroundColor: 'white', textAlign:"center", color:"green"}}>
          <h1> Affichage des données</h1>
        </DialogTitle>
        <DialogContent sx={{backgroundColor: 'white'}}>
          <ul>
            <li><b>ID : </b>{data.id}</li>
            <li><b>Nom :</b>{data.nom}</li>
            <li><b>Prènom :</b>{data.prenom}</li>
            <li><b>E-mail :</b>{data.email}</li>
            <li><b>Numèro télèphone :</b>{data.numero_telephone}</li>
            <li><b>Message :</b>{data.message}</li>
            <li><b>Date de création :</b>{data.created_at}</li>
            <li><b>Date de mise à jour :</b>{data.updated_at}</li>
          </ul> 
        </DialogContent>
        <DialogActions sx={{backgroundColor: 'white'}}>
          <Button onClick={handleClose} sx={{color:"white"}} color="primary" variant="contained">
            Annuler
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}