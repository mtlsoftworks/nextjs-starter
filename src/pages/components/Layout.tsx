import Head from "next/head"
import { siteTitle, siteIconPublicUrl } from "@/constants"
import { Flex, VStack } from "@chakra-ui/react"
import Navbar from "./Navbar"

interface LayoutProps {
    pageTitle: string
    pageDescription: string
    children: React.ReactNode
}

const Layout = ({ pageTitle, pageDescription, children }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>{`${pageTitle} | ${siteTitle}`}</title>
                <meta name="description" content={pageDescription} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href={siteIconPublicUrl} />
            </Head>
            <Flex flexDirection="column" w="full" minH="100vh" align="center">
                <Navbar
                    navRoutes={[{ name: "Home", path: "/" }]}
                    displaySiteTitle
                    displaySiteIcon
                    displayColorModeToggle
                />
                <VStack p={6} spacing={4}>
                    {children}
                </VStack>
            </Flex>
        </>
    )
}

export default Layout
