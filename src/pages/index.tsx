import { Code, Heading, Text } from "@chakra-ui/react"
import Layout from "./components/Layout"

export default function Home() {
    return (
        <Layout pageTitle="Home Page" pageDescription="This is the home page">
            <Heading>
                NextJS + Chakra UI + TypeScript + Custom Components
            </Heading>
            <Text>
                Get started by editing <Code>pages/index.ts</Code>
            </Text>
        </Layout>
    )
}
