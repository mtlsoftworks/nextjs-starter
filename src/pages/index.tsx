import { siteLogo, siteTitle } from "@/constants"
import { Code, HStack, Heading, Text } from "@chakra-ui/react"
import NextImage from "next/image"
import Banner from "./components/Banner"
import Layout from "./components/Layout"

export default function Home() {
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
            <Heading>
                NextJS + Chakra UI + TypeScript + Custom Components
            </Heading>
            <Text>
                Get started by editing <Code>pages/index.ts</Code>
            </Text>
        </Layout>
    )
}
