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
            borderTop: "1px solid transparent",
            borderBottom: "1px solid transparent",
            opacity: 0.9,
            transition: "all 0.2s ease-in-out",
            _hover: {
                borderBottom: "1px solid",
                opacity: 1,
                textDecoration: "none",
            },
        },
        navActive: {
            fontSize: "lg",
            fontWeight: "light",
            borderTop: "1px solid transparent",
            borderBottom: "1px solid",
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
            border: "1px solid transparent",
            opacity: 0.9,
            transition: "all 0.2s ease-in-out",
            rounded: "full",
            _hover: {
                border: "1px solid",
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
