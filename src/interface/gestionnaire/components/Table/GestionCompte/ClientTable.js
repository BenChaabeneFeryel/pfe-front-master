import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

 const show=[
  ["ID","id"],
  ["Entreprise","nom_entreprise"],
  ["Responsable","nom_responsable"],
  ["Matricule Fiscale","matricule_fiscale"],
  ["Numéro Télèphone","numero_telephone"],
  ["Numéro Fixe","numero_fixe"],
  ["E-mail","email"],
  ["Adresse","adresse"],
  ["Date de création","created_at"],
  ["Date de mise à jour","updated_at"],
 ];

export default function ClientTable() {
  const initialValue = { photo:"",nom: "", prenom: "",CIN:"", numero_telephone: "", email: "", adresse:"",created_at:"", updated_at:"", error_list:[]};
  const url = `http://127.0.0.1:8000/api/client`
  const columnDefs = [
    { headerName: "ID", field: "id",  maxWidth:100,minWidth:80, pinned: 'left' },
    { headerName: "Entreprise", field: "nom_entreprise", minWidth: 135},
    { headerName: "Responsable", field: "nom_responsable", minWidth: 135 },
    { headerName: "Matricule Fiscale", field: "matricule_fiscale", minWidth: 135 },
    { headerName: "Numéro Télèphone", field: "numero_telephone" , minWidth: 135 },
    { headerName: "Numéro Fixe", field: "numero_fixe", minWidth: 135 },
    { headerName: "E-mail", field: "email", minWidth: 135  },
    { headerName: "Adresse", field: "adresse" , minWidth: 135 },
  ]

  return (
    <div style={{width:"100%"}}>
        <h2 align="center">Clients Déchets</h2>
        <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}


