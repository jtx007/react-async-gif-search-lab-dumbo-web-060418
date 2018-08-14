import React, { Component } from 'react'

export default class GifSearch extends Component {



  render() {
    return (
      <form onSubmit={this.props.submit}>
        <input onChange={this.props.change} value={this.props.searchTerm} />
      </form>
    )
  }
}
