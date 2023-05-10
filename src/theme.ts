import { ThemeConfig, extendTheme } from "@chakra-ui/react"

const config: ThemeConfig = {
    initialColorMode: "system",
    useSystemColorMode: true,
}

const fonts = {
    heading: 'var(--font-inter)',
    body: 'var(--font-inter)',
}

const theme = extendTheme({
    config,
    fonts,
})

export default theme