import { siteLogo, siteTitle } from "@/constants"
import {
    Code,
    HStack,
    Heading,
    Text,
    VStack,
    useColorMode,
} from "@chakra-ui/react"
import NextImage from "next/image"
import Banner from "../components/Banner"
import Layout from "../components/Layout"

export default function Home() {
    const { colorMode } = useColorMode()

    return (
        <Layout pageTitle="Home" pageDescription="This is the home page.">
            <Banner>
                <HStack spacing={6}>
                    <NextImage
                        src={siteLogo}
                        alt={siteTitle}
                        width={128}
                        height={128}
                    />
                    <Heading size="3xl">{siteTitle}</Heading>
                </HStack>
            </Banner>
            <VStack
                maxW="container.lg"
                mx="auto"
                spacing={6}
                align="start"
                bg={
                    colorMode === "light"
                        ? "whiteAlpha.500"
                        : "blackAlpha.500"
                }
                backdropFilter={"blur(8px)"}
                p={6}
                rounded="md"
                shadow="md"
            >
                <Heading>NextJS + TypeScript + Chakra UI</Heading>
                <Text fontSize="lg">
                    A starter template for building NextJS applications with
                    TypeScript and Chakra UI featuring a custom theme, custom
                    components, site constants, and more.
                </Text>
                <Text>
                    Get started by editing <Code>pages/index.ts</Code>
                </Text>
            </VStack>
        </Layout>
    )
}
