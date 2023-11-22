// DisplayData.js
import React from 'react';
import { CSSTransition } from 'react-transition-group';

const DisplayData = ({ formData, onPrevStep, onSubmit }) => {
    return (
        <div>
            <CSSTransition
                in={true}
                timeout={300}
                classNames="fade"
                unmountOnExit
            >
                <div>
                    <h2 className="text-lg font-semibold mb-4">Display Data</h2>

                    <table className="w-full border-collapse border border-gray-800 mt-4">
                        <thead>
                            <tr>
                                <th className="border border-gray-800 p-2">Field</th>
                                <th className="border border-gray-800 p-2">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(formData).map(([field, value]) => (
                                <tr key={field}>
                                    <td className="border border-gray-800 p-2">{field}</td>
                                    <td className="border border-gray-800 p-2">{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

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
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};

export default DisplayData;
