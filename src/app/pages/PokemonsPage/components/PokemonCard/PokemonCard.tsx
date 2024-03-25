import { PokemonType } from "../../../../types/PokemonType"
import "./PokemonCard.css"

type PokemonCardProps = {
    pokemon: PokemonType
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
    return (
        <div className="pokemon_card">
            <div className="top_infos">
                <img src={pokemon.image} alt="Imagem do pokémon" className="img--small" />
                <p className="name">{pokemon.name}</p>
                <div className="text">
                    <p className="text--left">hp</p>
                    <p className="text--right">{pokemon.hp}</p>
                </div>
            </div>
            <img src={pokemon.image} alt="Imagem do pokémon" className="img--big" />
            <div className="bottom_infos">
                <div className="text">
                    <p className="text--left">num</p>
                    <p className="text--right">{pokemon.id}</p>
                </div>
                <div className="text">
                    <p className="text--left">tipo</p>
                    <p className="text--right">{pokemon.type}</p>
                </div>
            </div>
        </div>
    )
}