import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

 const show=[
  ["ID","id"],
  ["Type","type_dechet"],
  ["Prix Unitaire","prix_unitaire"],
 ];

 export default function DechetsTable() {
  const initialValue = { type_dechet:"", prix_unitaire:"",error_list:[]};

  const url = `http://127.0.0.1:8000/api/dechets`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Type", field: "type_dechet"},
    { headerName: "Prix Unitaire", field: "prix_unitaire"},
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center">Déchets</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}











