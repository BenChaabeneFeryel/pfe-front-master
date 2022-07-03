import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

const show=[
  ["ID","id"],
  ["ID Zone","zone_travail_id"],
  ["ID Responsable","responsable_etablissement_id"],
  ["etablissement","etablissement_id"],
  ["Nom","nom_etablissement"],
  ["Nombre personnes","nbr_personnes"],
  ["Adresse","adresse"],
  ["Longitude","longitude"],
  ["Latitude","latitude"],
  ["Quantité déchets plastique","quantite_dechets_plastique"],
  ["Quantité déchets composte","quantite_dechets_composte"],
  ["Quantité déchets papier","quantite_dechets_papier"],
  ["Quantité déchets canette","quantite_dechets_canette"],
];

export default function EtablissementTable() {
  const initialValue = { zone_travail_id:"",responsable_etablissement_id:"",nom_etablissement:"", nbr_personnes:"",adresse:"",longitude:"",latitude:""
 ,quantite_dechets_plastique:"",quantite_dechets_composte:"",quantite_dechets_papier:"",quantite_dechets_canette:"",created_at:"", updated_at:"",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/etablissement`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "ID Zone", field: "zone_travail_id", maxWidth: 110, minWidth:100 },
    { headerName: "ID Responsable", field: "responsable_etablissement_id", maxWidth: 110, minWidth:100 },
    { headerName: "Nom", field: "nom_etablissement", maxWidth: 145, minWidth:120 },
    { headerName: "Nombre personnes", field: "nbr_personnes", maxWidth: 145, minWidth:120  },
    { headerName: "Adresse", field: "adresse" , maxWidth: 145, minWidth:120 },
    { headerName: "Longitude", field: "longitude", maxWidth: 145, minWidth:120  },
    { headerName: "Latitude", field: "latitude", maxWidth: 145, minWidth:120 },
    { headerName: "Quantité déchets plastique", field: "quantite_dechets_plastique", maxWidth: 145, minWidth:120  },
    { headerName: "Quantité déchets composte", field: "quantite_dechets_composte" , maxWidth: 145, minWidth:120  },
    { headerName: "Quantité déchets papier", field: "quantite_dechets_papier", maxWidth: 145, minWidth:120  },
    { headerName: "Quantité déchets canette", field: "quantite_dechets_canette", maxWidth: 145, minWidth:120   },
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center">Etablissement</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}