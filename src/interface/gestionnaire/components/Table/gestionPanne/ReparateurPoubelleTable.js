import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

const show=[
  ["ID","id"],
  ["Photo","photo"],
  ["CIN","CIN"],
  ["Nom","nom"],
  ["Prènom","prenom"],
  ["Numéro Télèphone","numero_telephone"],
  ["E-mail","email"],
  ["Adresse","adresse"],
]; 

export default function ReparateurPoubelleTable() {
  const initialValue = {photo:"",nom:"", prenom:"",CIN:"", numero_telephone:"", email:"",adresse:"",mot_de_passe:"",created_at:"", updated_at:"",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/reparateur-poubelle`

  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Photo", field: "photo", cellRenderer: (params) =>
    <img  style={{height:"47px", width:"47px", borderRadius:"50%"}} 
      src={`http://127.0.0.1:8000/storage/images/reparateur_poubelle/${params.data.photo}`} alt="reparateur-poubelle" />},
    { headerName: "CIN", field: "CIN"},
    { headerName: "Nom", field: "nom"},
    { headerName: "Prènom", field: "prenom"},
    { headerName: "Numéro Télèphone", field: "numero_telephone" },
    { headerName: "E-mail", field: "email" },
    { headerName: "Adresse", field: "adresse"},
  ]

    return (
      <div style={{width:"100%"}}>
        <h2 align="center">Réparateurs de Poubelles</h2>
        <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
      </div>
    );
  }
      




















