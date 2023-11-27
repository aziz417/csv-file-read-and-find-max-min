// Form.js
import React, { useState, createContext } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import DisplayData from './DisplayData';
import { AllInfoContext } from '../context/AllInformation';
import CSVUploadChart from './CSVUploadChart';

const Form = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        project_name: '',
        project_description: '',
        client: '',
        contractor: '',
        kp: '',
        x: '',
        max_x: '',
        min_x: '',
        max_y: '',
        min_y: '',
        max_z: '',
        min_z: '',

    });

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePrevStep = () => {
        setStep(step - 1);
    };

    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const handleSubmit = () => {
        // Handle form submission, for now, log the data
        console.log('Form submitted', formData);
    };

    return (
        <AllInfoContext.Provider value={{ formData, setFormData }} >


            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Login Form with Floating Labels</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                    </div>
                                    <div className="relative">
                                        <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                        <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                    </div>
                                    <div className="relative">
                                        <button className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="max-w-md mx-auto mt-8 p-4 bg-gray-300 rounded">
                {step === 1 && (
                    <Step1
                        formData={formData}
                        onChange={handleChange}
                        onNextStep={handleNextStep}
                    />
                )}

                {step === 2 && (
                    <Step2
                        formData={formData}
                        onChange={handleChange}
                        onNextStep={handleNextStep}
                        onPrevStep={handlePrevStep}
                    />
                )}



                {step === 3 && (
                    <DisplayData
                        formData={formData}
                        onPrevStep={handlePrevStep}
                        onSubmit={handleSubmit}
                    />
                )}
                {/* 
            <div className="flex justify-between mt-4">
                
            </div> */}
            </div>
            <CSVUploadChart />
        </AllInfoContext.Provider>
    );
};

export default Form;
