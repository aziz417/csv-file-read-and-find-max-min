// Step2.js
import React from 'react';
import Input from './formElements/Input';
import CsvOperations from './CsvOperations';

const Step2 = ({ onNextStep, onPrevStep }) => {
    return (
        <div>
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
            <div className='flex mt-8'>

                <div className='w-full'>
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

                <div className='ml-2 w-full'>
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

            <div className="relative flex">
                <button
                    onClick={onPrevStep}
                    className="text-sm px-3 py-2 flex justify-center items-center
                     bg-gradient-to-tl from-blue-500 to-cyan-400 rounded
                      text-white focus:outline-none font-semibold shadow
                      hover:transition-colors hover:bg-gradient-to-tr transform
                       transition hover:scale-110 ease-out
                       duration-300 hover:shadow-md">

                    <div className="mr-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 512 512">
                            <path
                                fill='#fff'
                                d="M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z" />
                        </svg>
                    </div>
                    Previous
                </button>

                <button
                    onClick={onNextStep}
                    className="text-sm px-3 py-2 flex justify-center items-center
                       bg-gradient-to-tl from-blue-500 to-cyan-400 rounded
                      text-white focus:outline-none font-semibold shadow
                       hover:transition-colors hover:bg-gradient-to-tr transform
                       transition hover:scale-110 ease-out
                       duration-300 hover:shadow-md ml-2">
                    Next
                    <div className="ml-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill='#fff'
                                d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z"
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Step2;
