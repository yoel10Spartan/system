import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Sorted from './Sorted'
import logo from '../assets/logo.png'
import esferas from '../assets/esferas_gda.png'

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
                src={logo} 
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
            <Image src={esferas} />
        </Box>
    )
}

export default Home