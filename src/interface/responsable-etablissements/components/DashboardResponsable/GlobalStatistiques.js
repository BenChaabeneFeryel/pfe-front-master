import React, { useState, useEffect } from 'react'
import { FaTrashAlt,FaBuilding ,FaTrash } from "react-icons/fa";
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import {RiBuildingLine} from "react-icons/ri"
import EtageImg from '../../../../Global/images/etage.svg'
import PlastiqueDechet from '../../../../Global/images/plastique.PNG'
import PapierDechet from '../../../../Global/images/papier.PNG'
import CanetteDechet from '../../../../Global/images/canette.PNG'
import ComposteDechet from '../../../../Global/images/composte.PNG'
import ApartmentIcon from '@mui/icons-material/Apartment';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography'
import { Box, Skeleton } from '@mui/material';
import CardGlobalDechet from './CardGlobalDechet';
import '../../assets/css/GlobalStatistiques.css'

export const BoxCard = styled(Box)(({ theme }) => 
  (
    {
        backgroundColor: theme.palette.mode === 'dark' ? '#4B7BE5': "rgb(18, 102, 241)",
        borderRadius:"10px", 
        textAlign:"center", 
        padding:"10px", 
        color:'white',
        margin:"3px 0px",
    }
  )
);

const CardStatistique =( {data , nom ,icon})=>{
 return (
    <div>
        <div style={{display:"flex" , justifyContent:"center"}}>   
            {icon}
            <Typography variant='h5' sx={{fontSize:"35px", fontWeight:"400", fontFamily:"Fredoka"}} >
                {data}
            </Typography>  
        </div>
        <Typography variant='p' sx={{fontSize:"16px", fontWeight:"500", fontFamily:"Fredoka"}} >
            {nom}
        </Typography>
    </div>
 )
}

