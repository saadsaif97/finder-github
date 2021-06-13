import React from 'react'

const UserItem = ({ user, setUser }) => {
  const { avatar_url, html_url, login } = user

  return (
    <div className='card'>
      <img src={avatar_url} className='user-card-image' alt='...' />
      <a href={html_url} className='user-card' target='_blank' rel='noreferrer'>
        <p className='text-center'>{login}</p>
      </a>
      <button
        className='btn btn-block btn-light btn-sm'
        onClick={() => setUser(user)}
      >
        See repos
      </button>
    </div>
  )
}

export default UserItem
