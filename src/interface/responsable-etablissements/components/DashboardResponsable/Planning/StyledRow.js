import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Table, TableBody, TableHead, TableRow, TableCell } from '@mui/material';

const useStyles = makeStyles({
  cellBorderRight: {
    borderRight: "1px solid gray"
  }
});

export default function StyledRow({jourSemaine, valeur11, valeur12, valeur13, valeur21, valeur22, valeur23, valeur31, valeur32,
  valeur33, valeur41, valeur42, valeur43}) {

  const classes = useStyles();

  return (
    <TableRow>
      <TableCell className={classes.cellBorderRight}>{jourSemaine}</TableCell>
      <TableCell>{valeur11}</TableCell>
      <TableCell>{valeur12}</TableCell>
      <TableCell className={classes.cellBorderRight}>{valeur13}</TableCell>
      <TableCell>{valeur21}</TableCell>
      <TableCell>{valeur22}</TableCell>
      <TableCell className={classes.cellBorderRight}>{valeur23}</TableCell>
      <TableCell>{valeur31}</TableCell>
      <TableCell>{valeur32}</TableCell>
      <TableCell className={classes.cellBorderRight}>{valeur33}</TableCell>
      <TableCell>{valeur41}</TableCell>
      <TableCell>{valeur42}</TableCell>
      <TableCell>{valeur43}</TableCell>
    </TableRow>
  )
}
