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
                var dataList = { "kp": [], "x": [], "y": [], "z": [] }
                csvData.slice(1, -1).map(row => { 
                    dataList.kp.push(parseFloat(row[0]))
                    dataList.x.push(parseFloat(row[1]))
                    dataList.y.push(parseFloat(row[2]))
                    dataList.z.push(parseFloat(row[3]))
                }); // Assuming the values are in the first column

                let values = csvData.slice(1, -1).map(row => parseFloat(row[1]))
                setFormData(
                    {
                        ...formData,
                        'kp': [...dataList.kp],
                        'x': [...dataList.x],
                        'max_x': Math.max(...dataList.x),
                        'min_x': Math.min(...dataList.x),
                        'max_y': Math.max(...dataList.y),
                        'min_y': Math.min(...dataList.y),
                        'max_z': Math.max(...dataList.z),
                        'min_z': Math.min(...dataList.z),
                    });

                setMaxValue(Math.max(...values));
                setMinValue(Math.min(...values));

                setAlldata([...values]);
            };

            reader.readAsText(file);
        }
    };

    console.log(formData);

    return (
        <div className='mb-4 my-4'>
            <label htmlFor={'file'} className="block text-gray-700 text-sm font-bold mb-2">
                Please Choose upload a csv file:
            </label>
            <input type="file" onChange={handleFileChange} />
        </div>

    );
};

export default CsvOperations;
