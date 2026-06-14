# Pokédex — Design Spec
**Data:** 2026-06-14

## Objetivo

Recriar o projeto Pokédex do repo GRUDSMV com identidade própria: código limpo, bem tipado e visual simples/genuíno — sem cara de template de IA.

## Stack

- React + TypeScript + Vite
- CSS puro (sem biblioteca de UI)
- PokeAPI: `https://pokeapi.co/api/v2/pokemon/{name}`

## Estrutura de arquivos

```
src/
├── types/
│   └── pokemon.ts          # tipos TypeScript centralizados
├── hooks/
│   └── usePokemon.ts       # hook de busca, bem tipado
├── components/
│   ├── SearchBar.tsx        # input + botão isolados
│   ├── PokemonCard.tsx      # card do pokémon
│   └── TypeBadge.tsx       # badge colorido por tipo
├── App.tsx
└── index.css               # variáveis de cor + reset simples
```

## Funcionalidades

- Busca de pokémon por nome via input + botão
- Exibe: nome capitalizado, sprite, altura (cm), peso (kg), tipos com badge colorido
- Estado de loading e erro com mensagens em português

## Visual

**Paleta:**
```
--bg-page:    #f5f5f5
--bg-card:    #ffffff
--text-main:  #1a1a1a
--text-muted: #6b7280
--accent:     #2563eb
--border:     #e5e7eb
```

**Layout:**
- Título `Pokédex` simples no topo, sem emoji
- Input + botão lado a lado (não empilhados)
- Card com sombra sutil e bordas arredondadas
- Badges de tipo com cor por elemento (fogo=laranja, água=azul, grama=verde, etc.)
- Sem animações, sem gradientes, sem hover exagerado

## Tipos TypeScript

```ts
// types/pokemon.ts
export interface PokemonType {
  type: { name: string };
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: { front_default: string | null };
  types: PokemonType[];
}
```

## Hook

`usePokemon(query: string)` retorna `{ data: Pokemon | null, error: string | null, loading: boolean }`. Só dispara fetch quando `query` não é vazio.

## Cores dos tipos (TypeBadge)

| Tipo     | Cor        |
|----------|------------|
| fire     | #f97316    |
| water    | #3b82f6    |
| grass    | #22c55e    |
| electric | #eab308    |
| psychic  | #ec4899    |
| ice      | #67e8f9    |
| dragon   | #7c3aed    |
| dark     | #374151    |
| normal   | #9ca3af    |
| poison   | #a855f7    |
| ground   | #d97706    |
| rock     | #78716c    |
| bug      | #84cc16    |
| ghost    | #6d28d9    |
| steel    | #64748b    |
| fighting | #dc2626    |
| flying   | #38bdf8    |
| fairy    | #f472b6    |
