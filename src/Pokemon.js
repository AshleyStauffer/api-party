import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import PokemonSpecies from './PokemonSpecies'

class Pokemon extends Component {
    state = {
        pokemon: '',
    }

    handleChange = ev => {
        this.setState({ pokemon: ev.target.value })
    }
    
    handleSubmit = ev => {
        ev.preventDefault()
        this.props.history.push(`${this.state.pokemon}/`)
    }

    render() {
        return (
            <div className="Pokemon">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                        required
                        autoFocus
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">
                            Enter number 1-20 to get a Pokemon
                        </button>
                    </div>
                </form>

                <Route
                    path="/pokemon/:pokemon"
                    component={PokemonSpecies}
                />
            </div>
        )
    }
}

export default Pokemon