import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

 const show=[
  ["ID","id"],
  ["Nom","nom"],
  ["Photo","photo"],
  ["Prénom","prenom"],
  ["Numéro Télèphone","numero_telephone"],
  ["Numéro Fixe","numero_fixe"],
  ["E-mail","email"],
  ["Adresse","adresse"],
 ];

export default function ResponsableTable() {
  const initialValue = { photo:"",nom: "", prenom: "", numero_telephone: "",numero_fixe:"", email: "", mot_de_passe:"",adresse:"",created_at:"", updated_at:"", error_list:[]};
  const url = `http://127.0.0.1:8000/api/responsable-etablissement`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Photo", field: "photo", cellRenderer: (params) =>
      <img  style={{height:"50px", width:"50px", borderRadius:"50%"}} alt="responsable"
          src={`http://127.0.0.1:8000/storage/images/responsable_etablissement/${params.data.photo}`}  />},
    { headerName: "Nom", field: "nom", maxWidth: 135 },
    { headerName: "Prénom", field: "prenom", maxWidth: 135 },
    { headerName: "Numéro Télèphone", field: "numero_telephone", maxWidth: 135 },
    { headerName: "Numéro Fixe", field: "numero_fixe" , maxWidth: 135 },
    { headerName: "E-mail", field: "email", maxWidth: 135  },
    { headerName: "Adresse", field: "adresse" , maxWidth: 135 },
  ]

  return (
    <div style={{width:"100%"}}>
        <h2 align="center">Responsables d'établissements</h2>
        <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}


