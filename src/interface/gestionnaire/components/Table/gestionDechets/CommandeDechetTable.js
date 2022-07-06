import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

 const show=[
  ["ID","id"],
  ["ID Client","client_dechet_id"],
  ["Type de paiement","type_paiment"],
  ["Montant Total","montant_total"],
  ["Date Commande","date_commande"],
  ["Date Livraison","date_livraison"],
 ];

 export default function CommandeDechetTable() {
  const initialValue = { client_dechet_id:"", quantite:"", montant_total:"", date_commande:"", date_livraison:"",created_at:"", updated_at:"", error_list:[]};

  const url = `http://127.0.0.1:8000/api/commande-dechet`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "ID Client", field: "client_dechet_id"},
    { headerName: "Type de paiement", field: "type_paiment"},
    { headerName: "Montant Total", field: "montant_total"},
    { headerName: "Date Commande", field: "date_commande"},
    { headerName: "Date Livraison", field: "date_livraison"}
  ]

  return (
    <div style={{width:"100%"}}>
        <h2 align="center">Commandes de déchets</h2>
        <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}











