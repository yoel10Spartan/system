import { Box, Button, Divider, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useState } from 'react'

const users = [
    {
        id: 1,
        name: "Hugo Ulin Perez",
        active: true
    },
    {
        id: 2,
        name: "Nando Sanchez Rivera",
        active: true
    },
    {
        id: 3,
        name: "Brayant Frugtosa Lopez",
        active: true
    },
    {
        id: 4,
        name: "Giovanni Arroyo Rodriguez",
        active: true
    },
    {
        id: 5,
        name: "Eduardo Franco Mejia",
        active: true
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
                background='#28B463'
                color='#fff'
                _hover={{
                    background: '#2ECC71',
                    color: '#fff'
                }}
                m='20px 0'
                onClick={() => handleSorted()}
                disabled={(giftsItems.length === 0) || (userItems.length === 0)}
            >
                Comenzar
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
                                <Th isNumeric>ID</Th>
                                <Th>Nombre</Th>
                                <Th>Premio</Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td isNumeric>{currentWinner[0].id}</Td>
                                    <Td>{currentWinner[0].name}</Td>
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
            >
                Ganadores
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
                                    <Th isNumeric>ID</Th>
                                    <Th>Nombre</Th>
                                    <Th>Premio</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    winners.map(item => (
                                        <Tr>
                                            <Td isNumeric>{item[0].id}</Td>
                                            <Td>{item[0].name}</Td>
                                            <Td>{item[1].name}</Td>
                                        </Tr>
                                    ))
                                }
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th isNumeric>ID</Th>
                                    <Th>Nombre</Th>
                                    <Th>Premio</Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>
                )
            }
        </Box>
    )
}

export default Sorted