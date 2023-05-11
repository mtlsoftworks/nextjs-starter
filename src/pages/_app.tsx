import theme from "@/theme"
import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import { Inter } from "next/font/google"

const inter = Inter({
    subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{`
                :root {
                    --font-inter: ${inter.style.fontFamily};
                }
            `}</style>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    )
}
