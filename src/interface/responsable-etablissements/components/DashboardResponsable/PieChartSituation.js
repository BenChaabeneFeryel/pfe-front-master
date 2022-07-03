import React, { useState, useEffect } from 'react'
import { Card, Container, Typography, Grid } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const PiechartSituation = () => {
    const [dechets, setDechets] = React.useState([])
    useEffect(() => {
        ;(async function getStatus() {
        const response = await fetch('http://127.0.0.1:8000/api/dechets')
        const json = await response.json()

        setTimeout(getStatus, 60000)
        setDechets(json.data)
        })()
    }, [])


    const types = dechets.map((x) => x.type_dechet )
    const revenus = dechets.map((x) => x.prix_unitaire )

    const data = {
        labels: types,
        datasets: [
            {
                label: 'Revenus',
                data: revenus,
                backgroundColor: [
                    'rgb(78, 102, 241)',
                    'rgb(0, 153, 74)',
                    'rgb(245, 173, 13)',
                    'rgb(229, 49, 84)',
                ],
                borderColor: [
                    'rgb(120, 197, 255)',
                    '#6ECB63',
                    '#FFCD38',
                    '#FF9999',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <Card>
                <Container>
                    <Typography variant="h6" id="traffic" align="center">
                       Revenus totales collectés par type de déchet
                    </Typography>
                </Container>
                <Pie 
                    data={data} 
                    options={{ 
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'left',
                                display: true,
                            },
                        },
                    }}
                />
            </Card>
        </div>
    );
}


export default PiechartSituation;