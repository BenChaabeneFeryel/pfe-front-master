import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

 const show=[
  ["ID","id"],
  ["photo","photo"],
  ["CIN","CIN"],
  ["Nom","nom"],
  ["Prénom","prenom"],
  ["Poste","poste"],
  ["ID Camion","camion_id"],
  ["Numéro Télèphone","numero_telephone"],
  ["E-mail","email"], 
  ["Date de création","created_at"],
  ["Date de mise à jour","updated_at"],
 ];

export default function OuvrierTable() {
  const initialValue = { zone_travail_id:"", camion_id:"",photo:"",qrcode:"", qrcode:"", nom:"",prenom:"",CIN:"",numero_telephone:"",email:"",mot_de_passe:"",created_at:"", updated_at:"",error_list:[]};
  const url = `http://127.0.0.1:8000/api/ouvrier`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Photo", field: "photo", cellRenderer: (params) =>
      <img  style={{height:"50px", width:"50px", borderRadius:"50%"}} 
        src={`http://127.0.0.1:8000/storage/images/ouvrier/${params.data.photo}`}  alt="ouvrier" />},
    { headerName: "CIN", field: "CIN"},
    { headerName: "Nom", field: "nom"},
    { headerName: "Prénom", field: "prenom"},
    { headerName: "Poste", field: "poste"},
    { headerName: "ID Camion", field: "camion_id"},
    { headerName: "Numéro Télèphone", field: "numero_telephone" },
    { headerName: "E-mail", field: "email" },
  ]

  return (
    <div style={{width:"100%"}}>
        <h2 align="center">Ouvriers</h2>
        <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}