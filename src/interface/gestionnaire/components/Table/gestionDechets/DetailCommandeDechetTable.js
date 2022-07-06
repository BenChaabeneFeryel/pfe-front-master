import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

const show=[
  ["ID","id"],
  ["ID Commande","commande_dechet_id"],
  ["Type Déchet","dechet.type_dechet"],
  ["Quantité","quantite"],
];

export default function DetailCommandeDechetTable() {
    const initialValue = { commande_dechet_id:"", dechet_id:"", quantite:"",created_at:"", updated_at:"",error_list:[]};    
    const url = `http://127.0.0.1:8000/api/detail-commande-dechets` 
    const columnDefs = [
      { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
      { headerName: "ID Commande", field: "commande_dechet_id"},
      { headerName: "Type Déchet", field: "dechet.type_dechet"},
      { headerName: "Quantité", field: "quantite"},
    ]  
    return (
      <div style={{width:"100%"}}>
        <h2 align="center">Détails des Commandes Déchets</h2>
        <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
      </div>
    );
  }
      