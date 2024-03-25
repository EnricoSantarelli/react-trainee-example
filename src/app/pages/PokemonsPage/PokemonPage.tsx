import { pokemons } from "../../data/pokemons"
import "./PokemonPage.css"
import PokemonCard from "./components/PokemonCard/PokemonCard"

export default function PokemonPage() {
    return (
        <main className="pokemon_page">
            <PokemonCard pokemon={pokemons[0]} />
        </main>
    )
}