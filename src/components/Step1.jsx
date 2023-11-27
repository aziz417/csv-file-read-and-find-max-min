// Step1.js
import React from 'react';
import Input from './formElements/Input';

const Step1 = ({ onNextStep }) => {
    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Basic Information</h2>

            <Input
                name='project_name'
                label="Project Name"
                type="text"
            />
            <Input
                name='project_description'
                label="Project Description"
                type="text"
            />

            <Input
                name='client'
                label="Client"
                type="text"
            />

            <Input
                name='contractor'
                label="Contractor"
                type="text"
            />

            <div className="relative">
                <button
                    onClick={onNextStep}
                    className="text-sm px-3 py-2 flex justify-center items-center
                       bg-gradient-to-tl from-blue-500 to-cyan-400 rounded
                      text-white focus:outline-none font-semibold shadow
                       hover:transition-colors hover:bg-gradient-to-tr transform
                       transition hover:scale-110 ease-out
                       duration-300 hover:shadow-md">
                    Next
                    <div className="ml-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill='#fff'
                                d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z" />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Step1;
