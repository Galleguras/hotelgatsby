import React from "react"
import Header from "./header"
import Footer from "./footer"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"
import useSeo from "../hook/use-seo"
const Layout = props => {
  const seo = useSeo()
  console.log("seo-->>", seo)
  const descripcion2 = seo.siteMetadata
  console.log("seo2-->>", descripcion2)
  const {
    siteMetadata: { description, title },
  } = seo
  console.log("seo3-->>", description)
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 16px;
            font-size: 1.6rem;
            line-height: 1.5;
          }
          h1 {
            font-family: "PT Sans", sans-serif;
          }
          h1,
          h2 {
            font-family: "Roboto", serif;
          }
          h1,
          h2,
          h3 {
            margin: 0;
            line-height: 1.5;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Roboto:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      {props.children}
      <Footer title={title} />
    </>
  )
}

export default Layout