export default function GlobalStatistiques() {
    const [data, setData] = useState(null)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token_responsable')}`);
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    const getData = () => {
      fetch("http://127.0.0.1:8000/api/auth-responsable-etablissement/dashboard-etablissement", requestOptions)
        .then(response => response.json())
        .then(result => setData(result))
        .catch(error => console.log('error', error));
    
    }
    useEffect(() => {
        getData()
    }, [])
    
    if(data!==null){
    return (
        <div>
            <div className="card-container4">
               <CardGlobalDechet color='rgb(78, 102, 241)' color2='rgb(120, 197, 255)' color3={'#4B7BE5'} type_dechet_nombre= 'Bouteilles plastique'
                    type="Plastique" nbr_poubelle={data[0].poubelle_plastique} quantite_dechets={data[0].quantite_dechets_plastique}
                    pourcentage_qt_poubelle={data[1].pourcentage_qt_poubelle_plastique} image={PlastiqueDechet} somme_qt_dechet={data[1].somme_qt_dechet_plastique} 
                    compteur_somme_poubelle={data[1].compteur_somme_poubelle_plastique}  min_qt_poubelle={data[1].min_qt_poubelle_plastique} 
                    max_qt_poubelle={data[1].max_qt_poubelle_plastique} compteur_max_poubelle={data[1].compteur_max_poubelle_plastique} 
                    compteur_min_poubelle={data[1].compteur_min_poubelle_plastique} compteur_moy_poubelle={data[1].compteur_moy_poubelle_plastique}              
               />

               <CardGlobalDechet color='rgb(245, 173, 13)' color2='#FFCD38' color3='#FF8D29' type_dechet_nombre= 'papier'
                    type="Papier"  nbr_poubelle={data[0].poubelle_papier} quantite_dechets={data[0].quantite_dechets_papier}
                    pourcentage_qt_poubelle={data[1].pourcentage_qt_poubelle_papier} image={PapierDechet} somme_qt_dechet={data[1].somme_qt_dechet_papier} 
                    compteur_somme_poubelle={data[1].compteur_somme_poubelle_papier}  min_qt_poubelle={data[1].min_qt_poubelle_papier} 
                    max_qt_poubelle={data[1].max_qt_poubelle_papier} compteur_max_poubelle={data[1].compteur_max_poubelle_papier} 
                    compteur_min_poubelle={data[1].compteur_min_poubelle_papier} compteur_moy_poubelle={data[1].compteur_moy_poubelle_papier}              
                />

                <CardGlobalDechet color='rgb(229, 49, 84)' color2='#FF9999' color3='#F24C4C' type_dechet_nombre= 'canette'
                    type="Canette"  nbr_poubelle={data[0].poubelle_canette} quantite_dechets={data[0].quantite_dechets_canette}
                    pourcentage_qt_poubelle={data[1].pourcentage_qt_poubelle_canette} image={CanetteDechet} somme_qt_dechet={data[1].somme_qt_dechet_canette} 
                    compteur_somme_poubelle={data[1].compteur_somme_poubelle_canette}  min_qt_poubelle={data[1].min_qt_poubelle_canette} 
                    max_qt_poubelle={data[1].max_qt_poubelle_canette} compteur_max_poubelle={data[1].compteur_max_poubelle_canette} 
                    compteur_min_poubelle={data[1].compteur_min_poubelle_canette} compteur_moy_poubelle={data[1].compteur_moy_poubelle_canette}              
                />
          
                <CardGlobalDechet color='rgb(0, 153, 74)' color2='#6ECB63' color3=' #3E7C17' type_dechet_nombre= 'composte'
                    type="Composte"  nbr_poubelle={data[0].poubelle_composte} quantite_dechets={data[0].quantite_dechets_composte}
                    pourcentage_qt_poubelle={data[1].pourcentage_qt_poubelle_composte} image={ComposteDechet} somme_qt_dechet={data[1].somme_qt_dechet_composte} 
                    compteur_somme_poubelle={data[1].compteur_somme_poubelle_composte}  min_qt_poubelle={data[1].min_qt_poubelle_composte} 
                    max_qt_poubelle={data[1].max_qt_poubelle_composte} compteur_max_poubelle={data[1].compteur_max_poubelle_composte} 
                    compteur_min_poubelle={data[1].compteur_min_poubelle_composte} compteur_moy_poubelle={data[1].compteur_moy_poubelle_composte}              
                />
     
            </div>

            <br/>
            <Typography variant='h5' sx={{fontWeight:"600", fontFamily:"Fredoka", marginBottom:"20px"}}>
                Données de mon établissement
            </Typography>
            <div className="card-dashboard" >
                
                <div className='container-stat'>

                    <CardStatistique data={data[0].nbr_personnes} nom='Personnes'
                        icon={ <ApartmentIcon className='card-icon' style={{fontSize:"50px", color:'gray'}}/>}/>

                    <CardStatistique data={data[0].bloc_etablissements_count} nom="Blocs d'établissement"
                        icon={ <FaBuilding className='card-icon' style={{width:"30px",color:'gray'}}/>}/>

                    <CardStatistique data={data[0].etage_etablissements_count} nom="Etage d'établissement"
                        icon={ <RiBuildingLine className='card-icon' style={{width:"40px",color:'gray'}}/>}/>

                    <CardStatistique data={data[0].bloc_poubelles_count} nom='Bloc de Poubelles'
                        icon={ <FaTrashAlt className='card-icon' style={{width:"30px",color:'gray'}}/>}/>

                    <CardStatistique data={data[0].bloc_poubelles_count*4} nom='Total des Poubelles'
                        icon={ <FaTrash className='card-icon' style={{width:"30px",color:'gray'}}/>}/>

                </div>
            </div>
        </div>
    )
    }else{
        return (
            <>     
                <div className='card-container4' >
                    <Skeleton variant="rectangular"  height={320}/>
                    <Skeleton variant="rectangular"  height={320}/>
                    <Skeleton variant="rectangular"  height={320}/>
                    <Skeleton variant="rectangular"  height={320}/>
                </div>
            </>
        );
    };
}
