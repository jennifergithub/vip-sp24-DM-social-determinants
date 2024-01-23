import React, { useState } from 'react';
import { screen } from '@testing-library/react';
import App from '../App.js';
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
import { theme }from './themeFile.js';

const Lower = () => {


    
        return (
        <ChakraProvider name="results" theme={theme} >
          <VStack spacing='10' bg="brand.300">
            <Text>Welcome to the website</Text>
    
          </VStack>
        </ChakraProvider>
        )
    };
        
    export default Lower;
    
    
    
    