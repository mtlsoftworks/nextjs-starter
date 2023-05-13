import { GetServerSideProps } from "next"
import { siteNavRoutes, siteUrl } from "@/constants"

function Sitemap() {
    // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    // Generate sitemap.txt
    let sitemapContent = ""

    for (const route of siteNavRoutes) {
        sitemapContent += `${siteUrl}${route.path}\n`
    }

    const { res } = context
    res.setHeader("Content-Type", "text/txt")
    // we send the XML to the browser
    res.write(sitemapContent)
    res.end()

    return {
        props: {},
    }
}

export default Sitemap
