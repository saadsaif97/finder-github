import React, { Component } from 'react'

class Search extends Component {
  state = {
    text: '',
  }

  // sets the value of input field dynamically when user changes that input field
  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  // this function is called when user submits the form
  onSubmit = (e) => {
    e.preventDefault()
    this.props.searchUsers(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className='searchForm'>
        <div className='input-group'>
          <input
            type='text'
            name='text'
            value={this.state.text}
            className='form-control'
            onChange={this.onChange}
            placeholder='Search user in github'
          />
          <div className='input-group-append'>
            <button className='btn btn-secondary' type='submit'>
              <i className='fa fa-search'></i>
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default Search
