import {
    Box,
    Center,
    Heading,
    ListItem,
    Text,
    UnorderedList,
    useColorMode,
} from "@chakra-ui/react"
import Layout from "./components/Layout"

export default function About() {
    const { colorMode } = useColorMode()
    return (
        <Layout
            pageTitle="About"
            pageDescription="This is the about page."
            maxContentWidth="container.lg"
        >
            <Heading>About the NextJS Starter Template</Heading>
            <Text>
                This NextJS Starter Template is designed to provide you with a
                solid and customizable foundation for your NextJS projects. It
                includes several preconfigured features, with a host of options
                that you can tailor to suit your needs.
            </Text>
            <Box
                w="full"
                maxW="container.md"
                bg={colorMode === "light" ? "whiteAlpha.500" : "blackAlpha.500"}
                backdropFilter={"blur(8px)"}
                p={6}
                rounded="md"
                shadow="md"
            >
                <UnorderedList>
                    <ListItem>
                        NextJS and TypeScript — Utilize the power of these
                        leading technologies for building scalable, server-side
                        rendered React applications with type safety.
                    </ListItem>
                    <ListItem>
                        Chakra UI — Leverage this simple, modular and accessible
                        component library for React applications. Additional
                        features include:
                    </ListItem>
                    <UnorderedList>
                        <ListItem>Pre-setup support for custom fonts</ListItem>
                        <ListItem>Pre-setup support for color modes</ListItem>
                        <ListItem>
                            A custom theme that you can tailor to your brand
                        </ListItem>
                    </UnorderedList>
                    <ListItem>
                        Custom Components — A set of reusable components
                        including:
                    </ListItem>
                    <UnorderedList>
                        <ListItem>Layout</ListItem>
                        <ListItem>Navbar</ListItem>
                        <ListItem>Footer</ListItem>
                        <ListItem>Banner</ListItem>
                    </UnorderedList>
                    <ListItem>
                        Project Constants — Define and manage important
                        site-wide constants like:
                    </ListItem>
                    <UnorderedList>
                        <ListItem>Site URL</ListItem>
                        <ListItem>Site Title</ListItem>
                        <ListItem>Site Icon</ListItem>
                        <ListItem>Site Logo</ListItem>
                        <ListItem>Site OG Image</ListItem>
                        <ListItem>Twitter Handle</ListItem>
                        <ListItem>GitHub Handle</ListItem>
                        <ListItem>Navigation Routes</ListItem>
                        <ListItem>
                            Social Links: Automatically set up social links
                            based on the handles you provide.
                        </ListItem>
                    </UnorderedList>
                    <ListItem>
                        Chakra Icons and React Icons — These libraries come
                        pre-installed for your convenience.
                    </ListItem>
                    <ListItem>
                        Theme Constants — Tailor the visual aspects of your site
                        with these settings:
                    </ListItem>
                    <UnorderedList>
                        <ListItem>
                            Brand Colors: Choose whether to use the default or
                            your brand colors.
                        </ListItem>
                        <ListItem>
                            Default Color Mode: Choose a specific color mode
                            (light, dark, or system) as default.
                        </ListItem>
                        <ListItem>
                            Toggleable Color Mode: Choose whether to allow users
                            to switch between color modes.
                        </ListItem>
                    </UnorderedList>
                </UnorderedList>
            </Box>
            <Center
                w="full"
                maxW="container.md"
                bg={colorMode === "light" ? "whiteAlpha.500" : "blackAlpha.500"}
                backdropFilter={"blur(8px)"}
                p={6}
                rounded="md"
                shadow="md"
                height='100vh'
            >
                <Heading>Block to Test Scroll Effects</Heading>
            </Center>
        </Layout>
    )
}
