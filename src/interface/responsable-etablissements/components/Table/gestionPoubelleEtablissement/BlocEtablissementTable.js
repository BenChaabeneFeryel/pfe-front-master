import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

const show=[
  ["ID","id"],["etablissement_id","etablissement_id"],
  ["Bloc","nom_bloc_etablissement"],
]; 

export default function BlocEtablissementTable() {
  const initialValue = {etablissement_id:"", nom_bloc_etablissement: "",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/auth-responsable-etablissement/bloc-etablissement-responsable`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Bloc ", field: "nom_bloc_etablissement", },
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center"> Blocs</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}