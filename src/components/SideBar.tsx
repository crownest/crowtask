import {
    Box,
    Divider,
    Flex,
    IconButton,
    Image,
    Spacer,
    Text,
} from '@chakra-ui/react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { SiGoogleanalytics } from 'react-icons/si';
import {
    AiOutlineUser,
    AiOutlinePlus,
    AiOutlineTable,
    AiOutlineStar,
} from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { BsThreeDots } from 'react-icons/bs';
import { GoChevronDown } from 'react-icons/go';
import { VscCalendar } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

interface SideBarProps {
    setIsSidebarOpen: (value: boolean) => void;
}

export default function SideBar({ setIsSidebarOpen }: SideBarProps) {
    const handleClose = () => {
        setIsSidebarOpen(false);
    };

    return (
        <Flex
            as="aside"
            w="full"
            h="full"
            bg="rgba(22, 26, 29, 0.99);"
            opacity={0.9}
            alignItems="center"
            flexDir="column"
            py={6}
        >
            <Box w="full">
                <Flex
                    w="full"
                    alignItems="center"
                    justifyContent="center"
                    px={4}
                >
                    <Link to="/">
                        <Box
                            w="32px"
                            h="32px"
                            bgGradient="linear(to-b, #4BCE97, #216E4E)"
                            alignItems="center"
                            justifyContent="center"
                            display="flex"
                            borderRadius={6}
                        >
                            <Text fontWeight="bold" fontSize={18}>
                                T
                            </Text>
                        </Box>
                    </Link>
                    <Box flex={1} ml={2}>
                        <Flex flexDirection="column">
                            <Text
                                fontSize="15px"
                                fontWeight="semibold"
                                color={'gray.400'}
                            >
                                Test
                            </Text>
                            <Spacer />
                            <Text
                                fontSize="12px"
                                fontWeight="normal"
                                color={'gray.400'}
                            >
                                Free
                            </Text>
                        </Flex>
                    </Box>
                    <IconButton
                        bg="#27252150"
                        border="1px solid transparent"
                        _hover={{
                            bg: '#23232580',
                            border: '1px solid black',
                        }}
                        color={'white'}
                        aria-label="Menu Collapse"
                        icon={<MdKeyboardArrowLeft />}
                        fontSize={20}
                        onClick={handleClose}
                    />
                </Flex>
                <Divider my={4} w="full" borderColor={'whiteAlpha.400'} />

                <Flex pt="12px" flexDir="column" gap="2px">
                    <Link to="/">
                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            _hover={{
                                bg: '#484643',
                            }}
                            bg="transparent"
                            px={4}
                            py={1}
                        >
                            <Box display="flex" alignItems="center">
                                <SiGoogleanalytics size={18} color="#8c9bab" />

                                <Text
                                    color="#8c9bab"
                                    ml={2}
                                    fontWeight="semibold"
                                    fontSize="14px"
                                >
                                    Boards
                                </Text>
                            </Box>
                        </Flex>
                    </Link>

                    <Link to="/">
                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            _hover={{
                                bg: '#484643',
                            }}
                            bg="transparent"
                            px={4}
                            py={1}
                        >
                            <Box display="flex" alignItems="center">
                                <AiOutlineUser size={18} color="#8c9bab" />

                                <Text
                                    color="#8c9bab"
                                    ml={2}
                                    fontWeight="semibold"
                                    fontSize="14px"
                                >
                                    Members
                                </Text>
                            </Box>

                            <Box
                                bgGradient="transparent"
                                p={1}
                                _hover={{
                                    bg: '#232325',
                                }}
                                alignItems="center"
                                justifyContent="center"
                                display="flex"
                                borderRadius={3}
                            >
                                <AiOutlinePlus size={16} color="#8c9bab" />
                            </Box>
                        </Flex>
                    </Link>

                    <Link to="/">
                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            _hover={{
                                bg: '#484643',
                            }}
                            bg="transparent"
                            px={4}
                            py={1}
                        >
                            <Box display="flex" alignItems="center">
                                <FiSettings size={18} color="#8c9bab" />

                                <Text
                                    color="#8c9bab"
                                    ml={2}
                                    fontWeight="semibold"
                                    fontSize="14px"
                                >
                                    Workspace Settings
                                </Text>
                            </Box>

                            <Box
                                bgGradient="transparent"
                                p={1}
                                _hover={{
                                    bg: '#232325',
                                }}
                                alignItems="center"
                                justifyContent="center"
                                display="flex"
                                borderRadius={3}
                            >
                                <GoChevronDown size={16} color="#8c9bab" />
                            </Box>
                        </Flex>
                    </Link>

                    <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        bg="transparent"
                        px={4}
                        py={1}
                        mt={2}
                    >
                        <Box display="flex" alignItems="center">
                            <Text
                                color="#8c9bab"
                                fontWeight="semibold"
                                fontSize="14px"
                            >
                                Workspace Reviews
                            </Text>
                        </Box>
                    </Flex>

                    <Link to="/">
                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            _hover={{
                                bg: '#484643',
                            }}
                            role="group"
                            bg="transparent"
                            px={4}
                            h={8}
                            py={1}
                        >
                            <Box display="flex" alignItems="center">
                                <AiOutlineTable size={18} color="#8c9bab" />

                                <Text
                                    color="#8c9bab"
                                    ml={2}
                                    fontWeight="semibold"
                                    fontSize="14px"
                                >
                                    Table
                                </Text>
                            </Box>

                            <Box
                                bgGradient="transparent"
                                p={1}
                                _hover={{
                                    bg: '#232325',
                                }}
                                display="none"
                                alignItems="center"
                                justifyContent="center"
                                borderRadius={3}
                                _groupHover={{
                                    display: 'flex',
                                }}
                            >
                                <BsThreeDots size={16} color="#8c9bab" />
                            </Box>
                        </Flex>
                    </Link>

                    <Link to="/">
                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            _hover={{
                                bg: '#484643',
                            }}
                            role="group"
                            bg="transparent"
                            px={4}
                            h={8}
                            py={1}
                        >
                            <Box display="flex" alignItems="center">
                                <VscCalendar size={18} color="#8c9bab" />

                                <Text
                                    color="#8c9bab"
                                    ml={2}
                                    fontWeight="semibold"
                                    fontSize="14px"
                                >
                                    Calendar
                                </Text>
                            </Box>

                            <Box
                                bgGradient="transparent"
                                p={1}
                                _hover={{
                                    bg: '#232325',
                                }}
                                display="none"
                                alignItems="center"
                                justifyContent="center"
                                borderRadius={3}
                                _groupHover={{
                                    display: 'flex',
                                }}
                            >
                                <BsThreeDots size={16} color="#8c9bab" />
                            </Box>
                        </Flex>
                    </Link>

                    <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        bg="transparent"
                        px={4}
                        py={1}
                        h={8}
                        mt={2}
                        role="group"
                    >
                        <Box display="flex" alignItems="center">
                            <Text
                                color="#8c9bab"
                                fontWeight="semibold"
                                fontSize="14px"
                            >
                                Your Boards
                            </Text>
                        </Box>

                        <Box
                            bgGradient="transparent"
                            p={1}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            borderRadius={3}
                        >
                            <Box
                                _hover={{
                                    bg: '#484643',
                                }}
                                display={'none'}
                                p={1}
                                _groupHover={{
                                    display: 'flex',
                                }}
                                borderRadius={3}
                            >
                                <BsThreeDots size={16} color="#8c9bab" />
                            </Box>

                            <Box
                                _hover={{
                                    bg: '#484643',
                                }}
                                p={1}
                                borderRadius={3}
                                ml={2}
                            >
                                <AiOutlinePlus size={16} color="#8c9bab" />
                            </Box>
                        </Box>
                    </Flex>

                    <Link to="/">
                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            _hover={{
                                bg: '#484643',
                            }}
                            role="group"
                            bg="transparent"
                            px={4}
                            h={8}
                            py={1}
                        >
                            <Box display="flex" alignItems="center">
                                <Image
                                    src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/140x79/26dc3d070f354e6bb646e67524ec97f2/photo-1690382285917-73dfd2a22d07.jpg"
                                    w={8}
                                    h={5}
                                    borderRadius={3}
                                />

                                <Text
                                    color="#8c9bab"
                                    ml={2}
                                    fontWeight="semibold"
                                    fontSize="14px"
                                >
                                    New Board
                                </Text>
                            </Box>

                            <Box
                                display="none"
                                alignItems="center"
                                justifyContent="center"
                                _groupHover={{
                                    display: 'flex',
                                }}
                            >
                                <Box
                                    _hover={{
                                        bg: '#232325',
                                    }}
                                    borderRadius={3}
                                    p={1}
                                    bg="transparent"
                                >
                                    <BsThreeDots size={16} color="#8c9bab" />
                                </Box>

                                <Box
                                    ml={5}
                                    _hover={{
                                        transform: 'scale(1.2)',
                                        transition: 'all 0.2s ease-in-out',
                                    }}
                                >
                                    <AiOutlineStar size={16} color="#8c9bab" />
                                </Box>
                            </Box>
                        </Flex>
                    </Link>

                    <Link to="/">
                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            _hover={{
                                bg: '#484643',
                            }}
                            role="group"
                            bg="transparent"
                            px={4}
                            h={8}
                            py={1}
                        >
                            <Box display="flex" alignItems="center">
                                <Image
                                    src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/75x100/a7fc7de2efa3a6089639cb55a8678227/photo-1690692322953-fb0f543c6658.jpg"
                                    w={8}
                                    h={5}
                                    borderRadius={3}
                                />

                                <Text
                                    color="#8c9bab"
                                    ml={2}
                                    fontWeight="semibold"
                                    fontSize="14px"
                                >
                                    Test Boards
                                </Text>
                            </Box>

                            <Box
                                display="none"
                                alignItems="center"
                                justifyContent="center"
                                _groupHover={{
                                    display: 'flex',
                                }}
                            >
                                <Box
                                    _hover={{
                                        bg: '#232325',
                                    }}
                                    borderRadius={3}
                                    p={1}
                                    bg="transparent"
                                >
                                    <BsThreeDots size={16} color="#8c9bab" />
                                </Box>

                                <Box
                                    ml={5}
                                    _hover={{
                                        transform: 'scale(1.2)',
                                        transition: 'all 0.2s ease-in-out',
                                    }}
                                >
                                    <AiOutlineStar size={16} color="#8c9bab" />
                                </Box>
                            </Box>
                        </Flex>
                    </Link>
                </Flex>
            </Box>
        </Flex>
    );
}
