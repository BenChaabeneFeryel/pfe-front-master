import React, { useState,   useCallback, useEffect , useRef} from 'react';
import MaterialTable from 'material-table';
import {tableIcons ,localization} from './style'
import styled from 'styled-components'

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
      setColorNumber("white")
    }else if (done>=75 && done<100){
      setColor("red")
      setColorNumber("white")
    }
		const newStyle = {
			opacity: 1,
			width: `${done}%`,
            backgroundColor:`${color}`,
            boxShadow: `0 3px 3px -5px ${color}, 0 2px 5px ${color}`,
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
  padding-left:10px ;
	height: 100%;
	width: 0;
	opacity: 0;
	transition: 1s ease 0.3s;
`


export default function GroupMuiTable() {
    const [tableZone, setTableZone] =  useState([]);
    const url = `http://127.0.0.1:8000/api/region-map`
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        fetch(url).then(resp => resp.json()).then(resp => {setTableZone(resp);  })
    }
    if(tableZone!==null){
        return (
            <div className='Group-table'>
                <MaterialTable icons={tableIcons}  title="Details  par zone travail"  localization={localization} data={tableZone}
                    columns={[
                        { title: 'ID', field: 'id' },
                        { title: 'R??gion', field: 'region' ,type:'string'},
                        { title: 'Quantit?? totale collect??e plastique', field: 'quantite_total_collecte_plastique' ,cellStyle: {color: 'rgb(18, 102, 241)'}},
                        { title: 'Quantit?? totale collect??e papier', field: 'quantite_total_collecte_papier',cellStyle: {color:'rgb(255, 173, 13)'} },
                        { title: 'Quantit?? totale collect??e canette', field: 'quantite_total_collecte_canette',cellStyle: {color:'rgb(249, 49, 84)'}}, 
                        { title: 'Quantit?? totale collect??e composte', field: 'quantite_total_collecte_composte',cellStyle: {color:  'rgb(0, 183, 74)' }}, 
                        { title: 'created_at', field: 'created_at', type: 'date' }, 
                        { title: 'updated_at', field: 'updated_at', type: 'date' }, 
                    ]}
                    detailPanel={rowData => {
                        return (
                            <div style={{margin:'10px',maxWidth:"1350px"}}>
                                <MaterialTable icons={tableIcons}  title="D??tails des ??tablissements" localization={localization} data={rowData.etablissements}
                                    columns={[
                                        { title: 'ID', field: 'id' },
                                        { title: 'Nom', field: 'nom_etablissement', type: 'string'  },
                                        { title: 'Type', field: 'type_etablissement', type: 'string'  },
                                        { title: 'Nombre personnes', field: 'nbr_personnes'}, 
                                        { title: 'Adresse', field: 'adresse', type: 'string' }, 
                                        { title: 'Longitude', field: 'longitude'}, 
                                        { title: 'Latitude', field: 'latitude'}, 
                                        { title: 'Quantit?? d??chets plastique', field: 'quantite_dechets_plastique',cellStyle: {color: 'rgb(18, 102, 241)'}}, 
                                        { title: 'Quantit?? d??chets papier', field: 'quantite_dechets_papier' ,cellStyle: {color:'rgb(255, 173, 13)'}}, 
                                        { title: 'Quantit?? d??chets canette', field: 'quantite_dechets_canette',cellStyle: {color:'rgb(249, 49, 84)'}}, 
                                        { title: 'Quantit?? d??chets composte', field: 'quantite_dechets_composte',cellStyle: {color:  'rgb(0, 183, 74)'} }, 
                                        { title: 'Cr???? le', field: 'created_at', type: 'date' }, 
                                        { title: 'Modifi?? le', field: 'updated_at', type: 'date' }, 
                                    ]}
                                    detailPanel={rowData => {
                                        return (
                                            <div style={{margin:'10px',maxWidth:"1350px"}}>
                                                <MaterialTable icons={tableIcons}  title="D??tails Blocs Etablissements" localization={localization}  data={rowData.bloc_etablissements}
                                                    columns={[
                                                        { title: 'ID', field: 'id' },
                                                        { title: 'Bloc Etablissement', field: 'nom_bloc_etablissement' },                                                           
                                                        { title: 'Cr???? le', field: 'created_at', type: 'date' }, 
                                                        { title: 'Modifi?? le', field: 'updated_at', type: 'date' }, 
                                                    ]}
                                                    detailPanel={rowData => {
                                                        return (
                                                            <div style={{margin:'10px',maxWidth:"1350px"}}>
                                                                <MaterialTable   icons={tableIcons}  title="D??tails Etages Etablissements" localization={localization} data={rowData.etage_etablissements}
                                                                    columns={[
                                                                       { title: 'ID', field: 'id' },
                                                                       { title: 'Etages', field: 'nom_etage_etablissement' },                                                           
                                                                       { title: 'Cr???? le', field: 'created_at', type: 'date' }, 
                                                                       { title: 'Modifi?? le', field: 'updated_at', type: 'date' }, 
                                                                    ]}
                                                                    detailPanel={rowData => {
                                                                        return (
                                                                            <div style={{margin:'10px',maxWidth:"1350px"}}>
                                                                                <MaterialTable  icons={tableIcons}  title="D??tails Bloc Poubelles"  localization={localization}  data={rowData.bloc_poubelles}
                                                                                    columns={[
                                                                                        { title: 'ID', field: 'id' },
                                                                                        { title: 'Cr???? le', field: 'created_at', type: 'date' }, 
                                                                                        { title: 'Modifi?? le', field: 'updated_at', type: 'date' }, 
                                                                                    ]}
                                                                                    detailPanel={rowData => {
                                                                                        return (
                                                                                            <div style={{margin:'10px',maxWidth:"1350px"}}>
                                                                                                <MaterialTable icons={tableIcons}  title="D??tails poubelles" localization={localization}  data={rowData.poubelles}
                                                                                                    columns={[
                                                                                                        { title: 'ID', field: 'id' },
                                                                                                        { title: 'Poubelle', field: 'nom' },
                                                                                                        { title: 'Type', field: 'type' },                                                                                                                                                                                                           
                                                                                                        { title: 'Etat', field: 'Etat' ,render: rowData => <Progress done={`${rowData.Etat}`} />,  
                                                                                                            cellStyle: { width:"150px"}
                                                                                                        },                                                           
                                                                                                        { title: 'Temps remplissage', field: 'temps_remplissage' },                                                           
                                                                                                        { title: 'Cr???? le', field: 'created_at', type: 'date' }, 
                                                                                                        { title: 'Modifi?? le', field: 'updated_at', type: 'date' }, 
                                                                                                    ]}
                                                                                                    onRowClick={(event, rowData, togglePanel) => togglePanel()}/>
                                                                                            </div>
                                                                                        )
                                                                                    }}
                                                                                    onRowClick={(event, rowData, togglePanel) => togglePanel()}  />
                                                                            </div>
                                                                        )
                                                                    }}
                                                                    onRowClick={(event, rowData, togglePanel) => togglePanel()}  />
                                                            </div>
                                                        )
                                                    }}
                                                    onRowClick={(event, rowData, togglePanel) => togglePanel()} />
                                            </div>
                                        )
                                    }}
                                    onRowClick={(event, rowData, togglePanel) => togglePanel()} />
                            </div>
                        )
                    }}
                    onRowClick={(event, rowData, togglePanel) => togglePanel()} />
            </div>
        )
    }else {
        return "vide"
    }
  }
  
