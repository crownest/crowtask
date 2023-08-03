import { Box, Button, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { AiFillCaretDown, AiOutlineStar } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { SiGoogleanalytics } from 'react-icons/si';
import { AiFillRocket } from 'react-icons/ai';
import { ImPower } from 'react-icons/im';
import { BsFilter } from 'react-icons/bs';
import { ImUserPlus } from 'react-icons/im';
import { BiDotsHorizontalRounded, BiPlus } from 'react-icons/bi';

export default function BoardsPage() {
    return (
        <Flex flexDir="column" w="full" h="full" bg={'#00000090'}>
            <Flex bg="#ffffff3d" w="full" h="56px">
                <Flex
                    flexDir="row"
                    alignItems="center"
                    justifyContent="space-between"
                    w="full"
                    h="full"
                    p="10px"
                    borderBottom={4}
                    borderColor="#32383d"
                >
                    <Flex h={'full'} alignItems="center">
                        <Flex gap={3} ml={1}>
                            <Button
                                bg="transparent"
                                border="1px solid transparent"
                                _hover={{
                                    bg: '#a68b5c',
                                }}
                                color={'#172b4d'}
                                borderRadius={'5px'}
                                p={2}
                            >
                                <Text fontSize={18} fontWeight={'bold'}>
                                    Test Boards
                                </Text>
                            </Button>

                            <Button
                                bg="transparent"
                                border="1px solid transparent"
                                _hover={{
                                    bg: '#a68b5c',
                                }}
                                color={'#172b4d'}
                                borderRadius={'5px'}
                                p={2}
                            >
                                <AiOutlineStar size={20} />
                            </Button>

                            <Button
                                bg="transparent"
                                border="1px solid transparent"
                                _hover={{
                                    bg: '#a68b5c',
                                }}
                                color={'#172b4d'}
                                borderRadius={'5px'}
                                p={2}
                            >
                                <FaUserFriends size={20} />

                                <Text
                                    fontSize={14}
                                    fontWeight={'normal'}
                                    ml={2}
                                >
                                    Workspace visible
                                </Text>
                            </Button>

                            <Button
                                bg="#1c2c48"
                                border="1px solid transparent"
                                _hover={{
                                    bg: '#333c43',
                                }}
                                color={'#fff'}
                                borderRadius={'5px'}
                                p={2}
                            >
                                <SiGoogleanalytics size={20} />

                                <Text
                                    fontSize={14}
                                    fontWeight={'normal'}
                                    ml={2}
                                >
                                    Board
                                </Text>
                            </Button>

                            <IconButton
                                icon={<AiFillCaretDown />}
                                aria-label="Notification"
                                bg="transparent"
                                color={'#333c43'}
                                _hover={{
                                    bg: '#9d8871',
                                }}
                                fontSize={25}
                            />
                        </Flex>
                    </Flex>
                    <Flex h={'full'} alignItems="center">
                        <Flex>
                            <Button
                                bg="transparent"
                                border="1px solid transparent"
                                _hover={{
                                    bg: '#a68b5c',
                                }}
                                color={'#172b4d'}
                                borderRadius={'5px'}
                                p={2}
                            >
                                <AiFillRocket size={20} />

                                <Text
                                    fontSize={14}
                                    fontWeight={'normal'}
                                    ml={2}
                                >
                                    Power-Ups
                                </Text>
                            </Button>

                            <Button
                                bg="transparent"
                                border="1px solid transparent"
                                _hover={{
                                    bg: '#a68b5c',
                                }}
                                color={'#172b4d'}
                                borderRadius={'5px'}
                                p={2}
                            >
                                <ImPower size={20} />

                                <Text
                                    fontSize={14}
                                    fontWeight={'normal'}
                                    ml={2}
                                >
                                    Automation
                                </Text>
                            </Button>

                            <Button
                                bg="transparent"
                                border="1px solid transparent"
                                _hover={{
                                    bg: '#a68b5c',
                                }}
                                color={'#172b4d'}
                                borderRadius={'5px'}
                                p={2}
                            >
                                <BsFilter size={20} />

                                <Text
                                    fontSize={14}
                                    fontWeight={'normal'}
                                    ml={2}
                                >
                                    Filter
                                </Text>
                            </Button>

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

                            <Button
                                bg="transparent"
                                border="1px solid transparent"
                                _hover={{
                                    bg: '#a68b5c',
                                }}
                                color={'#172b4d'}
                                borderRadius={'5px'}
                                p={2}
                            >
                                <ImUserPlus size={20} />

                                <Text
                                    fontSize={14}
                                    fontWeight={'normal'}
                                    ml={2}
                                >
                                    Share
                                </Text>
                            </Button>

                            <IconButton
                                icon={<BiDotsHorizontalRounded />}
                                aria-label="More"
                                bg="transparent"
                                color={'#333c43'}
                                _hover={{
                                    bg: '#9d8871',
                                }}
                                fontSize={25}
                            />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

            <Flex w={'100%'} h={'100%'} mt={2}>
                <Flex
                    bg={'#00000014'}
                    height="64px"
                    width="272px"
                    alignItems={'center'}
                    ml={3}
                    p={3}
                    rounded={'20px'}
                >
                    <Flex alignItems={'center'}>
                        <BiPlus size={20} />

                        <Text ml={4}>Add a list</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}
