import React, { Component } from 'react'
import Repo from './Repo'
import Spinner from './../layout/Spinner'

class UserWithRepos extends Component {
  state = {
    repos: [],
  }

  componentDidMount() {
    this.setRepos()
  }

  componentWillUnmount() {
    this.unSetRepos()
  }

  async setRepos() {
    const res = await fetch(this.props.user.repos_url)
    const data = await res.json()
    this.setState({ repos: data })
  }

  unSetRepos() {
    this.setState({ repos: [] })
  }

  render() {
    let { repos } = this.state
    let { avatar_url, html_url, login } = this.props.user

    return (
      <>
        <div className='card' style={{ marginTop: '50px' }}>
          <img src={avatar_url} className='user-card-image' alt='...' />
          <a
            href={html_url}
            className='user-card'
            target='_blank'
            rel='noreferrer'
          >
            <p className='text-center'>{login}</p>
          </a>
          <div className='card-body'>
            <div className='d-flex justify-content-between align-items-center my-2'>
              <button
                className='btn btn-secondary btn-sm'
                onClick={this.props.back}
              >
                <i className='fas fa-chevron-left'></i> Back
              </button>
              <small>Top 30 repos</small>
            </div>
            <div className='repos'>
              {repos.length === 0 && <Spinner />}
              {repos.length > 0 &&
                repos.map((repo, index) => <Repo {...repo} key={index} />)}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default UserWithRepos
