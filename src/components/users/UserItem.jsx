import React from 'react'

const UserItem = ({ avatar_url, html_url, login }) => {
  return (
    <div className='card'>
      <img src={avatar_url} className='user-card-image' alt='...' />
      <a href={html_url} className='user-card' target='_blank' rel='noreferrer'>
        <p className='text-center'>{login}</p>
      </a>
    </div>
  )
}

export default UserItem
