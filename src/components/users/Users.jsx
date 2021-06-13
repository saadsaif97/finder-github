import React, { Component } from 'react'
import UserItem from './UserItem'
import Spinner from './../layout/Spinner'

class Users extends Component {
  state = {
    users: [],
    loading: false,
  }

  componentDidMount() {
    this.fetchAndSetUsers()
  }

  async fetchAndSetUsers() {
    this.setState({ loading: true })
    const res = await fetch('https://api.github.com/users')
    this.setState({ loading: false })
    const data = await res.json()
    this.setState({ users: data })
  }

  render() {
    const { users, loading } = this.state

    if (loading) {
      return <Spinner />
    }

    return (
      <div className='userGrid'>
        {users.map((user, i) => (
          <UserItem {...user} key={i} />
        ))}
      </div>
    )
  }
}

export default Users
