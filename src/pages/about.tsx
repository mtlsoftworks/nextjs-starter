import {
    Box,
    Center,
    Code,
    Heading,
    ListItem,
    Text,
    UnorderedList,
} from "@chakra-ui/react"
import Layout from "./components/Layout"

export default function About() {
    return (
        <Layout pageTitle="About" pageDescription="This is the about page.">
            <Heading>How to Use</Heading>
            <Text>
                This template is designed to be a starting point for NextJS
                projects. It includes the following:
            </Text>
            <UnorderedList>
                <ListItem>NextJS</ListItem>
                <ListItem>TypeScript</ListItem>
                <ListItem>Chakra UI with</ListItem>
                <UnorderedList>
                    <ListItem>Support for Custom Fonts</ListItem>
                    <ListItem>Support for Color Modes</ListItem>
                    <ListItem>Custom Theme</ListItem>
                </UnorderedList>
                <ListItem>Custom Components</ListItem>
                <UnorderedList>
                    <ListItem>Layout</ListItem>
                    <ListItem>Navbar</ListItem>
                    <ListItem>Footer</ListItem>
                </UnorderedList>
                <ListItem>Project Constants</ListItem>
                <UnorderedList>
                    <ListItem>Site Title</ListItem>
                    <ListItem>Site Icon</ListItem>
                    <ListItem>Site Nav Routes</ListItem>
                </UnorderedList>
                <ListItem>Chakra Icons and React Icons Pre-Installed</ListItem>
            </UnorderedList>
            <Center height="100vh" bg="gray" w="full" rounded="lg">
                <Heading>Scroll Test Block</Heading>
            </Center>
        </Layout>
    )
}
