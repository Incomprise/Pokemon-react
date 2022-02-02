import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Link, RouteComponentProps } from "react-router-dom"
import PokemonDetail from "./pages/pokemon-detail";
import PokemonList from "./pages/pokemon-list";
import PageNotFound from "./pages/page-not-found";

const App: FunctionComponent = () => {

    
    return (
  
<Router>
    <div>
        <nav>
            <div>
                <Link to="/">Pokedex</Link>
            </div>
        </nav>
  <Route exact path="/" component={PokemonList}/>
  <Route path="/pokemons" component={PokemonList}/>
  <Route path="/pokemons/:id" component={PokemonDetail}/>
  <Route component={PageNotFound}/>
    </div>
</Router>
    )
}

export default App;