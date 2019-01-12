import React, { Component } from "react"

export class SearchBar extends Component {

  onInputChange = event => {
    console.log(event.target.value)
  }

  onSubmitForm = event => {
    event.preventDefault()
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
