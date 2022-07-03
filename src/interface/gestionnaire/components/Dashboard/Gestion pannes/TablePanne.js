import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function TablePanne({Panne, typeFiltrage,data}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">N° Panne</StyledTableCell>
            {Panne==="camion"?
              <>
                <StyledTableCell align="center">Matricule Camion</StyledTableCell>
                <StyledTableCell align="center">Mécanicien</StyledTableCell>   
              </>:
            
              <>
                <StyledTableCell align="center">Poubelle</StyledTableCell>
                <StyledTableCell align="center">Réparateur Poubelle</StyledTableCell>
              </>
            }


            {typeFiltrage==="cout"?
              <>
                <StyledTableCell sx={{backgroundColor:"green !important"}} align="center">Coût&nbsp;(en DT)</StyledTableCell>
                <StyledTableCell align="center">Durée de réparation &nbsp;(Jours)</StyledTableCell>
              </>:
              
              <>
                <StyledTableCell align="center" sx={{backgroundColor:"green !important"}} >Durée de réparation &nbsp;(Jours)</StyledTableCell>
                <StyledTableCell align="center">Coût&nbsp;(en DT)</StyledTableCell>
              </>
            }
          </TableRow>
        </TableHead>

        <TableBody>  
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="center">{row.id}</StyledTableCell>
              {Panne==="camion"?
              <>
                <StyledTableCell align="center">{row.camion_id}</StyledTableCell>
                <StyledTableCell align="center">{row.mecanicien_id}</StyledTableCell> 
              </>:
              
              <>
                <StyledTableCell align="center">{row.poubelle_id}</StyledTableCell>
                <StyledTableCell align="center">{row.reparateur_poubelle_id}</StyledTableCell>
              </>}
          
              {typeFiltrage==="cout"?
              <>
                <StyledTableCell align="center" sx={{color:"red !important"}} >{row.cout}</StyledTableCell>
                <StyledTableCell align="center">{row.nbr_jours}</StyledTableCell>
              </>:
              
              <>
                <StyledTableCell align="center" sx={{color:"red !important"}} >{row.nbr_jours}</StyledTableCell>
                <StyledTableCell align="center">{row.cout}</StyledTableCell>
              </>}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>     
  )
}
