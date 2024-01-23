import React, { useState, useEffect } from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  HStack,
  Code,
  Grid,
  GridItem,
  Image,
  Input,
  Wrap,
  Heading,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  RadioGroup,
  Radio,
  Center,
  Square,
  Circle,
  StackDivider,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Highlight
} from '@chakra-ui/react';
import { theme }from '../components/themeFile.js';
import RiskViz from '../components/riskVisualization.js';
import { useRiskPrediction } from '../context/RiskPredictionContext';



const factors = [
    {
        label: 'Household Income Level',
        content: 'Lower household income levels can lead to limited access to healthy food options and healthcare resources, potentially increasing the risk of diabetes due to poor diet and lack of medical guidance.'
    },
    {
        label: 'Employment Status',
        content: 'Unemployment or unstable employment can lead to stress and inconsistent income, which might result in poor dietary habits and reduced access to healthcare, elevating the risk of diabetes.'
    },
    {
        label: 'Marital Status',
        content: 'Married individuals often have better health outcomes due to shared resources and emotional support, which can help in managing lifestyle factors that influence diabetes risk, such as diet and exercise.'
    },
    {
        label: 'Education Level',
        content: 'Higher education levels are generally associated with better understanding of health risks and access to resources, leading to healthier lifestyle choices that can reduce the risk of diabetes.'
    },
    {
        label: 'Alcohol Consumption',
        content: 'Excessive alcohol consumption can lead to weight gain, liver disease, and pancreatic issues, all of which are risk factors for diabetes.'
    },
    {
        label: 'Has a Phone',
        content: 'Having a phone might indicate better access to health information and resources, potentially aiding in diabetes management and prevention through information accessibility.'
    },
    {
        label: 'Has Children',
        content: 'The responsibilities of parenthood can sometimes lead to neglect of personal health, potentially increasing the risk of diabetes due to factors like stress, lack of sleep, and poor diet.'
    },
    {
        label: 'Urban or Rural',
        content: 'Urban residents may have better access to healthcare and healthy food options, while rural residents might face challenges in these areas, influencing the risk of diabetes differently in each setting.'
    },
    {
        label: 'Own or Rent a Home',
        content: 'Homeownership can indicate a stable socioeconomic status, which is often associated with better access to healthcare and healthy lifestyle choices, reducing the risk of diabetes.'
    },
    {
        label: 'Smoker',
        content: 'Smoking is a known risk factor for diabetes as it affects blood sugar levels and leads to insulin resistance, thereby increasing the risk of type 2 diabetes.'
    },
    {
        label: 'Divorced Parents',
        content: 'Children from divorced families might experience emotional and financial stress, potentially leading to unhealthy lifestyle choices and increased risk of obesity and diabetes later in life.'
    },
    {
        label: 'Drunk Family',
        content: 'Living in a family with alcohol abuse issues can lead to stress and unhealthy coping mechanisms, such as poor diet and sedentary lifestyle, which are risk factors for diabetes.'
    },
    {
        label: 'Veteran',
        content: 'Veterans might face unique health challenges, including stress and mental health issues, which can influence lifestyle choices and potentially increase the risk of diabetes.'
    },
    {
        label: 'Depressed',
        content: 'Depression can lead to poor self-care, unhealthy eating habits, and decreased physical activity, all of which are risk factors for developing diabetes.'
    },
];

  

const Results = () => {

const { riskPrediction } = useRiskPrediction();
const [randomFactors, setRandomFactors] = useState([]);
const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
}
const getRandomFactors = () => {
    const shuffled = [...factors].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };



function FactorTabs({ data }) {

    return (
      <Tabs isFitted>
        <TabList>
          {data.map((tab, index) => (
            <Tab key={index} fontWeight="bold">{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {data.map((tab, index) => (
            <TabPanel p={4} key={index}>
              {tab.content}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    )
  }


useEffect(() => {
    setRandomFactors(getRandomFactors());
  }, [riskPrediction]);


	return (
    <ChakraProvider name="results" theme={theme} >
      <VStack spacing='10' bg="brand.200" p='10'>
        <Box>
          <Heading align="center" size='lg'>Here Are Your Results</Heading>
        </Box>

        <VStack bg='brand.100' borderWidth='50px' rounded='lg' borderColor='brand.100' spacingY='8px' divider={<StackDivider borderColor='brand.200'/>}>
        <Box padding={20}>
        <Circle size='300px' bg='tomato' color='white' fontSize='9xl'>
            <RiskViz randomFactors={randomFactors}/>

        </Circle>
        </Box>
        <div>
        <Heading align="center" size='2xl' p='2'>
            <Highlight
                query='Concerning'
                styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.400' }}
            >
                These Are Your 5 Most Concerning Factors
            </Highlight>
            </Heading>
        <Heading align="center" size='2xl'>to Your Risk of Developing Diabetes</Heading>
        </div>

        <Box w='100%'>
            <FactorTabs data={randomFactors}/>
        </Box>
        </VStack> {/* END OF QUESTIONS */}




      </VStack>
    </ChakraProvider>
	)
};
    
export default Results;



