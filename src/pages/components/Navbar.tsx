import { NavIcon, NavRoute } from "@/types"
import NextImage from "next/image"
import {
    Flex,
    HStack,
    Heading,
    IconButton,
    useColorMode,
} from "@chakra-ui/react"
import { siteTitle, siteIcon } from "@/constants"
import { Link } from "@chakra-ui/next-js"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router"

interface NavbarProps {
    navRoutes: NavRoute[]
    navIcons?: NavIcon[]
    displayColorModeToggle?: boolean
    displaySiteTitle?: boolean
    displaySiteIcon?: boolean
}

const Navbar = ({
    navRoutes,
    navIcons,
    displayColorModeToggle,
    displaySiteTitle,
    displaySiteIcon,
}: NavbarProps) => {
    const { colorMode, toggleColorMode } = useColorMode()
    const router = useRouter()

    return (
        <Flex as="nav" w="full" align="center" padding={4} gap={6}>
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
                    <Link key={navRoute.name} href={navRoute.path}>
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
                            variant="ghost"
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
                            variant="ghost"
                            onClick={toggleColorMode}
                        />
                    )}
                </HStack>
            )}
        </Flex>
    )
}

export default Navbar
