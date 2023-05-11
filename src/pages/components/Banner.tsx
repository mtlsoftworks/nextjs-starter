import { Center } from "@chakra-ui/react"

interface BannerProps {
    children: React.ReactNode
    divider?: boolean
}

const Banner = ({ children, divider }: BannerProps) => {
    return (
        <Center
            as="header"
            w="full"
            p={[6, 16]}
            borderBottomWidth={divider ? 1 : undefined}
        >
            {children}
        </Center>
    )
}

export default Banner
