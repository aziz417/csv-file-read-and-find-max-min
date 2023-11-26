import React, { useState } from 'react';
import { useAllInfo } from "../context/AllInformation";

const CsvOperations = () => {
    const [data, setData] = useState([]);
    const [maxValue, setMaxValue] = useState(null);
    const [minValue, setMinValue] = useState(null);
    const [allData, setAlldata] = useState(null);

    const { formData, setFormData } = useAllInfo();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const csvData = e.target.result.split('\n').map(row => row.split(','));
                setData(csvData);

                // Find max and min values from the CSV data
                var dataList = { x: [1], y: [2], z: [3] }
                csvData.slice(1, -1).map(row => { 
                    dataList.x.push(parseFloat(row[1])),
                    // dataList['y'].push(parseFloat(row[2])),
                    // dataList['z'].push(parseFloat(row[3]))
                  
                }); // Assuming the values are in the first column
                let values = csvData.slice(1, -1).map(row => parseFloat(row[1]))
                console.log(dataList.x.push(5), 'ggggggggg');
                setFormData(
                    {
                        ...formData,
                        'max_x': Math.max(...values),
                        'min_x': Math.min(...values),
                    });

                setMaxValue(Math.max(...values));
                setMinValue(Math.min(...values));

                setAlldata([...values]);
            };

            reader.readAsText(file);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <div>{maxValue}</div>
            <div>{minValue}</div>
        </div>
    );
};

export default CsvOperations;
