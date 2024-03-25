import { useContext } from "react"
import { PokemonsContext } from "../../contexts/pokemons-context"
import "./PokemonPage.css"
import PokemonCard from "./components/PokemonCard/PokemonCard"

export default function PokemonPage() {
    const { pokemons } = useContext(PokemonsContext)

    return (
        <main className="pokemon_page">
            {
                pokemons.map((pokemon) => <PokemonCard pokemon={pokemon} key={pokemon.id} />)
            }
        </main>
    )
}