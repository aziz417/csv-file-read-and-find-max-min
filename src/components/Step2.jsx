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

            <hr className='border border-gray-700' />
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
                className="
                flex 
                items-center
                space-2
                 bg-gradient-to-r
                from-green-400
                to-blue-500
                hover:from-pink-500
                hover:to-yellow-500
                 px-4 py-2 rounded ml-2"
                onClick={onNextStep}
            >
                
                Next <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <path d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z" />
                </svg>
            </button>
        </div>
    );
};

export default Step2;
