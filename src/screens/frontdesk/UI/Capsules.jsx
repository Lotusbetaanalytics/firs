import React from 'react'
import styles from './styles.module.css'
import { Box, Badge, Image } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const Capsules = ({ user, url }) => {
    return (
        <>
            <div className={styles.capusles}>
                {/* <Link to={`/frontdesk/guest/${user._id}`}> */}
                <Link to={`/frontdesk/${url}`}>
                    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <Image src={user && user.photo} alt={user && user._id} />

                        <Box p="6">
                            <Box d="flex" alignItems="baseline">
                                <Box
                                    color="gray.500"
                                    fontWeight="semibold"
                                    letterSpacing="wide"
                                    as="h4"
                                    textTransform="uppercase"
                                >
                                    Name: {user && user.user.fullname}
                                </Box>
                            </Box>

                            <Box
                                mt="1"
                                as="span"
                                lineHeight="tight"
                                isTruncated
                            >
                                Company: {user && user.user.company}
                            </Box>

                            <Box>
                                {user && user.name}
                                <Box as="span" color="gray.600" mt="1" lineHeight="tight"
                                    isTruncated>
                                    Email:  {user && user.user.email}
                                </Box>
                            </Box>

                            <Box mt="1" alignItems="center">
                                <Box as="span" color="gray.600" fontSize="sm">
                                    Mobile:  {user && user.user.mobile}
                                </Box>
                            </Box>
                            <Box mt="1" alignItems="center">
                                <Badge borderRadius="full" px="2" colorScheme="teal">
                                    Status:  {user && user.status}
                                </Badge>
                            </Box>
                        </Box>
                    </Box>
                </Link>
            </div>
        </>
    )
}

export default Capsules
