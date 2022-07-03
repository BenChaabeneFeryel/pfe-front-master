import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

const show=[
  ["ID","id"],
  ["Bloc","bloc_etablissement_id"],
  ["Etage","nom_etage_etablissement"],
];    

export default function EtageEtablissementTable() {
  const initialValue = {bloc_etablissement_id:"", nom_etage_etablissement: "",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/auth-responsable-etablissement/etage-etablissement-responsable`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Bloc", field: "nom_bloc", },
    { headerName: "Etage ", field: "nom_etage_etablissement", },
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center">Etages</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}