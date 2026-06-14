import { useEffect, useState } from 'react'
import type { Pokemon } from '../types/pokemon'

interface Estado {
  data: Pokemon | null
  erro: string | null
  carregando: boolean
}

export function usePokemon(query: string): Estado {
  const [data, setData] = useState<Pokemon | null>(null)
  const [erro, setErro] = useState<string | null>(null)
  const [carregando, setCarregando] = useState(false)

  useEffect(() => {
    if (!query.trim()) return

    setCarregando(true)
    setErro(null)

    fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`)
      .then((res) => {
        if (!res.ok) throw new Error('Pokémon não encontrado.')
        return res.json()
      })
      .then((json: Pokemon) => setData(json))
      .catch((e: Error) => {
        setErro(e.message)
        setData(null)
      })
      .finally(() => setCarregando(false))
  }, [query])

  return { data, erro, carregando }
}
