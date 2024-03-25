import { pokemons } from "../../data/pokemons"
import "./PokemonPage.css"
import PokemonCard from "./components/PokemonCard/PokemonCard"

export default function PokemonPage() {
    return (
        <main className="pokemon_page">
            {
                pokemons.map((pokemon) => <PokemonCard pokemon={pokemon} key={pokemon.id} />)
            }
        </main>
    )
}