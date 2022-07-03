import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

const show=[
  ["ID","id"],
  ["Fournisseur","fournisseur_id"],
  ["Matériel","nom_materiel"],
  ["Prix Unitaire", "prix_unitaire"],
  ["Quantité","quantite"],
  ["Prix total","prix_total"], 
];    

export default function MateriauxPrimairesTable() {
  const initialValue = { id_fournisseur: "", nom_materiel: "",prix_unitaire: "", quantite: "",prix_total:"",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/materiaux-primaires`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left'},
    { headerName: "ID Fournisseur", field: "fournisseur_id" },
    { headerName: "Matériel", field: "nom_materiel" },
    { headerName: "Prix Unitaire", field: "prix_unitaire"},
    { headerName: "Quantité", field: "quantite" },
    { headerName: "Montant total", field: "prix_total"},
  ]
  
  return (
    <div style={{width:"100%"}}>
      <h2 align="center">Matériaux Primaires</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}