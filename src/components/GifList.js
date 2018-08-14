import React, { Component } from 'react'

export default class GifList extends Component {
  render() {
    return (
      <ul>
        {this.props.list.gifs.map((gif, id) => <li key={id}><img alt="" src={gif.images.original.url}/></li>)}
      </ul>
    )
  }
}
