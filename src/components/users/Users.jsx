import React, { Component } from 'react'
import UserItem from './UserItem'
import Spinner from './../layout/Spinner'
import Search from '../Search'
import SearchQueryAndRemoveBtn from './SearchQueryAndRemoveBtn'
import UserWithRepos from './UserWithRepos'

class Users extends Component {
  state = {
    users: [],
    loading: false,
    searchQuery: '',
    user: {},
  }

  componentDidMount() {
    this.fetchAndSetFreshUsers()
  }

  fetchAndSetFreshUsers = async () => {
    this.setState({ loading: true })
    const res = await fetch(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    )
    this.setState({ loading: false })
    const data = await res.json()
    this.setState({ users: data })
    this.unSetUser()
  }

  searchUsers = async (q) => {
    if (q == '') {
      return alert('Please fill any search query')
    }

    this.setState({ loading: true })
    this.setState({ searchQuery: q })
    const res = await fetch(
      `https://api.github.com/search/users?q=${q}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    )
    const data = await res.json()
    this.setState({ loading: false })
    this.setState({ users: data.items })
    this.unSetUser()
  }

  removeSearchQueryAndSetFreshUsers = () => {
    this.setState({ searchQuery: '' })
    this.fetchAndSetFreshUsers()
  }

  setUser = (user) => {
    this.setState({ user })
  }

  unSetUser = () => {
    this.setState({ user: {} })
  }

  userIsSet = () => {
    return Object.keys(this.state.user).length > 0
  }

  render() {
    const { users, loading, searchQuery } = this.state

    if (loading) {
      return <Spinner />
    }

    return (
      <>
        <Search searchUsers={this.searchUsers} />
        {searchQuery && (
          <SearchQueryAndRemoveBtn
            searchQuery={searchQuery}
            removeSearchQueryAndSetFreshUsers={
              this.removeSearchQueryAndSetFreshUsers
            }
          />
        )}
        {this.userIsSet() && (
          <UserWithRepos user={this.state.user} back={this.unSetUser} />
        )}
        {!this.userIsSet() && (
          <div className='userGrid'>
            {users.map((user, i) => (
              <UserItem user={user} key={i} setUser={this.setUser} />
            ))}
          </div>
        )}
      </>
    )
  }
}

export default Users
