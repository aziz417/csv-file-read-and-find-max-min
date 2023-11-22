// Step1.js
import React from 'react';

const Step1 = ({ formData, onChange, onNextStep }) => {
    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Step 1: Personal Information</h2>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Name:
                </label>
                <input
                    type="text"
                    className="w-full border rounded py-2 px-3"
                    value={formData.name}
                    onChange={(e) => onChange('name', e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email:
                </label>
                <input
                    type="email"
                    className="w-full border rounded py-2 px-3"
                    value={formData.email}
                    onChange={(e) => onChange('email', e.target.value)}
                />
            </div>

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={onNextStep}
            >
                Next
            </button>
        </div>
    );
};

export default Step1;
