import React, { useState } from 'react';
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
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { theme }from '../components/themeFile.js';
import { useRiskPrediction } from '../context/RiskPredictionContext';




const Home = ({ onPredict }) => {

  //this.state = {_button : <Button isLoading loadingText='loading' colorScheme='teal'></Button>};


const [incomeSliderValue, setIncomeSliderValue] = useState(50)

const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
}

const [alc, setAlc] = React.useState(0)
const handleAlc = (alc) => setAlc(alc)

const [ageSliderValue, setAgeSliderValue] = useState(50)

const [showLoader, setShowLoader] = useState(false)

const { setRiskPrediction } = useRiskPrediction();


const onPrediction = () => {
    setShowLoader(true)
    setTimeout(() => {
        setShowLoader(false);
        onPredict();
    }, 1000);
    
    setRiskPrediction(Math.floor(Math.random() * 100))
};


	return (
    <ChakraProvider name="home" theme={theme} >
      <VStack spacing='10' bg="brand.200" p={10}>
        <Box>
          <Heading align="center" size='lg'>Social Determinants</Heading>
          <Heading align="center" size='2xl'>Analyze Your Risk of Diabetes</Heading>
        </Box>

        

        <VStack bg='brand.100' borderWidth='50px' rounded='lg' borderColor='brand.100' spacingY='8px' w='90%' divider={<StackDivider borderColor='brand.200'/>}>
            
        <FormControl as='fieldset'>
                <VStack align='stretch' spacing='30px'>
            <FormLabel as='legend' htmlFor={null}>
                    Total Household Income Level?
                </FormLabel>
                <Slider aria-label='s' onChange={(val) => setIncomeSliderValue(val)}>
                    <SliderMark value={0} {...labelStyles}>
                    {"<"}30k
                    </SliderMark>
                    <SliderMark value={25} {...labelStyles}>
                    31k-55k
                    </SliderMark>
                    <SliderMark value={50} {...labelStyles}>
                    56k-100k
                    </SliderMark>
                    <SliderMark value={75} {...labelStyles}>
                    100k-200k
                    </SliderMark>
                    <SliderMark value={100} {...labelStyles}>
                    {">"}200k
                    </SliderMark>
                    <SliderMark
                    value={incomeSliderValue}
                    textAlign='center'
                    bg='blue.500'
                    color='white'
                    mt='-10'
                    ml='-5'
                    w='12'
                    >
                    {incomeSliderValue * 2}k
                    </SliderMark>
                    <SliderTrack>
                    <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
                <FormHelperText>Please Indicate</FormHelperText>
                </VStack>
            </FormControl>

            <FormControl as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    What is Your Employment Status?
                </FormLabel>
                <RadioGroup defaultValue='1'>
                    <Grid templateColumns='repeat(3, 1fr)'>
                        <Radio value='1'>Employed</Radio>
                        <Radio value='2'>Unemployed</Radio>
                        <Radio value='2'>Student</Radio>
                    </Grid>
                </RadioGroup>
                <FormHelperText>Select Only One</FormHelperText>
            </FormControl>

            <FormControl as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    What is your marital status?
                </FormLabel>
                <RadioGroup defaultValue='1'>
                    <Grid templateColumns='repeat(2, 1fr)'>
                        <VStack spacing='24px' align='stretch'>
                        <Radio value='1'>Single</Radio>
                        <Radio value='2'>Married</Radio>
                        </VStack>
                        <VStack spacing='24px' align='stretch'>
                        <Radio value='3'>Divorced</Radio>
                        <Radio value='4'>Widowed</Radio>
                        </VStack>
                    </Grid>

                </RadioGroup>
                <FormHelperText>Select Only One</FormHelperText>
            </FormControl>

            <FormControl as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    What is the Highest Level of Education You Have Completed?
                </FormLabel>
                <RadioGroup defaultValue='1'>
                    <HStack spacing='16'>
                        <VStack spacing='24px' align='stretch'>
                        <Radio value='1'>Pre-Highschool</Radio>
                        <Radio value='2'>Highschool</Radio>
                        </VStack>
                        <VStack spacing='24px' align='stretch'>
                        <Radio value='3'>Some College</Radio>
                        <Radio value='4'>Associates</Radio>
                        </VStack>
                        <VStack spacing='24px' align='stretch'>
                        <Radio value='5'>Bachelors</Radio>
                        <Radio value='6'>Masters</Radio>
                        </VStack>
                        <VStack spacing='24px' align='stretch'>
                        <Radio value='7'>PhD</Radio>
                        </VStack>
                    </HStack>
                </RadioGroup>
                <FormHelperText>Select Only One</FormHelperText>
            </FormControl>
            
            <FormControl as='fieldset'>
            <VStack align='stretch' spacing='15px'>
                <FormLabel as='legend' htmlFor={null}>
                    Alcohol Intake Per Week
                </FormLabel>
                <Flex>
                    <NumberInput maxW='100px' mr='2rem' max={30} value={alc} onChange={handleAlc}>
                        <NumberInputField />
                        <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Slider
                        flex='1'
                        focusThumbOnChange={false}
                        value={alc}
                        onChange={handleAlc}
                        max={30}
                        step={1}
                    >
                        <SliderMark value={0} {...labelStyles}>
                        0
                        </SliderMark>
                        <SliderMark value={10} {...labelStyles}>
                        10
                        </SliderMark>
                        <SliderMark value={20} {...labelStyles}>
                        20
                        </SliderMark>
                        <SliderMark value={30} {...labelStyles}>
                        {">"}30
                        </SliderMark>
                        <SliderTrack>
                        <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb fontSize='sm' boxSize='32px'  children={alc}  />
                    </Slider>
                </Flex>
                <FormHelperText>Weekly</FormHelperText>
                </VStack>
            </FormControl>

            <FormControl as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    Sex?
                </FormLabel>
                <RadioGroup defaultValue='1'>
                    <HStack spacing='16' > 
                        <Radio value='1'>Male</Radio>
                        <Radio value='2'>Female</Radio>
                        <Radio value='3'>Other</Radio>
                    </HStack>
                </RadioGroup>
                <FormHelperText>Select Only One</FormHelperText>
            </FormControl>

            <FormControl as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    Do You Have a Phone?
                </FormLabel>
                <RadioGroup defaultValue='1'>
                    <HStack spacing='16' > 
                        <Radio value='1'>Yes</Radio>
                        <Radio value='2'>No</Radio>
                    </HStack>
                </RadioGroup>
                <FormHelperText>Select Only One</FormHelperText>
            </FormControl>

            <FormControl as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    Do You Have Children?
                </FormLabel>
                <RadioGroup defaultValue='1'>
                    <HStack spacing='16' > 
                        <Radio value='1'>Yes</Radio>
                        <Radio value='2'>No</Radio>
                    </HStack>
                </RadioGroup>
                <FormHelperText>Select Only One</FormHelperText>
            </FormControl>
            
            <FormControl as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    What is the Environment of Your Residence?
                </FormLabel>
                <RadioGroup defaultValue='1'>
                    <HStack spacing='16' > 
                        <Radio value='1'>Rural</Radio>
                        <Radio value='2'>Urban</Radio>
                        <Radio value='3'>Suburban</Radio>
                    </HStack>
                </RadioGroup>
                <FormHelperText>Select Only One</FormHelperText>
            </FormControl>

            <FormControl as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    What is Your Living Condition?
                </FormLabel>
                <RadioGroup defaultValue='1'>
                    <HStack spacing='16' > 
                        <Radio value='1'>Home-Owner</Radio>
                        <Radio value='2'>Renter</Radio>
                        <Radio value='4'>Homeless</Radio>
                        <Radio value='4'>Other</Radio>
                    </HStack>
                </RadioGroup>
                <FormHelperText>Select Only One</FormHelperText>
            </FormControl>

            <FormControl as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    What is Your Living Condition?
                </FormLabel>
                <RadioGroup defaultValue='1'>
                    <HStack spacing='16' > 
                        <Radio value='1'>Home-Owner</Radio>
                        <Radio value='2'>Renter</Radio>
                        <Radio value='4'>Homeless</Radio>
                        <Radio value='4'>Other</Radio>
                    </HStack>
                </RadioGroup>
                <FormHelperText>Select Only One</FormHelperText>
            </FormControl>

            <FormControl as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    Do You Smoke?
                </FormLabel>
                <RadioGroup defaultValue='1'>
                    <HStack spacing='16' > 
                        <Radio value='1'>Yes</Radio>
                        <Radio value='2'>No</Radio>
                    </HStack>
                </RadioGroup>
                <FormHelperText>Select Only One</FormHelperText>
            </FormControl>


            <FormControl as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    Are Your Parents Divorced?
                </FormLabel>
                <RadioGroup defaultValue='1'>
                    <HStack spacing='16' > 
                        <Radio value='1'>Yes</Radio>
                        <Radio value='2'>No</Radio>
                    </HStack>
                </RadioGroup>
                <FormHelperText>Select Only One</FormHelperText>
            </FormControl>

            <FormControl as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    Does Your Family Have a History of Alcoholism?
                </FormLabel>
                <RadioGroup defaultValue='1'>
                    <HStack spacing='16' > 
                        <Radio value='1'>Yes</Radio>
                        <Radio value='2'>No</Radio>
                    </HStack>
                </RadioGroup>
                <FormHelperText>Select Only One</FormHelperText>
            </FormControl>

            <FormControl as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    Are You a Veteran?
                </FormLabel>
                <RadioGroup defaultValue='1'>
                    <HStack spacing='16' > 
                        <Radio value='1'>Yes</Radio>
                        <Radio value='2'>No</Radio>
                    </HStack>
                </RadioGroup>
                <FormHelperText>Select Only One</FormHelperText>
            </FormControl>

            <FormControl as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    Do You Suffer from Depression?
                </FormLabel>
                <RadioGroup defaultValue='1'>
                    <HStack spacing='16' > 
                        <Radio value='1'>Yes</Radio>
                        <Radio value='2'>No</Radio>
                    </HStack>
                </RadioGroup>
                <FormHelperText>Select Only One</FormHelperText>
            </FormControl>

            <FormControl as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    Do You Have Healthcare?
                </FormLabel>
                <RadioGroup defaultValue='1'>
                    <HStack spacing='16' > 
                        <Radio value='1'>Yes</Radio>
                        <Radio value='2'>No</Radio>
                    </HStack>
                </RadioGroup>
                <FormHelperText>Select Only One</FormHelperText>
            </FormControl>

            <FormControl as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    Does Your Family Have a History of Drug Abuse?
                </FormLabel>
                <RadioGroup defaultValue='1'>
                    <HStack spacing='16' > 
                        <Radio value='1'>Yes</Radio>
                        <Radio value='2'>No</Radio>
                    </HStack>
                </RadioGroup>
                <FormHelperText>Select Only One</FormHelperText>
            </FormControl>

            <FormControl as='fieldset'>
            <VStack align='stretch' spacing='20px'>
                <FormLabel as='legend' htmlFor={null}>
                        Age?
                    </FormLabel>
                    <Slider aria-label='ageSlider' onChange={(val) => setAgeSliderValue(val)}>

                        <SliderMark
                        value={ageSliderValue}
                        textAlign='center'
                        bg='blue.500'
                        color='white'
                        mt='-10'
                        ml='-5'
                        w='12'
                        >
                        {ageSliderValue}
                        </SliderMark>
                        <SliderTrack>
                        <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                <FormHelperText>Please Indicate</FormHelperText>
            </VStack>
            </FormControl>

            <FormControl as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    What race or ethnicity best describes you?
                </FormLabel>
                <RadioGroup defaultValue='1'>
                    <HStack spacing='16' >
                        <VStack spacing='24px' align='stretch'>
                        <Radio value='1'>American Indian or Alaskan Native</Radio>
                        <Radio value='2'>Asian / Pacific Islander</Radio>
                        <Radio value='3'>Black or African American</Radio>
                        <Radio value='4'>Hispanic</Radio>
                        </VStack>
                        <VStack spacing='24px' align='stretch'>
                        <Radio value='5'>White / Caucasian</Radio>
                        <Radio value='6'>Hispanic</Radio>
                        <Radio value='7'>Multiple / Other</Radio>
                        </VStack>
                    </HStack>
                </RadioGroup>
                <FormHelperText>Select Only One</FormHelperText>
            </FormControl>

            


        </VStack> {/* END OF QUESTIONS */}



        <Button 
         isLoading={showLoader}
         loadingText='Predicting...'
         as='button'
         colorScheme='green'
         size='md' 
         onClick={onPrediction}>
          Make Prediction
        </Button>


      </VStack>
    </ChakraProvider>
	)
};
    
export default Home;



