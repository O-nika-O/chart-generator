import React, {useState} from 'react'
import {Doughnut} from 'react-chartjs-2'
// import {Chart, ArcElement} from 'chart.js'
// Chart.register(ArcElement);
import { Chart as ChartJS, Title, ArcElement, Legend, DoughnutController, plugins } from 'chart.js';

ChartJS.register(Title, ArcElement, Legend, DoughnutController, plugins);


function ChartDisplay({title, description, numbers, labels, colors}) {
    
    const settings = {
        labels: labels,
        datasets: [
            {
                // label: title,
                backgroundColor: colors,
                data: numbers
            }
        ]
    };

    return (
        <div
        style={{width:"75%", 
        leftMargin:'15%'
        }}
        >
            <Doughnut
            data={settings}
            options={{
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    title: {
                        display: true,
                        fontSize: 23,
                        text: [title, description],
                    },
                    legend: {
                        display: true,
                        position: 'left'
                        }
                }
                }}
            />
        </div>
    )
}

export default ChartDisplay
