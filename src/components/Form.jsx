// Form.js
import React, { useState, createContext } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import DisplayData from './DisplayData';
import { AllInfoContext } from '../context/AllInformation';
import CSVUploadChart from './CSVUploadChart';

const Form = () => {
    const [step, setStep] = useState(1);
    const [chartShow, setChartShow] = useState(false);
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

    const handleChart = (manage) => {
        setChartShow(manage)
    };

    return (
        <AllInfoContext.Provider value={{ formData, setFormData }} >

            <div className="items-center min-h-screen bg-gray-900 py-6 flex flex-col justify-center sm:py-12">

                {chartShow ?
                    <>
                        <button
                            onClick={() => handleChart(false)}
                            className="text-sm px-3 py-2 flex justify-end items-center
                             bg-red-700 rounded mb-2
                             text-white focus:outline-none font-semibold shadow
                              hover:transition-colors hover:bg-gradient-to-tr transform
                              transition hover:scale-110 ease-out
                              duration-300 hover:shadow-md">
                            <div className="">
                                <svg
                                    className='h-12 w-12'
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 384 512">
                                    <path
                                        fill='#fff'
                                        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                            </div>
                        </button>
                        <CSVUploadChart />
                    </>
                    :
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">

                        </div>
                        <div className="relative px-10 py-10 bg-white shadow-lg sm:rounded-3xl ">
                            <div className="max-w-md mx-auto">
                                <div>

                                    <ol className="grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 sm:grid-cols-3"
                                    >
                                        <li onClick={() => setStep(1)} className={`flex items-center justify-center gap-2 p-4 bg-blue-${step == 1 ? 700 : 500} cursor-pointer`}>
                                            <svg
                                                className="h-7 w-7 shrink-0 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                                                />
                                            </svg>

                                            <p className="leading-none">
                                                <strong className="block font-medium text-white"> Basic Information </strong>
                                            </p>
                                        </li>

                                        <li onClick={() => setStep(2)}
                                            className={`relative flex items-center justify-center gap-2 bg-blue-${step == 2 ? 700 : 500} p-4 cursor-pointer`}
                                        >
                                            <span
                                                className="absolute -left-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-gray-100 ltr:border-b-0 ltr:border-s-0 ltr:bg-white rtl:border-e-0 rtl:border-t-0 rtl:bg-gray-50 sm:block"
                                            >
                                            </span>

                                            <span
                                                className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-gray-100 ltr:border-b-0 ltr:border-s-0 ltr:bg-gray-50 rtl:border-e-0 rtl:border-t-0 rtl:bg-white sm:block"
                                            >
                                            </span>

                                            <svg

                                                className="h-7 w-7 shrink-0"
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="1em"
                                                viewBox="0 0 384 512
                                                ">

                                                <path
                                                    fill='#fff'
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z" />
                                            </svg>



                                            <p className="leading-none">
                                                <strong className="block font-medium text-white"> CSV File Information </strong>
                                            </p>
                                        </li>

                                        <li onClick={() => setStep(3)} className={`flex items-center justify-center gap-2 p-4 bg-blue-${step == 3 ? 700 : 500} cursor-pointer`}>
                                            <svg
                                                className="h-7 w-7 shrink-0 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="1em"
                                                viewBox="0 0 576 512">
                                                <path
                                                    fill='#fff'
                                                    d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                                            </svg>

                                            <p className="leading-none">
                                                <strong className="block font-medium text-white"> Data Show Table </strong>
                                            </p>
                                        </li>
                                    </ol>

                                </div>

                                <div className="divide-y divide-gray-200">
                                    <div className="pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

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
                                                showChart={handleChart}
                                            />
                                        )}

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>}
            </div>

        </AllInfoContext.Provider>
    );
};

export default Form;
