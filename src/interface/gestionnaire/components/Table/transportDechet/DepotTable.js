import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
const show=[
  ["ID","id"],
  ["ID Zone","zone_depot_id"],
  ["ID Camion","camion_id"],
  ["Date","date_depot"],
  ["Quantité deposé plastique","quantite_depose_plastique"],
  ["Quantité deposé papier","quantite_depose_papier"],
  ["Quantité deposé composte","quantite_depose_canette"],
  ["Quantité deposé canette","quantite_depose_composte"],
];    
export default function DepotTable() {
  const initialValue = { zone_depot_id:"", camion_id:"", date_depot:"", quantite_depose_plastique:"", quantite_depose_papier:"",
   quantite_depose_canette:"", quantite_depose_composte:"",created_at:"", updated_at:"",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/depot`
    const columnDefs = [
      { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
      { headerName: "ID Zone", field: "zone_depot_id"},
      { headerName: "ID Camion", field: "camion_id"},
      { headerName: "Date", field: "date_depot"},
      { headerName: "Quantité deposé plastique", field: "quantite_depose_plastique",cellStyle: {textAlign:"center",color: 'rgb(18, 102, 241)'}},
      { headerName: "Quantité deposé papier", field: "quantite_depose_papier",cellStyle: {textAlign:"center",color:'rgb(255, 173, 13)'}},
      { headerName: "Quantité deposé canette", field: "quantite_depose_canette",cellStyle: {textAlign:"center",color:'rgb(249, 49, 84)'}},
      { headerName: "Quantité deposé composte", field: "quantite_depose_composte",cellStyle: {textAlign:"center",color:  'rgb(0, 183, 74)'}},
    ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center">Depôts</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}