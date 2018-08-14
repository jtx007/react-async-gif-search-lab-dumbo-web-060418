import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  state = {
    gifs: [],
    term: 'spiderman pointing'
  }

  onSubmit = (event) => {
    event.preventDefault()
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(json =>
      this.setState({
        gifs: json.data.slice(0, 3)
      })
  )}

  handleChange = (event) => {
    this.setState({
      term: event.target.value
    })
  }


  render() {
    return (
      <div>
        <GifList list={this.state} />
        <GifSearch change={this.handleChange} searchTerm={this.state.term} submitHandler={this.onSubmit}/>
      </div>
    )
  }

  componentDidMount() {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(json =>
      this.setState({
        gifs: json.data.slice(0, 3)
      })
    )
  }
}
