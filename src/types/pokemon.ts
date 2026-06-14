export interface PokemonType {
  type: {
    name: string
  }
}

export interface Pokemon {
  id: number
  name: string
  height: number
  weight: number
  sprites: {
    front_default: string | null
  }
  types: PokemonType[]
}
