import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Table, TableBody, TableHead, TableRow, TableCell, Chip } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import ErrorIcon from '@mui/icons-material/Error';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import BadgeIcon from './Planning/BadgeIcon';
import StyledRow from './Planning/StyledRow';

const useStyles = makeStyles({
  cellBorderRight: {
    borderRight: "1px solid gray"
  }
});

export default function Planning() {

  const classes = useStyles();

  return (
    <div>
      {/* <div style={{}}>
        <BadgeIcon color="green" icon={<DoneIcon/>} />
        <BadgeIcon color="#E67E22" icon={<HourglassBottomIcon/>} />
        <BadgeIcon color="#C0392B" icon={<ErrorIcon/>} />
      </div> */}
     
      <Table>
        <TableHead>
          <TableRow >
            <TableCell sx={{backgroundColor: "#f0f0f0", borderStyle:"none"}}></TableCell>
            <TableCell sx={{backgroundColor: "rgb(50 , 31 , 219 , 0.8)"}}></TableCell>
            <TableCell sx={{backgroundColor: "rgb(50 , 31 , 219 , 0.8)", color: "white", fontWeight: "700", fontSize: "15px"}}>
              Plastique
            </TableCell>
            <TableCell sx={{backgroundColor: "rgb(50 , 31 , 219 , 0.8)"}} ></TableCell>
            
            <TableCell sx={{backgroundColor: "rgb(249,177,21, 0.8)"}}></TableCell>
            <TableCell sx={{backgroundColor: "rgb(249,177,21, 0.8)", color: "white", fontWeight: "700", fontSize: "15px"}}>
              Papier
            </TableCell>
            <TableCell sx={{backgroundColor: "rgb(249,177,21, 0.8)"}}></TableCell>

            <TableCell sx={{backgroundColor: "rgb(46, 184, 92 , 0.8)"}}></TableCell>
            <TableCell sx={{backgroundColor: "rgb(46, 184, 92 , 0.8)", color: "white", fontWeight: "700", fontSize: "15px"}}>
              Composte
            </TableCell>
            <TableCell sx={{backgroundColor: "rgb(46, 184, 92 , 0.8)"}}></TableCell>

            <TableCell sx={{backgroundColor: "rgb(229,83,83, 0.8)"}}></TableCell>
            <TableCell sx={{backgroundColor: "rgb(229,83,83, 0.8)", color: "white", fontWeight: "700", fontSize: "15px"}}>
              Canette
            </TableCell>
            <TableCell sx={{backgroundColor: "rgb(229,83,83, 0.8)"}}></TableCell>
          </TableRow>
          <TableRow >
            <TableCell sx={{backgroundColor: "#f0f0f0"}} ></TableCell>
            <TableCell align="center">Matin</TableCell>
            <TableCell align="center">Aprés-Midi</TableCell>
            <TableCell className={classes.cellBorderRight} align="center">Nuit</TableCell>
            <TableCell align="center">Matin</TableCell>
            <TableCell align="center">Aprés-Midi</TableCell>
            <TableCell className={classes.cellBorderRight} align="center">Nuit</TableCell>
            <TableCell align="center">Matin</TableCell>
            <TableCell align="center">Aprés-Midi</TableCell>
            <TableCell className={classes.cellBorderRight} align="center">Nuit</TableCell>
            <TableCell align="center">Matin</TableCell>
            <TableCell align="center">Aprés-Midi</TableCell>
            <TableCell align="center">Nuit</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          <StyledRow jourSemaine="Lundi" valeur11={<Chip color="success" icon={<DoneIcon />} />} valeur12="" valeur13="" 
            valeur21="" valeur22="" valeur23="" valeur31="" valeur32="" valeur33="" valeur41="" valeur42="" valeur43=""/>

          <StyledRow jourSemaine="Mardi" valeur11="" valeur12="" valeur13="" valeur21="" valeur22="" valeur23=""
            valeur31="" valeur32="" valeur33="" valeur41={<Chip color="error" icon={<ErrorIcon />} />} valeur42="" valeur43=""/>

          <StyledRow jourSemaine="Mercredi" valeur11="" valeur12="" valeur13="" valeur21="" valeur22="" valeur23=""
            valeur31="" valeur32="" valeur33="" valeur41="" valeur42="" valeur43=""/>

          <StyledRow jourSemaine="Jeudi" valeur11="" valeur12="" valeur13={<Chip color="warning" icon={<HourglassBottomIcon />} />} 
            valeur21="" valeur22="" valeur23="" valeur31="" valeur32="" valeur33="" valeur41="" valeur42="" valeur43=""/>

          <StyledRow jourSemaine="Vendredi" valeur11="" valeur12="" valeur13="" valeur21="" valeur22="" valeur23=""
            valeur31="" valeur32="" valeur33="" valeur41="" valeur42="" valeur43=""/>

          <StyledRow jourSemaine="Samedi" valeur11="" valeur12="" valeur13="" valeur21="" valeur22="" valeur23=""
            valeur31="" valeur32="" valeur33="" valeur41="" valeur42="" valeur43=""/>

          <StyledRow jourSemaine="Dimanche" valeur11="" valeur12="" valeur13="" valeur21="" valeur22="" valeur23=""
            valeur31="" valeur32="" valeur33="" valeur41="" valeur42="" valeur43=""/>
        </TableBody>
      </Table>

    </div>
  )
}
