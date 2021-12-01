import { graphql, useStaticQuery } from "gatsby"

const useSeo = () => {
  const data = useStaticQuery(graphql`
    query {
      allSite {
        nodes {
          siteMetadata {
            title
            siteUrl
            description
            author
          }
        }
      }
    }
  `)
  console.log(data)
  return data.allSite.nodes[0]
}

export default useSeo
