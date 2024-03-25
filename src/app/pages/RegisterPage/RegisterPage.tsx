import { FormEvent, useContext, useState } from "react"
import "./RegisterPage.css"
import { PokemonsContext } from "../../contexts/pokemons-context";

export default function RegisterPage() {

    const [id, setId] = useState<number>();
    const [name, setName] = useState<string>();
    const [type, setType] = useState<string>();
    const [image, setImage] = useState<string>();
    const [hp, setHp] = useState<number>();

    const { addPokemon } = useContext(PokemonsContext)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        addPokemon(hp!, id!, image!, name!, type!)
        alert("Pokémon registrado")
    }

    return (
        <main className="register_page">
            <form className="form" onSubmit={handleSubmit}>
                <label className="label" htmlFor="id">ID:</label>
                <input className="input" type="number" name="id" value={id} onChange={(event) => setId(parseInt(event.target.value))} required />
                <label className="label" htmlFor="name">Nome:</label>
                <input className="input" type="text" name="text" value={name} onChange={(event) => setName(event.target.value)} required />
                <label className="label" htmlFor="type">Tipo:</label>
                <input className="input" type="text" name="text" value={type} onChange={(event) => setType(event.target.value)} required />
                <label className="label" htmlFor="image">URL da Imagem:</label>
                <input className="input" type="text" name="text" value={image} onChange={(event) => setImage(event.target.value)} required />
                <label className="label" htmlFor="hp">HP:</label>
                <input className="input" type="number" name="hp" value={hp} onChange={(event) => setHp(parseInt(event.target.value))} required />

                <button className="btn" type="submit" >Cadastrar Pokémon</button>
            </form>
        </main>
    )
}