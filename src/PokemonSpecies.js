import React, { Component } from 'react'

class PokemonSpecies extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          species: {}
        }
        this.fetchPokemonData()
      }

      componentDidUpdate(prevProps) {
        if (prevProps.match.params.pokemon !== this.props.match.params.pokemon) {
          this.fetchPokemonData()
        }
      }

    fetchPokemonData = () => {
        const { pokemon } = this.props.match.params
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
          .then(response => response.json())
          .then(species => this.setState({ species }))
      }

    render() {
        return (
            <div className="PokemonSpecies">

            </div>
        )
    }
}

export default PokemonSpecies