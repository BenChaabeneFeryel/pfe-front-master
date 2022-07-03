import React from 'react';
import '../../../../../App.css';
import Api from '../../../../../Global/ComponentsTable/Api';

 const show=[
  ["ID","id"],
  ["Région","region"],
  ["Quantité total collecté plastique","quantite_total_collecte_plastique"],
  ["Quantité total collecté composte","quantite_total_collecte_composte"],
  ["Quantité total collecté papier","quantite_total_collecte_papier"],
  ["Quantité total collecté canette","quantite_total_collecte_canette"],
  ["Date de création","created_at"],
  ["Date de mise à jour","updated_at"],
];

export default function ZoneTravailTable() {
  const initialValue = { region: "", quantite_total_collecte_plastique: "" , quantite_total_collecte_composte: "",
    quantite_total_collecte_papier: "", quantite_total_collecte_canette: "", created_at: "", updated_at: "", error_list:[]};
  const url = `http://127.0.0.1:8000/api/zone-travail`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left'  },
    { headerName: "Région", field: "region", maxWidth:100, minWidth:50, },
    { headerName: "Quantité Plastique", field: "quantite_total_collecte_plastique" ,cellStyle: {textAlign:"center",color: 'rgb(18, 102, 241)', 'fontSize':"18px"}},
    { headerName: "Quantité Papier", field: "quantite_total_collecte_papier",cellStyle: {textAlign:"center",color:'rgb(255, 173, 13)', 'fontSize':"18px"}},
    { headerName: "Quantité Canette", field: "quantite_total_collecte_canette",cellStyle: {textAlign:"center",color:'rgb(249, 49, 84)', 'fontSize':"18px"}},
    { headerName: "Quantité Composte", field: "quantite_total_collecte_composte",cellStyle: {textAlign:"center",color:  'rgb(0, 183, 74)', 'fontSize':"18px"}},
  ]

  return (
    <div style={{width:"100%"}}>
        <h2 align="center">Zones de travail</h2>
        <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}


