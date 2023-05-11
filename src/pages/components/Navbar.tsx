import { NavIcon, NavRoute } from "@/types"
import NextImage from "next/image"
import NextLink from "next/link"
import {
    Flex,
    HStack,
    Heading,
    IconButton,
    Link,
    useColorMode,
    useStyleConfig,
} from "@chakra-ui/react"
import { siteTitle, siteIcon } from "@/constants"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router"

interface NavbarProps {
    navRoutes: NavRoute[]
    navIcons?: NavIcon[]
    displayColorModeToggle?: boolean
    displaySiteTitle?: boolean
    displaySiteIcon?: boolean
    divider?: boolean
    shadow?: "none" | "sm" | "md" | "lg" | "xl" | "2xl"
    variant?: string
}

const Navbar = ({
    navRoutes,
    navIcons,
    displayColorModeToggle,
    displaySiteTitle,
    displaySiteIcon,
    divider,
    shadow = "none",
    variant,
}: NavbarProps) => {
    const { colorMode, toggleColorMode } = useColorMode()
    const router = useRouter()

    const styles = useStyleConfig("Navbar", { variant })

    return (
        <Flex
            as="nav"
            sx={styles}
            borderBottom={
                divider
                    ? `1px solid ${
                          colorMode === "light"
                              ? "rgba(0,0,0,0.2)"
                              : "rgba(255,255,255,0.2)"
                      }`
                    : undefined
            }
            shadow={shadow}
        >
            {(displaySiteTitle || displaySiteIcon) && (
                <HStack spacing={2}>
                    {displaySiteIcon && (
                        <NextImage
                            src={siteIcon}
                            alt={siteTitle}
                            width={24}
                            height={24}
                        />
                    )}
                    {displaySiteTitle && (
                        <Heading size="md">{siteTitle}</Heading>
                    )}
                </HStack>
            )}
            <HStack spacing={4} wrap="wrap">
                {navRoutes.map((navRoute) => (
                    <Link
                        as={NextLink}
                        key={navRoute.name}
                        href={navRoute.path}
                        variant={
                            router.pathname === navRoute.path
                                ? "navActive"
                                : "nav"
                        }
                    >
                        {navRoute.name}
                    </Link>
                ))}
            </HStack>
            {(displayColorModeToggle || navIcons) && (
                <HStack spacing={4} ml="auto">
                    {navIcons?.map((navIcon) => (
                        <IconButton
                            key={navIcon.name}
                            aria-label={navIcon.name}
                            icon={navIcon.icon}
                            variant="nav"
                            onClick={() => router.push(navIcon.path)}
                        />
                    ))}
                    {displayColorModeToggle && (
                        <IconButton
                            aria-label="Toggle color mode"
                            icon={
                                colorMode === "light" ? (
                                    <MoonIcon />
                                ) : (
                                    <SunIcon />
                                )
                            }
                            variant="nav"
                            onClick={toggleColorMode}
                        />
                    )}
                </HStack>
            )}
        </Flex>
    )
}

export default Navbar
