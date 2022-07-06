import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

const show=[
  ["ID","id"],
  ["ID Camion","camion_id"],
  ["ID Mécanicien","mecanicien_id"],
  ["Description","description_panne"],
  ["Coût","cout"],
  ["Date début réparation","date_debut_reparation"],
  ["Date fin réparation","date_fin_reparation"],
];

export default function ReparationCamionTable() {
  const initialValue = { camion_id:"", id_mecanicien:"", description_panne:"", cout:"",date_debut_reparation:"",date_fin_reparation:"",created_at:"" ,error_list:[]};    
  const url = `http://127.0.0.1:8000/api/reparation-camion`

  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "ID Camion", field: "camion_id"},
    { headerName: "ID Mécanicien", field: "mecanicien_id"},
    { headerName: "Description", field: "description_panne" },
    { headerName: "Coût", field: "cout" },
    { headerName: "Date début réparation", field: "date_debut_reparation"},
    { headerName: "Date fin réparation", field: "date_fin_reparation"},
  ]

    return (
      <div style={{width:"100%"}}>
        <h2 align="center">Réparations de Camions</h2>
        <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
      </div>
    );
  }
      










