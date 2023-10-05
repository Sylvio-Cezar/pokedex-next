import Image from "next/image"
import Link from "next/link"

const BG_COLORS = {
    grass: 'bg-grass',
    fire: 'bg-fire',
    water: 'bg-water',
    ghost: 'bg-ghost',
    electric: 'bg-electric',
    bug: 'bg-bug',
    normal: 'bg-normal',
    psychic: 'bg-psychic',
    steel: 'bg-steel',
    ground: 'bg-ground',
    flying: 'bg-flying',
    dragon: 'bg-dragon',
    poison: 'bg-poison',
    fighting: 'bg-fighting',
    ice: 'bg-ice',
    dark: 'bg-dark',
    fairy: 'bg-fairy',
    rock: 'bg-rock',
}

const BORDER_COLORS = {
    grass: 'border-grass',
    fire: 'border-fire',
    water: 'border-water',
    ghost: 'border-ghost',
    electric: 'border-electric',
    bug: 'border-bug',
    normal: 'border-normal',
    psychic: 'border-psychic',
    steel: 'border-steel',
    ground: 'border-ground',
    flying: 'border-flying',
    dragon: 'border-dragon',
    poison: 'border-poison',
    fighting: 'border-fighting',
    ice: 'border-ice',
    dark: 'border-dark',
    fairy: 'border-fairy',
    rock: 'border-rock',
}

const TEXT_COLORS = {
    grass: 'text-grass',
    fire: 'text-fire',
    water: 'text-water',
    ghost: 'text-ghost',
    electric: 'text-electric',
    bug: 'text-bug',
    normal: 'text-normal',
    psychic: 'text-psychic',
    steel: 'text-steel',
    ground: 'text-ground',
    flying: 'text-flying',
    dragon: 'text-dragon',
    poison: 'text-poison',
    fighting: 'text-fighting',
    ice: 'text-ice',
    dark: 'text-dark',
    fairy: 'text-fairy',
    rock: 'text-rock',
}

const FROM_COLORS = {
    grass: 'from-grass',
    fire: 'from-fire',
    water: 'from-water',
    ghost: 'from-ghost',
    electric: 'from-electric',
    bug: 'from-bug',
    normal: 'from-normal',
    psychic: 'from-psychic',
    steel: 'from-steel',
    ground: 'from-ground',
    flying: 'from-flying',
    dragon: 'from-dragon',
    poison: 'from-poison',
    fighting: 'from-fighting',
    ice: 'from-ice',
    dark: 'from-dark',
    fairy: 'from-fairy',
    rock: 'from-rock',
}

const TO_COLORS = {
    grass: 'to-grass',
    fire: 'to-fire',
    water: 'to-water',
    ghost: 'to-ghost',
    electric: 'to-electric',
    bug: 'to-bug',
    normal: 'to-normal',
    psychic: 'to-psychic',
    steel: 'to-steel',
    ground: 'to-ground',
    flying: 'to-flying',
    dragon: 'to-dragon',
    poison: 'to-poison',
    fighting: 'to-fighting',
    ice: 'to-ice',
    dark: 'to-dark',
    fairy: 'to-fairy',
    rock: 'to-rock',
}

export default function Pokemon({ pokemon }) {
    console.log(pokemon.types)
    return (
      <Link href={`/pokemon/${pokemon.name}`}> 
        <div className={`border-[3px] border-${pokemon.types[0]} rounded-2xl group`} key={pokemon.id}>
          <span className={`bg-${pokemon.types[0]} rounded-full float-left mt-2 ml-2 px-4 py-2 text-white capitalize`}>{pokemon.types[0]}</span>
          <span className={`bg-${pokemon.types[1]} rounded-full float-left mt-2 ml-2 px-4 py-2 text-white capitalize`}>{pokemon.types[1]}</span>
          <span className={`text-${pokemon.types[0]} float-right px-4 py-2`}>#{String(pokemon.id).padStart(3, '0')}</span>
          <Image className="m-auto"
            src={pokemon.image}
            width={250}
            height={250}
            alt={pokemon.name}
          />
          <h1 className={`text-center bg-${pokemon.types[0]} text-white rounded-b-lg px-2 py-4 text-2xl font-bold font-sans capitalize`}>{pokemon.name}</h1>
        </div>
       </Link>
    )
  }