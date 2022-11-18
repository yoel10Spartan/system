import { Box, Button, Divider, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useState } from 'react'

const users = [
    {
        id: 1,
        name: "Hugo Ulin Perez",
        active: true,
        sucursal: 'XXXXXXXXX'
    },
    {
        id: 2,
        name: "Nando Sanchez Rivera",
        active: true,
        sucursal: 'XXXXXXXXX'
    },
    {
        id: 3,
        name: "Brayant Frugtosa Lopez",
        active: true,
        sucursal: 'XXXXXXXXX'
    },
    {
        id: 4,
        name: "Giovanni Arroyo Rodriguez",
        active: true,
        sucursal: 'XXXXXXXXX'
    },
    {
        id: 5,
        name: "Eduardo Franco Mejia",
        active: true,
        sucursal: 'XXXXXXXXX'
    }
]

const gifts = [
    {
        id: 1,
        name: "Television",
        active: true
    },
    {
        id: 2,
        name: "Estufa Mabe",
        active: true
    },
    {
        id: 3,
        name: "Jetta 2023",
        active: true
    },
    {
        id: 4,
        name: "Viaje a las vegas",
        active: true
    },
    {
        id: 5,
        name: "Casa en Cancun",
        active: true
    },
]

const Sorted = () => {

    const [giftsItems, setGiftsItems] = useState(gifts)
    const [userItems, setUserItems] = useState(users)
    const [winners, setwinners] = useState([])
    const [currentWinner, setCurrentWinner] = useState([])

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const handleRemoveItems = (idGift, idUser) => {
        setGiftsItems(items => items.filter(item => item.id !== idGift ? item : null))
        setUserItems(items => items.filter(item => item.id !== idUser ? item : null))
    }

    const handleSorted = () => {
        const gift = giftsItems[getRandomInt(giftsItems.length-1)] || {}
        const user = userItems[getRandomInt(userItems.length-1)] || {}
        setwinners(items => [...items, [user, gift]])
        setCurrentWinner([user, gift])
        handleRemoveItems(gift.id, user.id)
    }

    return (
        <Box
            display='flex'
            justifyContent='center'
            flexDirection='column'
            alignItems='center'
            height='100%'
            padding='20px'
            color='#fff !important'
        >
            <Text
                fontSize='30px'
                fontWeight='600'
                textAlign='center'
                m='20px 0'
            >
                Sorteo Posada EA 2022
            </Text>
            <Button
                w='300px'
                h='70px'
                background='#873600'
                color='#fff'
                _hover={{
                    background: '#A04000',
                    color: '#fff'
                }}
                m='20px 0'
                onClick={() => handleSorted()}
                disabled={(giftsItems.length === 0) || (userItems.length === 0)}
            >
                SUERTE
            </Button>

            { ((giftsItems.length === 0) || (userItems.length === 0)) && (
                <Text
                    margin='30px'
                >
                    Ya no hay usuarios o regalos
                </Text>
            )}

            { (currentWinner.length === 0) && (
                <Text
                    margin='30px'
                >
                    ¡Haz un sorteo!
                </Text>
            )}

            {
                (currentWinner.length > 0) && (
                    <TableContainer w='100%' m='30px 0'>
                        <Table variant='simple'>
                            <Thead>
                            <Tr>
                                <Th color='#fff'  isNumeric>Consecutivo</Th>
                                <Th color='#fff' isNumeric>ID</Th>
                                <Th color='#fff' >Nombre</Th>
                                <Th color='#fff' >Sucursal</Th>
                                <Th color='#fff' >Premio</Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td isNumeric>{winners.length}</Td>
                                    <Td isNumeric>{currentWinner[0].id}</Td>
                                    <Td>{currentWinner[0].name}</Td>
                                    <Td>{currentWinner[0].sucursal}</Td>
                                    <Td>{currentWinner[1].name}</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                ) 
            }

            <Divider orientation='horizontal' />

            <Text
                fontSize='20px'
                fontWeight='600'
                textAlign='center'
                m='20px 0'
                background='#F1C40F'
                p='20px 90px'
                borderRadius='10px'
            >
                GANADORES
            </Text>

            { (winners.length === 0) && (
                <Text
                    margin='30px'
                >
                    ¡Aun no hay ganadores!
                </Text>
            )}

            {
                (winners.length > 0) && (
                    <TableContainer w='100%' m='30px 0'>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th color='#fff'  isNumeric>Consecutivo</Th>
                                    <Th color='#fff'  isNumeric>ID</Th>
                                    <Th color='#fff'  >Nombre</Th>
                                    <Th color='#fff' >Sucursal</Th>
                                    <Th color='#fff' >Premio</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    winners.map((item, i) => (
                                        <Tr>
                                            <Td isNumeric>{i+1}</Td>
                                            <Td isNumeric>{item[0].id}</Td>
                                            <Td>{item[0].name}</Td>
                                            <Td>{item[0].sucursal}</Td>
                                            <Td>{item[1].name}</Td>
                                        </Tr>
                                    ))
                                }
                            </Tbody>
                        </Table>
                    </TableContainer>
                )
            }
        </Box>
    )
}

export default Sorted