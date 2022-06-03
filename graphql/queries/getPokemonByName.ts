import { gql } from '@apollo/client'

export const GET_POKEMON_BY_NAME = gql`
  query GET_POKEMON_BY_NAME($name: String) {
    pokemon(name: $name) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      image
      maxHP
      maxCP
    }
  }
`
