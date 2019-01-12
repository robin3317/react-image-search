import React, { Component } from "react"

export class SearchBar extends Component {

  state = {
    term: null
  }

  onInputChange = event => {
    this.setState({ term: event.target.value })
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmitForm}>
          <div className="field">
            <label>Search Image</label>
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
