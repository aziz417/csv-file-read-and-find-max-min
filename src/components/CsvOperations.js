import React, { useState } from 'react';

const CsvOperations = () => {
    const [data, setData] = useState([]);
    const [maxValue, setMaxValue] = useState(null);
    const [minValue, setMinValue] = useState(null);
    const [allData, setAlldata] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const csvData = e.target.result.split('\n').map(row => row.split(','));
                setData(csvData);

                // Find max and min values from the CSV data
                const values = csvData.slice(1, -1).map(row => parseFloat(row[3])); // Assuming the values are in the first column

                setMaxValue(Math.max(...values));
                setMinValue(Math.min(...values));

                setAlldata([...values]);
            };

            reader.readAsText(file);
        }
    };

    const downloadAsPdf = () => {
        const pdfContent = document.getElementById('pdf-content').outerHTML;

        // Create a new Blob containing the HTML content
        const blob = new Blob([`<!DOCTYPE html><html><head><title>Table PDF</title></head><body>${pdfContent.innerHTML}</body></html>`], { type: 'application/pdf' });

        // Create a download link
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'table.pdf';

        // Trigger the download
        link.click();

        // Clean up
        URL.revokeObjectURL(link.href);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <div id="pdf-content">
                <table>
                    <thead>
                        <tr>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td>{row[0]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <p>Max Value: {maxValue}</p>
                <p>Min Value: {minValue}</p>
                {/* {allData?.map(v => <p>Min Value: {v}</p>)} */}

            </div>
            <button onClick={downloadAsPdf}>Download as PDF</button>
        </div>
    );
};

export default CsvOperations;
