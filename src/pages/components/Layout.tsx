import Head from "next/head"
import { siteTitle } from "@/constants"
import { Flex, VStack } from "@chakra-ui/react"

interface LayoutProps {
    pageTitle: string
    pageDescription: string
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({
    pageTitle,
    pageDescription,
    children,
}) => {
    return (
        <>
            <Head>
                <title>{`${pageTitle} | ${siteTitle}`}</title>
                <meta name="description" content={pageDescription} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Flex w="full" minH="100vh" justify="center">
                <VStack p={6} spacing={4}>
                    {children}
                </VStack>
            </Flex>
        </>
    )
}

export default Layout
