import React, { useEffect, useState } from 'react';
import { useAllInfo } from "../context/AllInformation";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const CSVUploadChart = () => {
    let labels = [];
    const { formData, setFormData } = useAllInfo();
    const [data, setData] = useState(null)

    const [options, setOptions] = useState({
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Show the chart.',
            },
        },
    })

    useEffect(() => {
        labels = formData.kp
        setData({
            labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: formData.x,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },

            ],
        })
    }, [formData])

    return data &&
        <div className='flex bg-white h-full w-11/12'>
            <Line options={options} data={data} />
        </div>;
}
export default CSVUploadChart