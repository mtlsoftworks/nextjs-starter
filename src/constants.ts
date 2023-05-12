import { StaticImageData } from "next/image"
import { NavRoute } from "./types"

// Site constants
export const siteTitle: string = "NextJS Starter"
export const siteIcon: StaticImageData = require("../public/icon.png")
export const siteIconPublicUrl: string = "/icon.png"
export const siteLogo: StaticImageData = require("../public/logo.png")
export const siteLogoPublicUrl: string = "/logo.png"
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

// Theme constants
export const useBrandColors = true
export const defaultColorMode : "light" | "dark" | "system" = "system"
export const colorModeIsToggleable = true