// DisplayData.js
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const DisplayData = ({ formData, onPrevStep, showChart }) => {

    const divRef = useRef(null);

    const handleDownload = () => {
        // Get the HTML content of the div
        const content = divRef.current;

        // Options for html2pdf
        const options = {
            margin: 10,
            filename: 'downloaded-document.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        };

        // Use html2pdf to generate the PDF
        html2pdf(content, options);
    };


    return (
        <div>
            <CSSTransition
                in={true}
                timeout={300}
                classNames="fade"
                unmountOnExit
            >
                <div >
                    <div ref={divRef}>
                        <h2 className="text-lg font-semibold mb-4">Data Show Table</h2>

                        <table className="w-full border-collapse border border-gray-300 mt-4" >
                            <thead className='bg-blue-600'>
                                <tr>
                                    <th className="border border-gray-300 p-2 text-white">Field</th>
                                    <th className="border border-gray-300 p-2 text-white">Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(formData).map(([field, value]) => {
                                    return !['kp', 'x'].includes(field) &&
                                        <tr key={field} >
                                            <td className="border border-gray-300 p-2 capitalize">{field.replace("_", " ")}</td>
                                            <td className="border border-gray-300 p-2">{value}</td>
                                        </tr>
                                }
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="relative flex mt-4">
                        <button
                            onClick={onPrevStep}
                            className="text-sm px-3 py-2 flex justify-center items-center
                            bg-gradient-to-tl from-blue-500 to-cyan-400 rounded
                          text-white focus:outline-none font-semibold shadow
                            hover:transition-colors hover:bg-gradient-to-tr transform
                            transition hover:scale-110 ease-out
                            duration-300 hover:shadow-md"
                        >

                            <div className="mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 512 512">
                                    <path
                                        fill='#fff'
                                        d="M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z" /></svg>
                            </div>
                            Previous
                        </button>

                        <button
                            onClick={() => showChart(true)}
                            className="text-sm px-3 py-2 flex justify-center items-center
                                        bg-gradient-to-tl from-blue-500 to-cyan-400 rounded
                                      text-white focus:outline-none font-semibold shadow
                                        hover:transition-colors hover:bg-gradient-to-tr transform
                                        transition hover:scale-110 ease-out
                                        duration-300 hover:shadow-md ml-2">
                            Show Chart
                            <div className="ml-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 576 512">
                                    <path
                                        fill='#fff'
                                        d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                                </svg>
                            </div>
                        </button>

                        <button
                            onClick={handleDownload}
                            className="text-sm px-3 py-2 flex justify-center items-center
                                bg-gradient-to-tl from-blue-500 to-cyan-400 rounded
                              text-white focus:outline-none font-semibold shadow
                                hover:transition-colors hover:bg-gradient-to-tr transform
                                transition hover:scale-110 ease-out
                                duration-300 hover:shadow-md ml-2
                            ">

                            Download PDF
                            <div className="ml-2">
                                <svg
                                    className='h-4 w-4'
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 512 512">
                                    <path
                                        fill='#fff'
                                        d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6c4.5-4.2 7.1-10.1 7.1-16.3c0-12.3-10-22.3-22.3-22.3H304V160c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32v96H150.3C138 256 128 266 128 278.3c0 6.2 2.6 12.1 7.1 16.3l107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9z" /></svg>
                            </div>
                        </button>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};

export default DisplayData;
