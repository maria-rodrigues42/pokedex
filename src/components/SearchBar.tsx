import { useState } from 'react'

interface Props {
  onBuscar: (nome: string) => void
}

export function SearchBar({ onBuscar }: Props) {
  const [valor, setValor] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (valor.trim()) onBuscar(valor.trim())
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="nome do pokémon"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button className="search-btn" type="submit">
        buscar
      </button>
    </form>
  )
}
