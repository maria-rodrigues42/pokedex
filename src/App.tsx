import { useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { PokemonCard } from './components/PokemonCard'
import { usePokemon } from './hooks/usePokemon'

export default function App() {
  const [query, setQuery] = useState('')
  const { data, erro, carregando } = usePokemon(query)

  return (
    <div className="container">
      <h1 className="titulo">Pokédex</h1>

      <SearchBar onBuscar={setQuery} />

      {carregando && <p className="mensagem">carregando...</p>}
      {erro && <p className="mensagem erro">{erro}</p>}
      {data && <PokemonCard pokemon={data} />}
    </div>
  )
}
