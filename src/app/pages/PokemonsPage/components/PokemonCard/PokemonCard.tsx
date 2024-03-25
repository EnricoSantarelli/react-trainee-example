import "./PokemonCard.css"


export default function PokemonCard() {



    return (
        <div className="pokemon_card" >
            <div className="top_infos" >
                <img alt="Imagem do pokémon" className="img--small" />
                <p className="name"></p>
                <div className="text">
                    <p className="text--left">hp</p>
                    <p className="text--right"></p>
                </div>
            </div>
            <img alt="Imagem do pokémon" className="img--big" />
            <div className="bottom_infos" >
                <div className="text">
                    <p className="text--left">num</p>
                    <p className="text--right"></p>
                </div>
                <div className="text">
                    <p className="text--left">tipo</p>
                    <p className="text--right"></p>
                </div>
            </div>
        </div>
    )
}