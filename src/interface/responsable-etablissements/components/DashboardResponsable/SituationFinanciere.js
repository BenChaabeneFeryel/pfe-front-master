import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import BarChartSituation from './LineChartSituation'
import PieChartSituation from'./PieChartSituation'

export default function SituationFinanciere() {

  return (
    <div style={{display:"flex", flexDirection:"row"}}>
        <div style={{width:"65%"}}>
            <BarChartSituation/>
        </div>
        <div style={{width:"35%", margin:"20px"}}>
            <PieChartSituation/>
        </div>
        
    </div>
  )
}
