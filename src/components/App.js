import React, { Component } from 'react'

import SearchBar from './SearchBar'
import unsplash from '../api/unsplash'
import ItemList from './ImageList'

class App extends Component {

  state = {
    images: []
  }

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term}
    })

    this.setState({ images: response.data.results })
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: "10px"}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ItemList images={this.state.images} />
      </div>
    )
  }
}

export default App
