import type { Pokemon } from '../types/pokemon'
import { TypeBadge } from './TypeBadge'

interface Props {
  pokemon: Pokemon
}

export function PokemonCard({ pokemon }: Props) {
  return (
    <div className="pokemon-card">
      {pokemon.sprites.front_default && (
        <img
          className="pokemon-sprite"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      )}

      <h2 className="pokemon-nome">{pokemon.name}</h2>

      <div className="pokemon-tipos">
        {pokemon.types.map(({ type }) => (
          <TypeBadge key={type.name} tipo={type.name} />
        ))}
      </div>

      <div className="pokemon-stats">
        <span>{pokemon.height * 10} cm</span>
        <span>{pokemon.weight / 10} kg</span>
      </div>
    </div>
  )
}
