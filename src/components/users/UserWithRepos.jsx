import React, { Component } from 'react'
import Repo from './Repo'

class UserCard extends Component {
  state = {
    repos: [],
    data: {
      login: 'saadsaif97',
      id: 58517683,
      node_id: 'MDQ6VXNlcjU4NTE3Njgz',
      avatar_url: 'https://avatars.githubusercontent.com/u/58517683?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/saadsaif97',
      html_url: 'https://github.com/saadsaif97',
      followers_url: 'https://api.github.com/users/saadsaif97/followers',
      following_url:
        'https://api.github.com/users/saadsaif97/following{/other_user}',
      gists_url: 'https://api.github.com/users/saadsaif97/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/saadsaif97/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/saadsaif97/subscriptions',
      organizations_url: 'https://api.github.com/users/saadsaif97/orgs',
      repos_url: 'https://api.github.com/users/saadsaif97/repos',
      events_url: 'https://api.github.com/users/saadsaif97/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/saadsaif97/received_events',
      type: 'User',
      site_admin: false,
      name: 'Saad Saif',
      company: null,
      blog: '',
      location: null,
      email: null,
      hireable: null,
      bio: null,
      twitter_username: null,
      public_repos: 66,
      public_gists: 1,
      followers: 2,
      following: 4,
      created_at: '2019-12-04T13:36:46Z',
      updated_at: '2021-06-07T09:10:34Z',
    },
  }

  componentDidMount() {
    this.setRepos()
  }

  async setRepos() {
    const res = await fetch(this.state.data.repos_url)
    const data = await res.json()
    this.setState({ repos: data })
    console.log(data)
  }

  render() {
    let { data, repos } = this.state

    return (
      <>
        <div className='card'>
          <img src={data.avatar_url} className='user-card-image' alt='...' />
          <a
            href={data.html_url}
            className='user-card'
            target='_blank'
            rel='noreferrer'
          >
            <p className='text-center'>{data.login}</p>
          </a>
          <div className='card-body'>
            <h4>Total repos: {repos.length}</h4>
            <div className='repos'>
              {repos.map((repo, index) => (
                <Repo {...repo} key={index} />
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default UserCard
