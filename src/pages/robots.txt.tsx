import { GetServerSideProps } from "next"
import { siteUrl } from "@/constants"

function Robots() {
    // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { res } = context
    res.setHeader("Content-Type", "text/txt")
    // we send the XML to the browser
    res.write(`User-agent: *
Allow: /*

Disallow: /api/*

Sitemap: ${siteUrl}/sitemap.txt`)
    res.end()

    return {
        props: {},
    }
}

export default Robots
