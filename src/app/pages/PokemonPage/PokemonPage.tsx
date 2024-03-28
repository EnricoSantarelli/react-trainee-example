import { FormEvent, useContext, useState } from "react";
import { PokemonsContext } from "../../contexts/pokemons-context";
import { redirect, useParams } from "react-router";

export default function PokemonPage() {

    const { pokeId } = useParams()
    const parsedId = parseInt(pokeId!)
    const { pokemons, updatePokemon } = useContext(PokemonsContext)

    const pokemon = pokemons.find((pokemon) => pokemon.id == parsedId)


    const [id, setId] = useState<number>(pokemon!.id);
    const [name, setName] = useState<string>(pokemon!.name);
    const [type, setType] = useState<string>(pokemon!.type);
    const [image, setImage] = useState<string>(pokemon!.image);
    const [hp, setHp] = useState<number>(pokemon!.hp);


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        updatePokemon(hp!, id!, image!, name!, type!)
        alert("Pokémon atualizado")
    }

    return (
        <main className="pokemon_page">
            <form className="form" onSubmit={handleSubmit}>
                <label className="label" htmlFor="id">ID:</label>
                <input className="input" type="number" name="id" value={id} required />
                <label className="label" htmlFor="name">Nome:</label>
                <input className="input" type="text" name="text" value={name} onChange={(event) => setName(event.target.value)} required />
                <label className="label" htmlFor="type">Tipo:</label>
                <input className="input" type="text" name="text" value={type} onChange={(event) => setType(event.target.value)} required />
                <label className="label" htmlFor="image">URL da Imagem:</label>
                <input className="input" type="text" name="text" value={image} onChange={(event) => setImage(event.target.value)} required />
                <label className="label" htmlFor="hp">HP:</label>
                <input className="input" type="number" name="hp" value={hp} onChange={(event) => setHp(parseInt(event.target.value))} required />

                <button className="btn" type="submit" >Atualizar Pokémon</button>
            </form>
        </main>
    )
}