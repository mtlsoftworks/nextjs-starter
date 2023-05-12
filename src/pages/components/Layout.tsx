import {
    colorModeIsToggleable,
    siteIconPublicUrl,
    siteNavIcons,
    siteNavRoutes,
    siteOGImagePublicUrl,
    siteTitle,
    siteUrl,
    twitterHandle,
} from "@/constants"
import { Flex, VStack } from "@chakra-ui/react"
import Head from "next/head"
import Footer from "./Footer"
import Navbar from "./Navbar"

interface LayoutProps {
    pageTitle: string
    pageDescription: string
    maxContentWidth?: string | number
    children: React.ReactNode
}

const Layout = ({
    pageTitle,
    pageDescription,
    maxContentWidth,
    children,
}: LayoutProps) => {
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

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content={`${pageTitle} | ${siteTitle}`}
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:image" content={`${siteOGImagePublicUrl}`} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:site_name" content={siteTitle} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                {twitterHandle && (
                    <meta name="twitter:site" content={twitterHandle} />
                )}
                <meta
                    name="twitter:title"
                    content={`${pageTitle} | ${siteTitle}`}
                />
                <meta name="twitter:description" content={pageDescription} />
                <meta
                    name="twitter:image"
                    content={`${siteOGImagePublicUrl}`}
                />
            </Head>
            <Flex flexDirection="column" w="full" minH="100vh" align="center">
                <Navbar
                    navRoutes={siteNavRoutes}
                    navIcons={siteNavIcons}
                    displaySiteTitle
                    displaySiteIcon
                    displayColorModeToggle={colorModeIsToggleable}
                    blurBehind
                    bgOnScroll
                    shadow="md"
                    shadowOnScroll
                    variant="sticky"
                />
                <VStack
                    maxW={maxContentWidth}
                    mx={"auto"}
                    p={6}
                    spacing={4}
                    flex={1}
                >
                    {children}
                </VStack>
                <Footer
                    sections={[
                        {
                            title: "Sitemap",
                            navRoutes: siteNavRoutes,
                        },
                        {
                            title: "Socials",
                            navIcons: siteNavIcons,
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
