
import styles from '../../styles/Components/AboutUs/Chart.module.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDeferred from 'chartjs-plugin-deferred';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDeferred);

const Chart = () => {

    // TODO : input correct values in this chart. 
    const data = {
        labels: ['Engineering', 'Education', 'Science', 'Agricultural & Environmental Sciences', 'Management'],
        datasets: [
          {
            label: 'Demographics',
            data: [29, 1, 2, 2, 2],
            backgroundColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 200, 1)',
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 200, 1)',
            ],
            borderWidth: 1,
          },
        ]
    }

    const options = {
        responsive : true,
        maintainAspectRatio: true,
        animation : {
            duration: 3000,
        },
        plugins: {
            deferred : {
                yOffset : '50%'
            },
            legend: {
                display : false,
                labels: {
                    color: "white",
                    fontSize: 18
                }
            },
        },
    }

    return (
        <div className={`${styles.container} `}>
            <Doughnut 
                data={data}
                options={options}
            />
        </div>
    )
}


export default Chart;