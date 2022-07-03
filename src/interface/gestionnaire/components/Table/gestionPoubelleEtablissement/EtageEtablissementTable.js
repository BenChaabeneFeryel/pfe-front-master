import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
            ["ID","id"],
            ["ID Bloc Etablissement","bloc_etablissement_id"],
            ["Etage ","nom_etage_etablissement"],
           ];    
export default function EtageEtablissementTable() {
  const initialValue = {capacite_poubelle:"", quantite_disponible_plastique: "", quantite_disponible_canette: "",quantite_disponible_composte: "", quantite_disponible_papier: "",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/etage-etablissement`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "ID Bloc Etablissement", field: "bloc_etablissement_id", },
    { headerName: "Etage ", field: "nom_etage_etablissement", },
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center">Etages d'établissements</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}