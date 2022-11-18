import React from 'react'
import Sorted from './components/Sorted'
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
    return (
        <ChakraProvider>
            <Sorted />
        </ChakraProvider>
    )
}

export default App