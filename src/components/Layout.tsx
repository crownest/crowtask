import { Box, Flex, HStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import { useState } from 'react';
import { GoChevronRight } from 'react-icons/go';
import { AnimatePresence, motion } from 'framer-motion';
import NavBar from './NavBar';

export default function Layout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <>
            <Flex w="100%" bg="gray.200" h="48px">
                <NavBar />
            </Flex>
            <HStack
                w="full"
                position="static"
                h="calc(100vh - 48px)"
                sx={{
                    'background-image':
                        'url(https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1440x1920/a7fc7de2efa3a6089639cb55a8678227/photo-1690692322953-fb0f543c6658.jpg)',
                }}
                bgSize={'cover'}
                bgPosition={'center'}
                bgRepeat={'no-repeat'}
                gap={isSidebarOpen ? 0 : 4}
            >
                <AnimatePresence>
                    <Flex
                        as="aside"
                        w="full"
                        h="full"
                        maxW={isSidebarOpen ? 260 : 0}
                        alignItems="start"
                    >
                        {isSidebarOpen && (
                            <motion.div
                                initial={{ opacity: 0, x: -260 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                exit={{ opacity: 0, x: -260 }}
                                transition={{
                                    type: 'just',
                                }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            >
                                <Box
                                    w="full"
                                    h="full"
                                    style={
                                        isSidebarOpen
                                            ? { display: 'block' }
                                            : { display: 'none' }
                                    }
                                >
                                    <SideBar
                                        setIsSidebarOpen={setIsSidebarOpen}
                                    />
                                </Box>
                            </motion.div>
                        )}

                        {!isSidebarOpen ? (
                            <motion.div
                                initial={{ opacity: 0, display: 'none' }}
                                animate={{
                                    opacity: 1,
                                    display: 'block',
                                }}
                                exit={{ opacity: 0, display: 'none' }}
                                transition={{
                                    type: 'just',
                                }}
                            >
                                <Box
                                    cursor={'pointer'}
                                    w={'4'}
                                    h="calc(100vh - 48px)"
                                    bg="rgba(22, 26, 29, 0.99);"
                                    position="static"
                                    top={0}
                                    left={0}
                                    onClick={() => setIsSidebarOpen(true)}
                                >
                                    <Box
                                        w="28px"
                                        h="28px"
                                        bg="rgba(22, 26, 29, 0.99);"
                                        position="absolute"
                                        top={20}
                                        left={2}
                                        borderRadius={'100%'}
                                        border={'1px solid #FFFFFF70'}
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                        display={'flex'}
                                        cursor={'pointer'}
                                        zIndex={1}
                                    >
                                        <GoChevronRight
                                            size={16}
                                            color="#fff"
                                        />
                                    </Box>
                                </Box>
                            </motion.div>
                        ) : null}
                    </Flex>
                    <motion.div
                        initial={{ opacity: 0, x: -260 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        exit={{ opacity: 0, x: -260 }}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <Flex as="main" w="full" h="full">
                            <Outlet />
                        </Flex>
                    </motion.div>
                </AnimatePresence>
            </HStack>
        </>
    );
}
