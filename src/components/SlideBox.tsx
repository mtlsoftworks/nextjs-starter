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
                bg={colorMode === "light" ? "whiteAlpha.500" : "blackAlpha.500"}
                backdropFilter={"blur(8px)"}
                p={6}
                rounded="md"
                shadow="lg"
            >
                {children}
            </Box>
        </SlideFade>
    )
}

export default SlideBox
