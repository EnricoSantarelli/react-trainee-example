import "./RegisterPage.css"

export default function RegisterPage() {

    return (
        <main className="register_page">
            <form className="form" >
                <label className="label" htmlFor="id">ID:</label>
                <input className="input" type="number" name="id" required />
                <label className="label" htmlFor="name">Nome:</label>
                <input className="input" type="text" name="text" required />
                <label className="label" htmlFor="type">Tipo:</label>
                <input className="input" type="text" name="text" required />
                <label className="label" htmlFor="image">URL da Imagem:</label>
                <input className="input" type="text" name="text" required />
                <label className="label" htmlFor="hp">HP:</label>
                <input className="input" type="number" name="hp" required />

                <button className="btn" type="submit" >Cadastrar Pokémon</button>
            </form>
        </main>
    )
}