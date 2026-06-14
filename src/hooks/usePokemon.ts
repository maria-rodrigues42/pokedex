import { useEffect, useState } from 'react'
import type { Pokemon } from '../types/pokemon'

export function usePokemon(query: string) {
  const [data, setData] = useState<Pokemon | null>(null)
  const [erro, setErro] = useState<string | null>(null)
  const [carregando, setCarregando] = useState(false)

  useEffect(() => {
    if (!query.trim()) return

    async function buscar() {
      setCarregando(true)
      setErro(null)

      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`)
        if (!res.ok) throw new Error('Pokémon não encontrado.')
        const json: Pokemon = await res.json()
        setData(json)
      } catch (e) {
        setErro((e as Error).message)
        setData(null)
      } finally {
        setCarregando(false)
      }
    }

    buscar()
  }, [query])

  return { data, erro, carregando }
}
