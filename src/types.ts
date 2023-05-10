import { ReactElement } from "react"

export interface NavRoute {
    path: string
    name: string
}

export interface NavIcon {
    path: string
    name: string
    icon: ReactElement
}
