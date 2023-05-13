import { siteTitle } from "@/constants"
import { NavIcon, NavRoute } from "@/types"
import {
    Flex,
    GridItem,
    HStack,
    Heading,
    IconButton,
    Link,
    SimpleGrid,
    Text,
    VStack,
    useColorMode,
} from "@chakra-ui/react"
import NextLink from "next/link"
import { useRouter } from "next/router"

interface FooterSection {
    title: string
    navRoutes?: NavRoute[]
    navIcons?: NavIcon[]
}

interface FooterProps {
    sections?: FooterSection[]
    displaySiteTitle?: boolean
    displayCopyRight?: boolean
    divider?: boolean
}

const Footer = ({
    sections = [],
    displaySiteTitle,
    displayCopyRight,
    divider,
}: FooterProps) => {
    const { colorMode, toggleColorMode } = useColorMode()
    const router = useRouter()

    return (
        <Flex
            as="footer"
            flexDirection="column"
            w="full"
            align="center"
            padding={4}
            gap={6}
            borderTop={
                divider
                    ? `1px solid ${
                          colorMode === "light"
                              ? "rgba(0,0,0,0.2)"
                              : "rgba(255,255,255,0.2)"
                      }`
                    : undefined
            }
        >
            {sections.length > 0 && (
                <SimpleGrid
                    columns={[
                        1,
                        Math.min(2, sections.length),
                        Math.min(3, sections.length),
                        Math.min(4, sections.length),
                    ]}
                    p={4}
                    spacing={4}
                    w="full"
                    maxW="container.lg"
                >
                    {sections.map((section) => (
                        <GridItem key={section.title}>
                            <Heading size="md">{section.title}</Heading>
                            {section.navRoutes && (
                                <VStack p={2} spacing={1} align="flex-start">
                                    {section.navRoutes.map((navRoute) => (
                                        <Link
                                            as={NextLink}
                                            key={navRoute.name}
                                            href={navRoute.path}
                                        >
                                            {navRoute.name}
                                        </Link>
                                    ))}
                                </VStack>
                            )}
                            {section.navIcons && (
                                <HStack p={2} spacing={4} ml="auto">
                                    {section.navIcons?.map((navIcon) => (
                                        <IconButton
                                            key={navIcon.name}
                                            aria-label={navIcon.name}
                                            icon={<navIcon.icon />}
                                            variant="nav"
                                            rounded="full"
                                            onClick={() =>
                                                router.push(navIcon.path)
                                            }
                                        />
                                    ))}
                                </HStack>
                            )}
                        </GridItem>
                    ))}
                </SimpleGrid>
            )}
            {(displaySiteTitle || displayCopyRight) && (
                <VStack spacing={2}>
                    {displaySiteTitle && (
                        <Heading size="md">{siteTitle}</Heading>
                    )}
                    {displayCopyRight && (
                        <Text>{`© ${new Date().getFullYear()} ${siteTitle}`}</Text>
                    )}
                </VStack>
            )}
        </Flex>
    )
}

export default Footer
