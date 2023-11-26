// Step2.js
import React from 'react';
import Input from './formElements/Input';
import CsvOperations from './CsvOperations';

const Step2 = ({ formData, onChange, onNextStep, onPrevStep }) => {
    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Step 2: Additional Information</h2>

            <h2 className="text-lg font-semibold mb-4">Basic Information Not Editable</h2>

            <Input
                name='project_name'
                label="Project Name"
                type="text"
                disabled={true}
            />

            <Input
                name='project_description'
                label="Project Description"
                type="text"
                disabled={true}
            />

            <Input
                name='client'
                label="Client"
                type="text"
                disabled={true}
            />

            <Input
                name='contractor'
                label="Contractor"
                type="text"
                disabled={true}
            />
            <hr className='border border-gray-700' />

            <CsvOperations />

            <hr className='border border-gray-700'/>
            <div className='flex justify-between mt-4'>

                <div>
                    <Input
                        name='max_x'
                        label="Max X"
                        type="text"
                    />

                    <Input
                        name='max_y'
                        label="Max Y"
                        type="text"
                    />

                    <Input
                        name='max_z'
                        label="Max Z"
                        type="text"
                    />
                </div>

                <div className='ml-2'>
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
                </div>
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
