import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

const show=[
  ["ID","id"],
  ["ID Zone","zone_travail_id"],
  ["Matricule","matricule"],
  ["Volume actuelle plastique","volume_actuelle_plastique"],
  ["Volume actuelle papier","volume_actuelle_papier"],
  ["Volume actuelle composte","volume_actuelle_composte"],
  ["Volume actuelle canette","volume_actuelle_canette"],
  ["Heure de sortie","heure_sortie"],
  ["Heure d'entrée","heure_entree"],
  ["Kilométrage","Kilometrage"],
];

export default function CamionsTable() {
  const initialValue = { zone_travail_id:"", matricule:"", longitude:"", latitude:"", heure_sortie:"", heure_entree:"",
  volume_maximale_poubelle:"", volume_actuelle_plastique:"", volume_actuelle_papier:"", volume_actuelle_composte:"",
  volume_actuelle_canette:"", Kilometrage:"", created_at:"", updated_at:"", error_list:[]};    
   
  const url = `http://127.0.0.1:8000/api/camion`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "ID Zone", field: "zone_travail_id", maxWidth:180, minWidth:100},
    { headerName: "Matricule", field: "matricule", maxWidth:180, minWidth:100},
    { headerName: "Volume actuelle plastique", field: "volume_actuelle_plastique", maxWidth:180, minWidth:100,cellStyle: {textAlign:"center",color: 'rgb(18, 102, 241)' }},
    { headerName: "Volume actuelle papier", field: "volume_actuelle_papier", maxWidth:180, minWidth:100,cellStyle: {textAlign:"center",color:'rgb(255, 173, 13)'}},
    { headerName: "Volume actuelle composte", field: "volume_actuelle_composte", maxWidth:180, minWidth:100,cellStyle: {textAlign:"center",color:  'rgb(0, 183, 74)'}},
    { headerName: "Volume actuelle canette", field: "volume_actuelle_canette", maxWidth:180, minWidth:100,cellStyle: {textAlign:"center",color:'rgb(249, 49, 84)'}},
    { headerName: "Heure de sortie", field: "heure_sortie", maxWidth:180, minWidth:100},
    { headerName: "Heure d'entrée", field: "heure_entree", maxWidth:180, minWidth:100},
    { headerName: "Kilométrage (en Km)", field: "Kilometrage", maxWidth:180, minWidth:100}
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center">Camions</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}
 