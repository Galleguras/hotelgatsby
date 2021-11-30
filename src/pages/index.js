import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import ImagenHotel from "../components/imagenHotel"
import ContenidoInicio from "../components/contenidoInicio"
import useHabitaciones from "../hook/use-habitaciones"
import HabitacionPreviev from "../components/habitacionPreviev"

const ListadoHabitaciones = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const IndexPage = () => {
  var styleCss = "color:orange"
  const habitaciones = useHabitaciones()
  console.log("%chabitaciones ", styleCss)
  console.dir(habitaciones)

  return (
    <>
      <Layout>
        <ImagenHotel />
        <ContenidoInicio />
        <h2
          css={css`
            text-align: center;
            font-size: 4rem;
            margin-top: 4rem;
          `}
        >
          Nuestras Habitaciones
        </h2>
        <ListadoHabitaciones>
          {habitaciones.map(habitacion => (
            <HabitacionPreviev key={habitacion.id} habitacion={habitacion} />
          ))}
        </ListadoHabitaciones>
      </Layout>
    </>
  )
}

export default IndexPage
