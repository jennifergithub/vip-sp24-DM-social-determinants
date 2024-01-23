import './App.css';
import { ChakraProvider, Fade} from '@chakra-ui/react'
import Navbar from './components/navbar';
import Home from './pages/homePage';
import Results from './pages/resultsPage';
import Lower from './components/lowerBound';
import React, { useState, useEffect } from 'react'
import { RiskPredictionProvider } from './context/RiskPredictionContext';

function App() {

  const [showResults, setShowResults] = useState(false);

  const handleShowResults = () => {
    setShowResults(true);
  }

  return (
    <ChakraProvider bg='brand.100' >
      <RiskPredictionProvider>
        <Navbar />
        <Fade in={!showResults}>
          {!showResults && <Home onPredict={handleShowResults} />}
        </Fade>
        <Fade in={showResults}>
          {showResults && <Results />}
        </Fade>
        <Lower />
      </RiskPredictionProvider>
      
    </ChakraProvider>
  );
}

export default App;
