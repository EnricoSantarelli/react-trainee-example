import { ReactNode, createContext, useState } from "react"
import { PokemonType } from "../types/PokemonType"
import { pokemonList } from "../data/pokemon-list"

type PokemonsContexType = {
    pokemons: PokemonType[],
    addPokemon(hp: number, id: number, image: string, name: string, type: string): void
    updatePokemon(hp: number, id: number, image: string, name: string, type: string): void
}

const defaultPokemonsContextType: PokemonsContexType = {
    pokemons: [],
    addPokemon: () => { },
    updatePokemon: () => { }
}

export const PokemonsContext = createContext<PokemonsContexType>(defaultPokemonsContextType)

export const PokemonsProvider = ({ children }: { children: ReactNode }) => {
    const [pokemons, setPokemons] = useState<PokemonType[]>(pokemonList)

    function addPokemon(hp: number, id: number, image: string, name: string, type: string) {
        const pokemon: PokemonType = {
            hp: hp,
            id: id,
            image: image,
            name: name,
            type: type
        }
        setPokemons((previousPokemons) => [...previousPokemons, pokemon])
    }

    function updatePokemon(hp: number, id: number, image: string, name: string, type: string) {
        setPokemons((previousPokemons) => previousPokemons.map((pokemon) => {
            if (pokemon.id == id) {
                pokemon.hp = hp
                pokemon.image = image
                pokemon.name = name
                pokemon.type = type
            }
            return pokemon
        }))
    }

    return (
        <PokemonsContext.Provider value={{ pokemons, addPokemon, updatePokemon }}>
            {children}
        </PokemonsContext.Provider>
    )
}