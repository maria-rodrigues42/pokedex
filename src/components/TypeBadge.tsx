const cores: { [key: string]: string } = {
  fire: '#f97316',
  water: '#3b82f6',
  grass: '#22c55e',
  electric: '#eab308',
  psychic: '#ec4899',
  ice: '#67e8f9',
  dragon: '#7c3aed',
  dark: '#374151',
  normal: '#9ca3af',
  poison: '#a855f7',
  ground: '#d97706',
  rock: '#78716c',
  bug: '#84cc16',
  ghost: '#6d28d9',
  steel: '#64748b',
  fighting: '#dc2626',
  flying: '#38bdf8',
  fairy: '#f472b6',
}

interface Props {
  tipo: string
}

export function TypeBadge({ tipo }: Props) {
  const cor = cores[tipo] ?? '#9ca3af'

  return (
    <span
      style={{
        backgroundColor: cor,
        color: '#fff',
        padding: '2px 10px',
        borderRadius: '999px',
        fontSize: '0.75rem',
        fontWeight: 600,
        textTransform: 'capitalize',
        letterSpacing: '0.03em',
      }}
    >
      {tipo}
    </span>
  )
}
