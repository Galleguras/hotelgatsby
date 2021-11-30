import { graphql, useStaticQuery } from "gatsby"

const useHabitaciones = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allDatoCmsHabitacion {
        nodes {
          id
          slug
          titulo
          imagen {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  var css = "color:orange"

  console.log("%cExample ", css)
  console.dir(data)
  return data.allDatoCmsHabitacion.nodes.map(habitacion => ({
    titulo: habitacion.titulo,
    id: habitacion.id,
    contenido: habitacion.contenido,
    imagen: habitacion.imagen,
    slug: habitacion.slug,
  }))
}

export default useHabitaciones
