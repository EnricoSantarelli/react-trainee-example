import "./Header.css"

export default function Header() {
    return (
        <header className="header">
            <ul className="nav">
                <li className="nav__item">Home</li>
                <li className="nav__item">Pokémons</li>
                <li className="nav__item">Cadastrar</li>
            </ul>
        </header>
    )
}