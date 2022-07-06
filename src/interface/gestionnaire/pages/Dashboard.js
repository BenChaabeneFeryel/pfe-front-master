import React from 'react';
import MapRegion from './mapRegion'
import ChartVendsMois from "../components/Dashboard/Gestion Dechets/ventes/ChartVendusMois";
import DechetsTotalesVendus from "../components/Dashboard/Gestion Dechets/ventes/DechetsTotalesVendus";
import TotalDechetCollectéMois from "../components/Dashboard/TotalDechetCollect+®Mois";
import DechetCollecteDepot from "../components/Dashboard/Gestion Dechets/collectes/DechetCollecteDepot"
import '../css/Dashboard.css'
import {Typography , Paper} from '@mui/material'
import { styled } from '@mui/material/styles';
import Pannes from '../components/Dashboard/Gestion pannes/Pannes';
import GlobalStatistiques from '../components/Dashboard/GlobalStatistiques';
import Planning from '../../responsable-etablissements/components/DashboardResponsable/Planning';

export const Item = styled(Paper)(({ theme }) => 
  (
    {
      backgroundColor: theme.palette.mode === 'dark' ?  '#000':'#f0f0f0',
      border:' 2px solid #f0f0f0',
      ...theme.typography.body2,
      padding: theme.spacing(2),
      margin: theme.spacing(2),
      color: theme.palette.text.secondary,
    }
  )
);
const Dashboard = () => {
    return (
      <div className="container_dashboard">
        <Typography variant='h3' sx={{color:"green"}}>Tableau de bord</Typography>
        <Typography variant='h6' sx={{color:"gray"}}>
          Bonjour, <b style={{color:"green"}}> {localStorage.getItem("auth_nom")} {localStorage.getItem("auth_prenom")}. </b> 
          Bienvenue dans votre tableau de bord.
        </Typography>
          
        <div > 
          <div>
            <Item>
              <Typography variant='h5' color="primary" sx={{fontWeight:"600", fontFamily:"Fredoka"}}>
                Statistiques générales 
              </Typography>
              <br/>
              <GlobalStatistiques/>                
            </Item>
            <div style={{display:'grid', gridTemplateColumns:"50% 50%"}}>
              <Item>
                <Typography variant='h5' color="primary" sx={{fontWeight:"600", fontFamily:"Fredoka"}}>
                  Gestion de ventes des déchets
                </Typography>
                <br/>
                <DechetsTotalesVendus/>
                <ChartVendsMois/>                               
              </Item>           
                
              <Item>
                <Typography variant='h5' color="primary" sx={{fontWeight:"600", fontFamily:"Fredoka"}}>
                  Gestion des déchets collectés
                </Typography>
                <br/>
                <DechetCollecteDepot/>
                <TotalDechetCollectéMois/> 
              </Item>          
            </div>            
          </div>  

          <div>
            <Item>
              <Typography variant='h5' color="primary" sx={{fontWeight:"600", fontFamily:"Fredoka"}}>
                Gestion des pannes
              </Typography>  
              <br/>                    
              <Pannes/>
            </Item>
          </div>

          <div>
            <Item>
              <Typography variant='h5' color="primary" sx={{fontWeight:"600", fontFamily:"Fredoka"}}>
                Gestion des poubelles des établissements
              </Typography>
              <br/>
              <MapRegion sx={{margin: "0 auto"}}/>
              <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>
            </Item>
          </div>
        </div>  
      </div>
    );
  };
  
export default Dashboard;