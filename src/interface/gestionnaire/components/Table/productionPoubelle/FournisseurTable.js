import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

const show=[
  ["ID","id"],
  ["Photo","photo"],
  ["Nom","nom"],
  ["Prènom","prenom"],
  ["CIN","CIN"],
  ["Numéro télèphone","numero_telephone"],
  ["E-mail","email"],
  ["Adresse","adresse"],
]; 

export default function FournisseurTable() {
  const initialValue = { nom: "", prenom: "",CIN: "", photo: "",numero_telephone:"",email:"",adresse:"",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/fournisseurs`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Photo", field: "photo", cellRenderer: (params) =>
    <img  style={{height:"47px", width:"47px", borderRadius:"50%"}} alt="fournisseur"
      src={`http://127.0.0.1:8000/storage/images/fournisseur/${params.data.photo}`} />},
    { headerName: "Nom", field: "nom"},
    { headerName: "Prènom", field: "prenom"},
    { headerName: "CIN", field: "CIN"},
    { headerName: "Numéro télèphone", field: "numero_telephone" },
    { headerName: "E-mail", field: "email" },
    { headerName: "Adresse", field: "adresse" }
  ] 
  return (
    <div style={{width:"100%"}}>
      <h2 align="center">Fournisseurs</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}