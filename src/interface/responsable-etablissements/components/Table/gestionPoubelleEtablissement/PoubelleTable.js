import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
import styled from 'styled-components'

const ProgressStyle = styled.div`
	background-color: #d8d8d8;
	position: relative;
	margin: 15px 0;
	height: 30px;
	width: 100%;
`
const ProgressDone = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
  padding-left: 10px ;
	height: 100%;
	width: 0;
	opacity: 0;
	transition: 1s ease 0.3s;
`
const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	const [color, setColor] = React.useState("");
	const [colorNumber, setColorNumber] = React.useState("");
	
	setTimeout(() => {
    if(done< 25){
      setColor("green")
      setColorNumber("black")
    }else if (done>=25 && done<50){
      setColor("yellow")
      setColorNumber("black")
    }else if (done>=50 && done<75){
      setColor("orange")
      setColorNumber("black")
    }else if (done>=75 && done<100){
      setColor("red")
      setColorNumber("black")
    }
		const newStyle = {
			opacity: 1,
			width: `${done}%`,
      backgroundColor:`${color}`,
      boxShadow: `0 1px 1px -2px ${color}, 0 1px 2px ${color}`,
      color: `${colorNumber}` 
		}
		
		setStyle(newStyle);
	}, 100);
	
	return (
		<ProgressStyle>
			<ProgressDone style={style}>
         {done}%
			</ProgressDone>
		</ProgressStyle>
	)
}
const show=[
  ["ID","id"],
  ["ID Bloc Poubelle","bloc_poubelle_id"],
  ["Bloc d'établissement","nom_bloc"],
  ["Etage d'établissement","nom_etage"],
  ["Poubelle","nom"],
  ["Type","type"],
  ["Etat Actuel","Etat"],
  ["Temps de remplissage","temps_remplissage"],
  ["Date de création","created_at"],
  ["Date de mise à jour","updated_at"],
];    

export default function PoubelleTable() {

  const initialValue = { nom_bloc:"", nom_etage:"", bloc_poubelle_id:"", nom:"", type:"", Etat:"", temps_remplissage:"", 
  created_at:"", updated_at:"", error_list:[]}
  
  const url = `http://127.0.0.1:8000/api/auth-responsable-etablissement/poubelle-responsable`
  
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:70, minWidth:50, pinned: 'left' },
    { headerName: "Bloc d'établissement", field: "nom_bloc", maxWidth:400, minWidth:150},
    { headerName: "Etage", field: "nom_etage", maxWidth:300, minWidth:100},
    { headerName: "Bloc poubelle", field: "bloc_poubelle_id", maxWidth:300, minWidth:150},
    { headerName: "Poubelle", field: "nom", maxWidth:300, minWidth:150},
    { headerName: "Type", field: "type" , maxWidth:300, minWidth:100},
    { headerName: "Etat de remplissage", field: "Etat", maxWidth:200, minWidth:200, cellRenderer: (params) =>
    <Progress done={`${params.data.Etat}`} />, maxWidth:300, minWidth:100},
    { headerName: "Temps de remplissage", field: "temps_remplissage", type: ['dateColumn', 'nonEditableColumn'], minWidth: 200}
  ]
 
  return (
    <div style={{width:"100%"}}>
      <h2 align="center">Poubelles</h2>
      <Api url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}        

 













