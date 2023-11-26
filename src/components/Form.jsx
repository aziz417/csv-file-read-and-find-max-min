// Form.js
import React, { useState, createContext } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import DisplayData from './DisplayData';
import { AllInfoContext } from '../context/AllInformation';

const Form = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        project_name: '',
        project_description: '',
        client: '',
        contractor: '',
        max_x: '',
        max_y: '',
        max_z: '',
        min_x: '',
        min_y: '',
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
        <AllInfoContext.Provider value={{ formData, setFormData } } >
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
        </AllInfoContext.Provider>
    );
};

export default Form;
