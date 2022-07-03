import React from 'react'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles';
import CirculairePourcentage from '../../../../Global/CirculairePourcentage/CirculairePourcentage';
import { Box } from '@mui/material';

export default function CardGlobalDechet({color,color2,color3,type_dechet_nombre, type,quantite_dechets ,nbr_poubelle,
    pourcentage_qt_poubelle, image, somme_qt_dechet}) {

    const BoxCard = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? color3:  color,
        borderRadius:"10px", 
        textAlign:"center", 
        padding:"10px", 
        color:'white',
        margin:"3px 0px",
    }));
    
  return (
    <div className="card-dashboard" style={{borderLeft:`8px solid ${color}`}}>
        <div className="flip-card" style={{width:"100%", height:'330px'}}>
            <div>
                <div className="flip-card-front" style={{padding:"5px"}}>
                    <Typography variant='h6' sx={{textAlign:'center', color:{color}, fontFamily:"Fredoka"}}>
                        {type}
                    </Typography>
                    <div className='container3'>
                        <BoxCard > 
                            <Typography variant='h6' >{nbr_poubelle}</Typography>  
                            <Typography variant='body2'sx={{fontSize:"14px"}}>Nombre de poubelles</Typography>
                        </BoxCard>  
                        <BoxCard>
                            <Typography variant='h6'>{quantite_dechets} KG</Typography>  
                            <Typography variant='body2' sx={{fontSize:"14px"}}>Quantité totale collecté</Typography>
                        </BoxCard>
                        <BoxCard>
                            <Typography variant='h6' >{somme_qt_dechet}KG</Typography>  
                            <Typography variant='body2' sx={{fontSize:"14px"}}>Quantité totale actuelle</Typography>
                        </BoxCard>
                    </div>
                    <div className='container1'>                       
                        <BoxCard className='container_taux'>
                            <CirculairePourcentage percentage={pourcentage_qt_poubelle} image={image} color={color2}/>
                            <Typography className='body_taux' variant='body2' sx={{fontSize:"17px"}}>Taux de remplissage des poubelles</Typography>
                        </BoxCard>                                                    
                    </div>
                
                </div>
            </div>
        </div>
    </div>
  )
}
