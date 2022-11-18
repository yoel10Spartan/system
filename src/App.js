import React from 'react'
import Sorted from './components/Sorted'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './components/Home'

const App = () => {
    return (
        <ChakraProvider>
            {/* <Sorted /> */}
            <Home />
        </ChakraProvider>
    )
}

export default App