import React, { createContext, useContext } from 'react';

// Create a context with a default value
const AllInfoContext = createContext('');

// Create a custom hook for accessing the context values
const useAllInfo = () => {
    return useContext(AllInfoContext);
};

// Export the context and hook
export { AllInfoContext, useAllInfo };
