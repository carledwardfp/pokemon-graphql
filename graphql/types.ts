export interface Pokemon {
  id: string
  number: string
  name: string
  weight: Dimension
  height: Dimension
  classification: string
  types: string[]
  resistant: string[]
  image: string
  maxHP: number
  maxCP: number
}

interface Dimension {
  minimum: string
  maximum: string
}

// export type PokemonType =
//   | 'GRASS'
//   | 'FIRE'
//   | 'WATER'
//   | 'BUG'
//   | 'NORMAL'
//   | 'POISON'
//   | 'ELECTRIC'
//   | 'GROUND'
//   | 'FAIRY'
//   | 'FIGHTING'
//   | 'PSYCHIC'
//   | 'ROCK'
//   | 'GHOST'
//   | 'ICE'
//   | 'DRAGON'
