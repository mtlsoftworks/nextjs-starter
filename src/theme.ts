import { ThemeConfig, defineStyleConfig, extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import { useBrandColors } from "./constants"

const config: ThemeConfig = {
    initialColorMode: "system",
    useSystemColorMode: true,
}

const colors = {
    base: {
        font: {
            light: "gray.800",
            dark: "whiteAlpha.900",
        },
        primary: {
            light: "white",
            dark: "gray.900",
        },
        secondary: {
            light: "#dedede",
            dark: "gray.700",
        },
    },
    brand: {
        font: {
            light: "blue.900",
            dark: "green.50",
        },
        primary: {
            light: "green.100",
            dark: "blue.900",
        },
        secondary: {
            light: "blue.100",
            dark: "green.700",
        },
    },
}

export const gradients = {
    base: {
        body: {
            light: `linear-gradient(to-tr, ${colors.base.secondary.light}, ${colors.base.primary.light})`,
            dark: `linear-gradient(to-tr, ${colors.base.primary.dark}, ${colors.base.secondary.dark})`,
        },
    },
    brand: {
        body: {
            light: `linear-gradient(to-tr, ${colors.brand.secondary.light}, ${colors.brand.primary.light})`,
            dark: `linear-gradient(to-tr, ${colors.brand.primary.dark}, ${colors.brand.secondary.dark})`,
        },
    },
}

const styles = {
    global: (props: any) =>
        useBrandColors
            ? {
                  body: {
                      fontFamily: "body",
                      color: mode(
                          colors.brand.font.light,
                          colors.brand.font.dark
                      )(props),
                      bgGradient: mode(
                          gradients.brand.body.light,
                          gradients.brand.body.dark
                      )(props),
                      lineHeight: "base",
                  },
                  "*::placeholder": {
                      color: mode("gray.400", "whiteAlpha.400")(props),
                  },
                  "*, *::before, &::after": {
                      borderColor: mode("gray.200", "whiteAlpha.300")(props),
                      wordWrap: "break-word",
                  },
              }
            : {
                  body: {
                      fontFamily: "body",
                      color: mode(
                          colors.base.font.light,
                          colors.base.font.dark
                      )(props),
                      bgGradient: mode(
                          gradients.base.body.light,
                          gradients.base.body.dark
                      )(props),
                      lineHeight: "base",
                  },
                  "*::placeholder": {
                      color: mode("gray.400", "whiteAlpha.400")(props),
                  },
                  "*, *::before, &::after": {
                      borderColor: mode("gray.200", "whiteAlpha.300")(props),
                      wordWrap: "break-word",
                  },
              },
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
                borderBottom: "1px solid rgba(0,0,0,0.4)",
                opacity: 1,
                textDecoration: "none",
                _dark: {
                    borderBottom: "1px solid rgba(255,255,255,0.4)",
                },
            },
        },
        navActive: {
            fontSize: "lg",
            fontWeight: "light",
            borderTop: "1px solid transparent",
            borderBottom: "1px solid rgba(0,0,0,0.2)",
            cursor: "default",
            _hover: {
                textDecoration: "none",
            },
            _dark: {
                borderBottom: "1px solid rgba(255,255,255,0.2)",
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
                border: "1px solid rgba(0,0,0,0.2)",
                opacity: 1,
            },
            _dark: {
                _hover: {
                    border: "1px solid rgba(255,255,255,0.2)",
                },
            },
        },
    },
})

const Navbar = defineStyleConfig({
    baseStyle: {
        w: "full",
        align: "center",
        transition: "all 0.2s ease-in-out",
    },
    variants: {
        sticky: {
            position: "sticky",
            top: 0,
            zIndex: "sticky",
        },
    },
})

const components = {
    Link,
    Button,
    Navbar,
}

const theme = extendTheme({
    config,
    colors,
    styles,
    fonts,
    components,
})

export default theme
