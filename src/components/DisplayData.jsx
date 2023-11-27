// DisplayData.js
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import CSVUploadChart from './CSVUploadChart';

const DisplayData = ({ formData, onPrevStep, onSubmit }) => {


    const divRef = useRef(null);

    const handleDownload = () => {
        // Get the HTML content of the div
        const content = divRef.current;

        // Options for html2pdf
        const options = {
            margin: 10,
            filename: 'downloaded-document.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        };

        // Use html2pdf to generate the PDF
        html2pdf(content, options);
    };


    return (
        <div>
            <CSSTransition
                in={true}
                timeout={300}
                classNames="fade"
                unmountOnExit
            >
                <div >
                    <div ref={divRef}>
                        <h2 className="text-lg font-semibold mb-4">Display Data</h2>

                        <table className="w-full border-collapse border border-gray-800 mt-4" >
                            <thead>
                                <tr>
                                    <th className="border border-gray-800 p-2">Field</th>
                                    <th className="border border-gray-800 p-2">Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(formData).map(([field, value]) => (
                                    <tr key={field}>
                                        <td className="border border-gray-800 p-2 capitalize">{field.replace("_", " ")}</td>
                                        <td className="border border-gray-800 p-2">{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <CSVUploadChart />
                    <div className="mt-4">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={onPrevStep}
                        >
                            Previous
                        </button>
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded ml-2"
                            onClick={onSubmit}
                        >
                            Submit
                        </button>

                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded ml-2"
                            onClick={handleDownload}
                        >
                            Download PDF
                        </button>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};

export default DisplayData;
