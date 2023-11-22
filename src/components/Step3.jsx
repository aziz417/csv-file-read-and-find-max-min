// Step3.js
import React from 'react';

const Step3 = ({ formData, onChange, onNextStep, onPrevStep }) => {
    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Step 3: Contact Information</h2>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Address:
                </label>
                <input
                    type="text"
                    className="w-full border rounded py-2 px-3"
                    value={formData.address}
                    onChange={(e) => onChange('address', e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Phone Number:
                </label>
                <input
                    type="tel"
                    className="w-full border rounded py-2 px-3"
                    value={formData.phoneNumber}
                    onChange={(e) => onChange('phoneNumber', e.target.value)}
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

export default Step3;
