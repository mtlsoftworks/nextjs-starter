import { Box, ResponsiveValue, SlideFade, useColorMode } from "@chakra-ui/react"

interface SlideBoxProps {
    delayIn?: number
    durationIn?: number
    maxW?:
        | "container.sm"
        | "container.md"
        | "container.lg"
        | "container.xl"
        | "full"
    children: React.ReactNode
}

const SlideBox = ({
    delayIn = 0,
    durationIn = 0.4,
    maxW = "container.lg",
    children,
}: SlideBoxProps) => {
    const { colorMode } = useColorMode()

    return (
        <SlideFade
            style={{ width: "100%" }}
            in={true}
            offsetY={8}
            transition={{
                enter: {
                    duration: durationIn,
                    delay: delayIn,
                },
            }}
        >
            <Box
                w="full"
                maxW={maxW}
                p={6}
                layerStyle="glass"
            >
                {children}
            </Box>
        </SlideFade>
    )
}

export default SlideBox
