import { PokemonType } from "../../../../types/PokemonType"
import "./PokemonCard.css"

type PokemonCardProps = {
    pokemon: PokemonType
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {

    const handleCardColor = (type: string) => {
        switch (type) {
            case "electric":
                return "yellow"
            case "water":
                return "blue"
            case "fire":
                return "red"
            case "psychic":
                return "purple"
            case "normal":
                return "gray"
            case "grass":
                return "green"
            case "ghost":
                return "blueviolet"
            case "ground":
                return "brown"
            case "ice":
                return "aliceblue"
            default:
                return "blue"
        }
    }

    return (
        <div className="pokemon_card" style={{ borderColor: handleCardColor(pokemon.type) }}>
            <div className="top_infos" style={{ backgroundColor: handleCardColor(pokemon.type) }}>
                <img src={pokemon.image} alt="Imagem do pokémon" className="img--small" />
                <p className="name">{pokemon.name}</p>
                <div className="text">
                    <p className="text--left">hp</p>
                    <p className="text--right">{pokemon.hp}</p>
                </div>
            </div>
            <img src={pokemon.image} alt="Imagem do pokémon" className="img--big" />
            <div className="bottom_infos" style={{ backgroundColor: handleCardColor(pokemon.type) }}>
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