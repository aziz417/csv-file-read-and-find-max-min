// Step2.js
import React from 'react';
import Input from './formElements/Input';
import CsvOperations from './CsvOperations';

const Step2 = ({ formData, onChange, onNextStep, onPrevStep }) => {
    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Step 2: Additional Information</h2>

            <CsvOperations />

            <Input
                name='max_x'
                label="Max X"
                type="text"
                required={true}
            />

            <Input
                name='max_y'
                label="Max Y"
                type="text"
                required={true}
            />

            <Input
                name='max_z'
                label="Max Z"
                type="text"
                required={true}
            />

            <hr />

            <Input
                name='min_x'
                label="Min X"
                type="text"
                required={true}
            />

            <Input
                name='min_y'
                label="Min Y"
                type="text"
                required={true}
            />

            <Input
                name='min_z'
                label="Min Z"
                type="text"
                required={true}
            />
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
