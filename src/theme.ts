import { extendTheme } from "@chakra-ui/react"

const fonts = {
    heading: 'var(--font-inter)',
    body: 'var(--font-inter)',
}

const theme = extendTheme({
    fonts,
})

export default theme