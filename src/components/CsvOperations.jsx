import { useState } from 'react';
import { useAllInfo } from "../context/AllInformation";

const CsvOperations = () => {
    const { formData, setFormData } = useAllInfo();
    const [fileName, setFileName] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            setFileName(file.name)
            const reader = new FileReader();
            reader.onload = (e) => {
                const csvData = e.target.result.split('\n').map(row => row.split(','));

                // Find max and min values from the CSV data
                var dataList = { "kp": [], 'x_int': [], "x": [], "y": [], "z": [] }
                csvData.slice(1, -1).map(row => {
                    dataList.kp.push(parseFloat(row[0]))
                    dataList.x_int.push(parseInt(row[1]))
                    dataList.x.push(parseFloat(row[1]))
                    dataList.y.push(parseFloat(row[2]))
                    dataList.z.push(parseFloat(row[3]))
                }); // Assuming the values are in the first column

                let values = csvData.slice(1, -1).map(row => parseFloat(row[1]))
                setFormData(
                    {
                        ...formData,
                        'kp': [...dataList.kp],
                        'x': [...dataList.x_int],
                        'max_x': Math.max(...dataList.x),
                        'min_x': Math.min(...dataList.x),
                        'max_y': Math.max(...dataList.y),
                        'min_y': Math.min(...dataList.y),
                        'max_z': Math.max(...dataList.z),
                        'min_z': Math.min(...dataList.z),
                    });

            };

            reader.readAsText(file);
        }
    };

    return (
        <div className="flex w-full items-center justify-center bg-grey-lighter my-4">

            <label
                htmlFor='file'
                className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue ">

                <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path
                        d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
                    />
                </svg>
                <span
                    className="mt-2 text-base text-center leading-normal ">
                    {fileName ?? "Please Choose upload a csv file"}
                </span>

                <input
                    type="file"
                    id='file'
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".csv"
                />
            </label>
        </div>
    );
};

export default CsvOperations;
