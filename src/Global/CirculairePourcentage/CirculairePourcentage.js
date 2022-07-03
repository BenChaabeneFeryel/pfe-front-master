import React from 'react'
import { CircularProgressbar ,buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../CirculairePourcentage/circulairePourcentage.css'

export default function CirculairePourcentage({image , color , percentage}) {
  return (
    <div className="circulaire">
      <CircularProgressbarWithChildren value={percentage}  strokeWidth={10} 
        styles={buildStyles({ backgroundColor: "red", pathColor:`${color}`,})}
        >
        <img style={{ width: '60px', marginTop: -5 }} src={image} alt="img_dechet" />
        <br/>
        <div style={{ fontSize: 16, marginTop: -22,color:`#FEF1E6` }}>
          <strong>{percentage} %</strong> 
        </div>
      </CircularProgressbarWithChildren>
    </div>
  )
}
