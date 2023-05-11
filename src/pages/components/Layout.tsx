import Head from "next/head"
import { siteTitle, siteIconPublicUrl, siteNavRoutes } from "@/constants"
import { Flex, VStack } from "@chakra-ui/react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { FaGithub } from "react-icons/fa"

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
                    navRoutes={siteNavRoutes}
                    displaySiteTitle
                    displaySiteIcon
                    displayColorModeToggle
                    blurBehind
                    bgOnScroll
                    shadow="md"
                    shadowOnScroll
                    variant="sticky"
                />
                <VStack p={6} spacing={4} flex={1}>
                    {children}
                </VStack>
                <Footer
                    sections={[
                        {
                            title: "Sitemap",
                            navRoutes: [
                                { name: "Home", path: "/" },
                                { name: "About", path: "/about" },
                            ],
                        },
                        {
                            title: "Socials",
                            navIcons: [
                                {
                                    name: "GitHub",
                                    path: "https://github.com",
                                    icon: <FaGithub />,
                                },
                            ],
                        },
                    ]}
                    displaySiteTitle
                    displayCopyRight
                />
            </Flex>
        </>
    )
}

export default Layout
