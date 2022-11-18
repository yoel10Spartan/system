import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Sorted from './Sorted'

const Home = () => {
    return (
        <Box
            w='100%'
            height='100%'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
        >
            <Image 
                src='https://raw.githubusercontent.com/yoel10Spartan/system-posada/main/src/assets/logo.png' 
                w='300px'
                h='335px'
                margin='40px'    
            />
            <Box
                bg='rgba(35, 155, 86)'
                w='900px'
            >
                <Sorted />
            </Box>
            <Image src='https://raw.githubusercontent.com/yoel10Spartan/system-posada/main/src/assets/esferas_gda.png' />
        </Box>
    )
}

export default Home