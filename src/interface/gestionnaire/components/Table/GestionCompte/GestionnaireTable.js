import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

 const show=[
  ["ID","id"],
  ["photo","photo"],
  ["Nom","nom"],
  ["Prénom","prenom"],
  ["CIN","CIN"],
  ["Numéro télèphone","numero_telephone"],
  ["E-mail","email"],
  ["Adresse","adresse"],
  ["Date de création","created_at"],
  ["Date de mise à jour","updated_at"],
];

export default function GestionnaireTable() {
  const initialValue = { photo:"",nom: "", prenom: "",CIN:"", numero_telephone: "", email: "", adresse:"",created_at:"", updated_at:"", error_list:[]};
  const url = `http://127.0.0.1:8000/api/gestionnaire`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Photo", field: "photo", minWidth:70, minWidth:30, cellRenderer: (params) =>
    <img  style={{height:"47px", width:"47px", borderRadius:"50%"}} 
          src={`http://127.0.0.1:8000/storage/images/gestionnaire/${params.data.photo}`} alt="gestionnaire"/>},
    { headerName: "Nom", field: "nom", maxWidth: 135, minWidth:50 },
    { headerName: "Prénom", field: "prenom", maxWidth: 135, minWidth:50 },
    { headerName: "CIN", field: "CIN", maxWidth: 135, minWidth:50 },
    { headerName: "Numéro Télèphone", field: "numero_telephone" , maxWidth: 135 , minWidth:50},
    { headerName: "E-mail", field: "email", maxWidth: 200, minWidth:50 },
    { headerName: "Adresse", field: "adresse" , maxWidth: 250 , minWidth:50},
  ]

  return (
    <>
        <h2 align="center">Gestionnaires</h2>
        <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </>
  );
}



