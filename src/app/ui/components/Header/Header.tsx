import { Link } from "react-router-dom"
import "./Header.css"

export default function Header() {
    return (
        <header className="header">
            <ul className="nav">
                <Link className="nav__item" to={"/"}>Home</Link>
                <Link className="nav__item" to={"/pokemons"}>Pokémons</Link>
                <Link className="nav__item" to={"/register"}>Cadastrar</Link>
            </ul>
        </header>
    )
}