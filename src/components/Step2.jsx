// Step2.js
import React from 'react';

const Step2 = ({ formData, onChange, onNextStep, onPrevStep }) => {
    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Step 2: Additional Information</h2>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Additional Field:
                </label>
                <input
                    type="text"
                    className="w-full border rounded py-2 px-3"
                    value={formData.additionalField}
                    onChange={(e) => onChange('additionalField', e.target.value)}
                />
            </div>

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={onPrevStep}
            >
                Previous
            </button>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
                onClick={onNextStep}
            >
                Next
            </button>
        </div>
    );
};

export default Step2;
