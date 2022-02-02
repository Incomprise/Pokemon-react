import React, { FunctionComponent, useState, useEffect } from "react";
import Pokemon from "./models/pokemon";
import POKEMONS from "./models/mock-pokemon";

const App: FunctionComponent = () => {

    // Hook d'état
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);

    // Hook d'effet
    useEffect(() => {
        setPokemon(POKEMONS);
    }, []);


    return (
        <div>
            <h1 className="center">Pokédex:</h1>
            <div className="container">
                <div className="row">
            <p>Il y a { pokemon.length } pokemon dans le Pokedex.</p>
                { pokemon.map(({id, name, picture, created}) => (
                    <div className="col s6 m4" key={id}>
                        <div className="card horizontal">
                            <div className="card-image">
                                <img src={picture} alt={name} />
                            </div>
                        <div className="card-stacked">
                        <div className="card-content">
                            <p>{ name }</p>
                            <p><small>{ created.toString() }</small></p>
                        </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
       
    )
}

export default App;