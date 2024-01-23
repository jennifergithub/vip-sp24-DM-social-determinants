import React, { useState, createContext, useContext } from 'react';

// Create the context
export const RiskPredictionContext = createContext();

// Provider Component
export const RiskPredictionProvider = ({ children }) => {
  const [riskPrediction, setRiskPrediction] = useState(0);

  // The context value that will be supplied to any descendants of this component.
  const value = {
    riskPrediction,
    setRiskPrediction,
  };

  return (
    <RiskPredictionContext.Provider value={value}>
      {children}
    </RiskPredictionContext.Provider>
  );
};

// Custom hook for using this context
export const useRiskPrediction = () => {
  const context = useContext(RiskPredictionContext);
  if (!context) {
    throw new Error('useRiskPrediction must be used within a RiskPredictionProvider');
  }
  return context;
};
