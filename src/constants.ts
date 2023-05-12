import { StaticImageData } from "next/image"
import { NavIcon, NavRoute } from "./types"
import { FaGithub, FaTwitter } from "react-icons/fa"

// Site constants
export const siteUrl: string = "http://localhost:3000" // Change this to your site's URL
export const siteTitle: string = "NextJS Starter" // Change this to your site's title
export const siteIcon: StaticImageData = require("../public/icon.png") // There is a default icon in the public folder, but you should change this to your site's icon
export const siteIconPublicUrl: string = `${siteUrl}/icon.png`
export const siteLogo: StaticImageData = require("../public/logo.png") // There is a default logo in the public folder, but you should change this to your site's logo
export const siteLogoPublicUrl: string = `${siteUrl}/logo.png`
export const siteOGImage: StaticImageData = require("../public/og-image.png") // There is a default OG image in the public folder, but you should change this to your site's OG image
export const siteOGImagePublicUrl: string = `${siteUrl}/og-image.png`

// Socials
export const twitterHandle: string | undefined = undefined // Change this to your Twitter handle (i.e. "@username")
export const githubHandle: string | undefined = "mtlsoftworks" // Change this to your GitHub handle (i.e. "username")

// Set up your site's navigation here
export const siteNavRoutes: NavRoute[] = [
    {
        path: "/",
        name: "Home",
    },
    {
        path: "/about",
        name: "About",
    },
]

// This automatically sets up your site's social links based on the socials you set above
let siteNavIconsList: NavIcon[] = []
if (twitterHandle) {
    siteNavIconsList.push({
        path: `https://twitter.com/${twitterHandle}`,
        name: "Twitter",
        icon: FaTwitter,
    })
}
if (githubHandle) {
    siteNavIconsList.push({
        path: `https://github.com/${githubHandle}`,
        name: "GitHub",
        icon: FaGithub,
    })
}
export const siteNavIcons: NavIcon[] = siteNavIconsList


// Theme constants
export const useBrandColors = true // Set this to false to use the base colors instead of the brand colors. You can set your brand colors in src/theme.ts.
export const defaultColorMode: "light" | "dark" | "system" = "system" // Set this to "light" or "dark" to use a specific color mode by default. Set this to "system" to use the user's system color mode by default.
export const colorModeIsToggleable = true // Set this to false to disable the color mode toggle button.
