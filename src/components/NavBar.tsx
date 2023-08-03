import {
    Box,
    Button,
    Flex,
    IconButton,
    Image,
    Input,
    Text,
} from '@chakra-ui/react';
import { CgMenuGridO } from 'react-icons/cg';
import { FaSearch } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai';
import AnalysisGIF from '../assets/icons/logo/analysis.gif';
import AnalysisPNG from '../assets/icons/logo/analysis.png';
import { useState } from 'react';
import { MdNotificationsNone, MdInfo } from 'react-icons/md';
import { FaAffiliatetheme } from 'react-icons/fa';

export default function NavBar() {
    const [searchIsOpen, setSearchIsOpen] = useState<Boolean>(false);

    return (
        <Flex
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            w="full"
            h="full"
            p="10px"
            bg="#1d2125"
            borderBottom={4}
            borderColor="#32383d"
        >
            <Flex h={'full'} alignItems="center">
                <IconButton
                    bg="#1d2125"
                    border="1px solid transparent"
                    _hover={{
                        bg: '#333c43',
                    }}
                    color={'#9fadbc'}
                    aria-label="Menu Collapse"
                    icon={<CgMenuGridO />}
                    fontSize={20}
                />

                <Button
                    bg="#1d2125"
                    border="1px solid transparent"
                    _hover={{
                        bg: '#333c43',
                    }}
                    color={'#9fadbc'}
                    role="group"
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Box
                        w="22px"
                        h="22px"
                        sx={{
                            'background-image': `url(${AnalysisPNG})`,
                            filter: 'brightness(0) saturate(100%) invert(66%) sepia(20%) saturate(225%) hue-rotate(170deg) brightness(101%) contrast(85%) !important',

                            _groupHover: {
                                'background-image': `url(${AnalysisGIF})`,
                            },
                        }}
                        bgSize={'cover'}
                        bgPosition={'center'}
                        bgRepeat={'no-repeat'}
                    ></Box>

                    <Text fontSize={18} fontWeight={'bold'} ml={2}>
                        Crowtask
                    </Text>
                </Button>

                <Flex gap={3} ml={1}>
                    <Button
                        bg="#1d2125"
                        border="1px solid transparent"
                        _hover={{
                            bg: '#333c43',
                        }}
                        color={'#9fadbc'}
                        borderRadius={'5px'}
                        p={2}
                    >
                        <Text fontSize={14} fontWeight={'normal'}>
                            Workspaces
                        </Text>

                        <Box
                            ml={2}
                            w="20px"
                            h={'full'}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <AiFillCaretDown />
                        </Box>
                    </Button>

                    <Button
                        bg="#1d2125"
                        border="1px solid transparent"
                        _hover={{
                            bg: '#333c43',
                        }}
                        color={'#9fadbc'}
                        borderRadius={'5px'}
                        p={2}
                    >
                        <Text fontSize={14} fontWeight={'normal'}>
                            Recent
                        </Text>

                        <Box
                            ml={2}
                            w="20px"
                            h={'full'}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <AiFillCaretDown />
                        </Box>
                    </Button>

                    <Button
                        bg="#1d2125"
                        border="1px solid transparent"
                        _hover={{
                            bg: '#333c43',
                        }}
                        color={'#9fadbc'}
                        borderRadius={'5px'}
                        p={2}
                    >
                        <Text fontSize={14} fontWeight={'normal'}>
                            Starred
                        </Text>

                        <Box
                            ml={2}
                            w="20px"
                            h={'full'}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <AiFillCaretDown />
                        </Box>
                    </Button>

                    <Button
                        bg="#1d2125"
                        border="1px solid transparent"
                        _hover={{
                            bg: '#333c43',
                        }}
                        color={'#9fadbc'}
                        borderRadius={'5px'}
                        p={2}
                    >
                        <Text fontSize={14} fontWeight={'normal'}>
                            Templates
                        </Text>

                        <Box
                            ml={2}
                            w="20px"
                            h={'full'}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <AiFillCaretDown />
                        </Box>
                    </Button>

                    <Button
                        bg="#579dff"
                        _hover={{
                            bg: '#85b8ff',
                        }}
                        color={'#1d2125'}
                        borderRadius={'5px'}
                    >
                        <Text fontWeight={'normal'}>Create</Text>
                    </Button>
                </Flex>
            </Flex>
            <Flex h={'full'} alignItems="center">
                <Box
                    h={'40px'}
                    w={searchIsOpen ? '800px' : '200px'}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="1px solid #32383d"
                    background={'#22272b'}
                    borderRadius={'8px'}
                >
                    <IconButton
                        bg="transparent"
                        color={'#9fadbc'}
                        _hover={{
                            bg: 'transparent',
                        }}
                        aria-label="Search"
                        icon={<FaSearch />}
                        fontSize={15}
                    />

                    <Input
                        outline="none"
                        border="none"
                        _focusVisible={{
                            outline: 'none',
                            border: 'none',
                        }}
                        onFocus={() => setSearchIsOpen(true)}
                        onBlur={() => setSearchIsOpen(false)}
                        placeholder="Search"
                        textColor={'#9fadbc'}
                    />
                </Box>

                <Flex>
                    <IconButton
                        icon={<MdNotificationsNone />}
                        aria-label="Notification"
                        bg="transparent"
                        color={'#9fadbc'}
                        _hover={{
                            bg: '#579dff',
                        }}
                        fontSize={25}
                        borderRadius={'100%'}
                    />

                    <IconButton
                        icon={<MdInfo />}
                        aria-label="Information"
                        bg="transparent"
                        color={'#9fadbc'}
                        _hover={{
                            bg: '#579dff',
                        }}
                        fontSize={25}
                        borderRadius={'100%'}
                    />

                    <IconButton
                        icon={<FaAffiliatetheme />}
                        aria-label="Theme"
                        bg="transparent"
                        color={'#9fadbc'}
                        _hover={{
                            bg: '#579dff',
                        }}
                        fontSize={25}
                        borderRadius={'100%'}
                    />

                    <Box
                        w={'40px'}
                        h={'40px'}
                        cursor={'pointer'}
                        _hover={{
                            bg: '#579dff',
                        }}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        borderRadius={'100%'}
                    >
                        <Image
                            w={'35px'}
                            h={'35px'}
                            src="https://ui-avatars.com/api/?name=Ertu%C4%9Frul+Emre+Cihan&background=0D8ABC&color=fff"
                            borderRadius="100%"
                        />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
}
