import { StaticImageData } from "next/image"
import { NavRoute } from "./types"

export const siteTitle: string = "NextJS Starter"
export const siteIcon: StaticImageData = require("../public/icon.png")
export const siteIconPublicUrl: string = "/icon.png"
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
