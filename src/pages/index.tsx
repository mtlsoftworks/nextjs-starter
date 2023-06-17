import { siteLogo, siteTitle } from "@/constants"
import {
    Center,
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
import SlideBox from "@/components/SlideBox"

export default function Home() {
    const { colorMode } = useColorMode()

    return (
        <Layout pageTitle="Home" pageDescription="This is the home page.">
            <Banner>
                <HStack spacing={6}>
                    <Center flexGrow={1} flexShrink={1} maxW={128}>
                        <NextImage src={siteLogo} alt={siteTitle} />
                    </Center>
                    <Heading size="3xl">{siteTitle}</Heading>
                </HStack>
            </Banner>
            <SlideBox>
                <VStack w="full" spacing={6} align="start">
                    <Heading>NextJS + TypeScript + Chakra UI</Heading>
                    <Text fontSize="lg">
                        A starter template for building NextJS applications with
                        TypeScript and Chakra UI featuring a custom theme,
                        custom components, site constants, and more.
                    </Text>
                    <Text>
                        Get started by editing <Code>pages/index.ts</Code>
                    </Text>
                </VStack>
            </SlideBox>
        </Layout>
    )
}
