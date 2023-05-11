import { siteIcon, siteTitle, useBrandColors } from "@/constants"
import theme from "@/theme"
import { NavIcon, NavRoute } from "@/types"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import {
    Flex,
    HStack,
    Heading,
    IconButton,
    Link,
    useColorMode,
    useStyleConfig,
} from "@chakra-ui/react"
import NextImage from "next/image"
import NextLink from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

interface NavbarProps {
    navRoutes: NavRoute[]
    navIcons?: NavIcon[]
    displayColorModeToggle?: boolean
    displaySiteTitle?: boolean
    displaySiteIcon?: boolean
    blurBehind?: boolean
    bgOnScroll?: boolean
    divider?: boolean
    dividerOnScroll?: boolean
    shadow?: "none" | "sm" | "md" | "lg" | "xl" | "2xl"
    shadowOnScroll?: boolean
    shrinkOnScroll?: boolean
    variant?: string
}

const Navbar = ({
    navRoutes,
    navIcons,
    displayColorModeToggle,
    displaySiteTitle,
    displaySiteIcon,
    blurBehind = false,
    bgOnScroll = false,
    divider,
    dividerOnScroll = false,
    shadow = "none",
    shadowOnScroll = false,
    variant,
}: NavbarProps) => {
    const { colorMode, toggleColorMode } = useColorMode()
    const router = useRouter()

    const styles = useStyleConfig("Navbar", { variant })

    const [scrolledToTop, setScrolledToTop] = useState(true)

    const handleScroll = () => {
        const yPosition = window.pageYOffset
        setScrolledToTop(yPosition === 0)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <Flex
            as="nav"
            sx={styles}
            backdropFilter={blurBehind ? "blur(8px)" : undefined}
            bg={
                blurBehind
                    ? bgOnScroll && scrolledToTop
                        ? "transparent"
                        : colorMode === "light"
                        ? "rgba(255,255,255,0.2)"
                        : "rgba(0,0,0,0.2)"
                    : bgOnScroll && scrolledToTop
                    ? "transparent"
                    : useBrandColors
                    ? colorMode === "light"
                        ? theme.colors.brand.primary.light
                        : theme.colors.brand.primary.dark
                    : colorMode === "light"
                    ? theme.colors.base.primary.light
                    : theme.colors.base.primary.dark
            }
            padding={4}
            gap={6}
            borderBottom={
                divider && (!dividerOnScroll || !scrolledToTop)
                    ? `1px solid ${
                          colorMode === "light"
                              ? "rgba(0,0,0,0.2)"
                              : "rgba(255,255,255,0.2)"
                      }`
                    : undefined
            }
            shadow={shadowOnScroll ? (scrolledToTop ? "none" : shadow) : shadow}
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
