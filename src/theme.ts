import { ThemeConfig, defineStyleConfig, extendTheme } from "@chakra-ui/react"

const config: ThemeConfig = {
    initialColorMode: "system",
    useSystemColorMode: true,
}

const fonts = {
    heading: "var(--font-inter)",
    body: "var(--font-inter)",
}

const Link = defineStyleConfig({
    variants: {
        nav: {
            fontSize: "lg",
            fontWeight: "light",
            opacity: 0.8,
            transition: "all 0.2s ease-in-out",
            _hover: {
                opacity: 1,
                paddingBottom: 1,
                textDecoration: "none",
            },
        },
        navActive: {
            fontSize: "lg",
            fontWeight: "light",
            cursor: "default",
            _hover: {
                textDecoration: "none",
            },
        },
    },
})

const Button = defineStyleConfig({
    variants: {
        nav: {
            background: "none",
            padding: 0,
            opacity: 0.8,
            transition: "all 0.2s ease-in-out",
            _hover: {
                opacity: 1,
            },
        },
    },
})

const components = {
    Link,
    Button,
}

const theme = extendTheme({
    config,
    fonts,
    components,
})

export default theme
