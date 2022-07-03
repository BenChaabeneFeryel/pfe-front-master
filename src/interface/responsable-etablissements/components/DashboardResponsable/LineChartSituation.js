import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { Card, Container, Typography, Grid } from '@mui/material';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Filler, Title, Tooltip, Legend);

const LineChartSituation = () => {

    const [quantitemois, setQuantiteMois] = React.useState([])
    useEffect(() => {
        ;(async function getStatus() {
        const response = await fetch('http://127.0.0.1:8000/api/somme-dechets-depot-par-mois')
        const json = await response.json()

        setTimeout(getStatus, 60000)
        setQuantiteMois(json)
        })()
    }, [])

    var options = []
    const [annee, setAnnee] = useState()
    const [dataplastique, setDataplastique] = useState([])
    const [datapapier, setDatapapier] = useState([])
    const [datacomposte, setDatacomposte] = useState([])
    const [datacanette, setDatacanette] = useState([])

    if (quantitemois.length !== 0) {
        var plastique = quantitemois.plastique
        var papier = quantitemois.papier
        var composte = quantitemois.composte
        var canette = quantitemois.canette
        var annees = quantitemois.annee

        if (annee === undefined) {
        setAnnee(annees[0])
        setDatapapier(papier[0])
        setDataplastique(plastique[0])
        setDatacomposte(composte[0])
        setDatacanette(canette[0])
        } else {
        for (let i = 0; i < annees.length; i++) {
            options.push({
            value: annees[i],
            datapapier: papier[i],
            dataplastique: plastique[i],
            datacomposte: composte[i],
            datacanette: canette[i],
            })
        }
        if (options.length !== 0) {
            var onchangeSelect = (item) => {
            setAnnee(item.value)
            setDatapapier(item.datapapier)
            setDataplastique(item.dataplastique)
            setDatacomposte(item.datacomposte)
            setDatacanette(item.datacanette)
            }
        }
        }
    }

    return (
        <div>
            <Card >
                <Container>
                    <Typography variant="h6" id="traffic" align="center">
                        Revenus des déchets vendus par année
                    </Typography>
                    <Grid container  >
                        <Select
                            className="float-end me-3"
                            onChange={onchangeSelect}
                            value={annee}
                            options={options}
                            getOptionValue={(option) => option.value}
                            getOptionLabel={(option) => option.value}
                            placeholder={annee}
                        />
                    </Grid>
                </Container>
                <Line 
                options={{ 
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: false,
                            text: 'Revenus des déchets vendus par année',
                        },
                    },
                }} 
                data={{ 
                    labels: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
                    datasets: [
                        {
                            label: 'Plastique',
                            data: dataplastique,
                            backgroundColor: 'rgb(50 , 31 , 219 , 0.5)',
                            borderColor: 'rgb(50, 31, 219)',
                            fill: true,
                        },
                        {
                            label: 'Papier',
                            data: datapapier,
                            backgroundColor: 'rgb(249,177,21, 0.5)',
                            borderColor: 'rgb(249,177,21)',
                            fill: true,
                        },
                        {
                            label: 'Composte',
                            data: datacomposte,
                            backgroundColor: 'rgb(46, 184, 92 , 0.5)',
                            borderColor: 'rgb(46, 184, 92)',
                            fill: true,
                        },
                        {
                            label: 'Canette',
                            data: datacanette,
                            backgroundColor: 'rgb(229,83,83, 0.5)',
                            borderColor: 'rgb(229,83,83)',
                            fill: true,
                        },
                    ],
                }} 
                />
            </Card>
        </div>
    );
}

export default LineChartSituation;