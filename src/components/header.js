import React from "react"
import { css } from "@emotion/core"
import Navegacion from "./nav"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const EnlaceHome = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`

const Header = () => {
  return (
    <>
      <header
        css={css`
          background-color: #333;
          padding: 1rem;
        `}
      >
        <div
          css={css`
            max-width: 1200px;
            margin: 0 auto;
            @media (min-width: 760px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          <EnlaceHome to="/">Hotel Gatsby</EnlaceHome>
          <Navegacion />
        </div>
      </header>
    </>
  )
}

export default Header
