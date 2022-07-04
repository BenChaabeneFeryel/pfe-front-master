import React ,{useEffect, useState} from 'react'
import { Grid, Typography , Paper ,Button} from '@mui/material'
import { styled } from '@mui/material/styles';
import TopTablePanneCamion from './TopTablePanneCamion';
import Top3 from '../../../../../Global/images/top3.PNG'
import ChartImg from '../../../../../Global/images/chart.png'
import TopTablePannePoubelle from './TopTablePannePoubelle';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import  ChartPanne  from './ChartPanne';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import '../../../css/panne.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p:  1}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export const Item = styled(Paper)(({ theme }) => 
  (
    {
      backgroundColor: theme.palette.mode === 'dark' ? "#000" : "#FFF",
      border: ' #FFF solid 3px',
      ...theme.typography.body2,
      padding: theme.spacing(2),
      margin: theme.spacing(0.5),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }
  )
);

export  function Right({tableData ,type}){

  const [value1, setValue1] = React.useState(0);
  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };

  return(
    <div>     
      <Box >
        <Grid container spacing={3}>
          <Grid item xs>
            <Tabs value={value1} onChange={handleChange1} aria-label="basic tabs example">
              <Tab label={<img src={ChartImg} alt="Chart" width="30px"/>} {...a11yProps(0)} sx={{textTransform:"capitalize"}}/>
              <Tab label={<img src={Top3} alt="top3" width="30px"/>} {...a11yProps(1)} sx={{textTransform:"capitalize"}}/>
            </Tabs>
          </Grid>
        </Grid>
      </Box>
        {(type==="camion")?
          <>
            <TabPanel value={value1} index={0}>
              <ChartPanne url='http://127.0.0.1:8000/api/pannes-camion-mois' labelNbr='Nombre panne camion'
               labelCout='Cout panne camion' titre="Nombre des pannes totales par mois/année"/>         
            </TabPanel>
            <TabPanel value={value1} index={1}>
              <Typography sx={{color:"green"}}> Filtrage des pannes des camions selon durée et coût :</Typography>
                <TopTablePanneCamion  tableData={tableData}/> 
                <Link to="/gestionnaire/pannes-camions">
                  <Button variant="contained" sx={{marginLeft:"20px"}} color="primary">Plus d'informations<ArrowRightAltIcon/></Button>
                </Link>  
            </TabPanel>
          </>:
          <>
            <TabPanel value={value1} index={0}>
              <ChartPanne url='http://127.0.0.1:8000/api/pannes-poubelle-mois' labelNbr='Nombre panne poubelle'
               labelCout='Cout panne poubelle' titre="Nombre des pannes totales par mois/année"/>         
            </TabPanel>
            <TabPanel value={value1} index={1}>
              <Typography sx={{color:"green"}}> Filtrage des pannes des poubelles selon durée et coût :</Typography>
              <TopTablePannePoubelle  tableData={tableData}/> 
              <Link to="/gestionnaire/pannes-poubelles">
                <Button  variant="contained" sx={{marginLeft:"20px"}}  color="primary">Plus d'informations <ArrowRightAltIcon/></Button>
              </Link>  
            </TabPanel>
          </>
        }
    </div>
  );
}

