// Step1.js
import React from 'react';
import Input from './formElements/Input';

const Step1 = ({ formData, onChange, onNextStep }) => {
    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Step 1: Basic Information</h2>

            <Input
                name='project_name'
                label="Project Name"
                type="text"
                required={false}
            />
            <Input
                name='project_description'
                label="Project Description"
                type="text"
                required={true}
            />

            {/* <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Project Name:
                </label>
                <input
                    type="text"
                    className="w-full border rounded py-2 px-3"
                    value={formData.project_name}
                    onChange={(e) => onChange('project_name', e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Project Description:
                </label>
                <input
                    type="text"
                    className="w-full border rounded py-2 px-3"
                    value={formData.project_description}
                    onChange={(e) => onChange('project_description', e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Client:
                </label>
                <input
                    type="text"
                    className="w-full border rounded py-2 px-3"
                    value={formData.client}
                    onChange={(e) => onChange('client', e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Contractor:
                </label>
                <input
                    type="text"
                    className="w-full border rounded py-2 px-3"
                    value={formData.contractor}
                    onChange={(e) => onChange('contractor', e.target.value)}
                />
            </div> */}

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
