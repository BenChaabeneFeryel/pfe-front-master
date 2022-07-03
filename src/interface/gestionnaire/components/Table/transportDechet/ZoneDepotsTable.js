 import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

const show=[
  ["ID","id"],
  ["Adresse","adresse"],
  ["Longitude","longitude"],
  ["Latitude","latitude"],
  ["Quantité depôt maximale","quantite_depot_maximale"],
  ["Quantité depôt actuelle plastique","quantite_depot_actuelle_plastique"],
  ["Quantité depôt actuelle papier","quantite_depot_actuelle_papier"],
  ["Quantité depôt actuelle composte","quantite_depot_actuelle_composte"],
  ["Quantité depôt actuelle canette","quantite_depot_actuelle_canette"],
];

export default function ZoneDepotsTable() {
  const initialValue = { adresse:"" ,longitude:"" ,latitude:"", quantite_depot_maximale:"",quantite_depot_actuelle_plastique:"",
  quantite_depot_actuelle_papier:"",quantite_depot_actuelle_composte:"",quantite_depot_actuelle_canette:"",created_at:"", updated_at:"",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/zone-depot`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Adresse", field: "adresse"},
    { headerName: "Longitude", field: "longitude"},
    { headerName: "Latitude", field: "latitude"},
    { headerName: "Quantité depôt maximale", field: "quantite_depot_maximale"},
    { headerName: "Quantité depôt actuelle plastique", field: "quantite_depot_actuelle_plastique",cellStyle: {textAlign:"center",color: 'rgb(18, 102, 241)'}},
    { headerName: "Quantité depôt actuelle papier", field: "quantite_depot_actuelle_papier",cellStyle: {textAlign:"center",color:'rgb(255, 173, 13)'}},
    { headerName: "Quantité depôt actuelle canette", field: "quantite_depot_actuelle_canette",cellStyle: {textAlign:"center",color:'rgb(249, 49, 84)'}},
    { headerName: "Quantité depôt actuelle composte", field: "quantite_depot_actuelle_composte",cellStyle: {textAlign:"center",color:  'rgb(0, 183, 74)'}},
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center">Zones de Depôt</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}