export default function Pannes() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  const [tableData, setTableData] = useState(null)
  const getData = () => {

  fetch("http://127.0.0.1:8000/api/pannes-dashboard", requestOptions)
    .then(response => response.json())
    .then(result => setTableData(result))
    .catch(error => console.log('error', error));

  }
  useEffect(() => {
    getData()
  }, [])

  if(tableData!==null){
    return (
      <>    
        <div className="card-panne4">
          <Item>
            <Typography variant='h6' sx={{color:"green"}}> Coût total des pannes : </Typography> 
            <Typography sx={{fontSize:"15px"}}>{tableData.cout_total_panne} Dinars</Typography>
          </Item>
          <Item>
            <Typography variant='h6' sx={{color:"green"}}> Durée totale des pannes : </Typography>
            <Typography sx={{fontSize:"15px"}}>{tableData.duree_total_panne} Heures</Typography>
          </Item>
          <Item> 
            <Typography variant='h6' sx={{color:"green"}}>Nombre des pannes des poubelles<br/> </Typography>
            <Typography sx={{fontSize:"15px"}}>{tableData.nbr_panne_poubelle}</Typography>
          </Item>
          <Item> 
            <Typography variant='h6' sx={{color:"green"}}>Pourcentage<br/></Typography> 
            <Typography sx={{fontSize:"15px"}}>{tableData.pourcentage_panne_poubelle} %</Typography>
          </Item>
        </div>

        <Box>
          <Grid container spacing={3}>
            <Grid item xs>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Pannes Poubelles" {...a11yProps(0)} sx={{textTransform:"capitalize"}}/>
                <Tab label="Pannes Camions " {...a11yProps(1)} sx={{textTransform:"capitalize"}}/>
              </Tabs>
            </Grid>
          </Grid>
        </Box>
        <TabPanel value={value} index={0}>
          <div className='panne-container'>
            <div>
              <div className="card-panne5">
                <Item> 
                  <Typography variant='h6' sx={{color:"green"}}>Nombre des pannes<br/> </Typography>
                  <Typography sx={{fontSize:"15px"}}>{tableData.nbr_panne_poubelle}</Typography>
                </Item>
                <Item> 
                  <Typography variant='h6' sx={{color:"green"}}>Coût total<br/></Typography>
                  <Typography sx={{fontSize:"15px"}}>{tableData.cout_panne_poubelles} D</Typography>
                </Item>
                <Item> 
                  <Typography variant='h6' sx={{color:"green"}}>Coût moyen<br/></Typography>
                  <Typography sx={{fontSize:"15px"}}>{tableData.moy_cout_panne_poubelles} D</Typography>
                </Item>
                <Item> 
                  <Typography variant='h6' sx={{color:"green"}}>Durée totale<br/></Typography>
                  <Typography sx={{fontSize:"15px"}}>{tableData.sum_duree_poubelles} Jours</Typography>
                </Item>
                <Item> 
                  <Typography variant='h6' sx={{color:"green"}}>Durée moyenne <br/></Typography>
                  <Typography sx={{fontSize:"15px"}}>{tableData.moy_duree_poubelles} Jours</Typography>
                </Item>
              </div>
              <div className='card-panne'>
                <Item>
                  <ChartPanne url='http://127.0.0.1:8000/api/pannes-poubelle-mois' labelNbr='Nombre panne poubelle'
                    labelCout='Cout panne poubelle' titre="Nombre des pannes totales par mois/année"/>  
                </Item>
                <Item>   
                  <Typography sx={{color:"green"}}> Filtrage des pannes des poubelles selon durée et coût :</Typography>
                  <TopTablePannePoubelle  tableData={tableData}/> 
                  <Link to="/gestionnaire/pannes-poubelles">
                    <Button  variant="contained" sx={{marginLeft:"20px"}}  color="primary">Plus d'informations <ArrowRightAltIcon/></Button>
                  </Link>  
                </Item> 
              </div>
            </div>  
          </div>
        </TabPanel>
                
        <TabPanel value={value} index={1}>
          <div className='panne-container'>
            <div>
            <div className="card-panne5">
                <Item> 
                  <Typography variant='h6' sx={{color:"green"}}>Nombre des pannes<br/> </Typography>
                  {tableData.nbr_panne_camion}
                </Item>
                <Item> 
                  <Typography variant='h6' sx={{color:"green"}}>Coût total<br/></Typography>
                  {tableData.cout_panne_camions} D
                </Item>
                <Item> 
                  <Typography variant='h6' sx={{color:"green"}}>Coût moyen<br/></Typography>
                  {tableData.moy_cout_panne_camions} D
                </Item>
                <Item> 
                  <Typography variant='h6' sx={{color:"green"}}>Durée totale<br/></Typography>
                  {tableData.sum_duree_camion} Jours
                </Item>
                <Item> 
                  <Typography variant='h6' sx={{color:"green"}}>Durée moyenne <br/></Typography>
                  {tableData.moy_duree_camion} Jours
                </Item>
              </div>

              <div className='card-panne'>
                <Item>
                  <ChartPanne url='http://127.0.0.1:8000/api/pannes-camion-mois' labelNbr='Nombre panne camion'
                    labelCout='Cout panne camion' titre="Nombre des pannes totales par mois/année"/>    
                </Item>
                <Item>
                  <Typography sx={{color:"green"}}> Filtrage des pannes des camions selon durée et coût :</Typography>
                  <TopTablePanneCamion  tableData={tableData}/> 
                  <Link to="/gestionnaire/pannes-camions">
                    <Button variant="contained" sx={{marginLeft:"20px"}} color="primary">Plus d'informations<ArrowRightAltIcon/></Button>
                  </Link> 
                </Item> 
              </div>
            </div>  
          </div>
        </TabPanel> 
      </>
    )
  }else{
    return (
     <>Vide</>
    );
  };
}
