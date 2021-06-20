import React from 'react'

const HeroArea = () => {
  return (
    <div className='heroArea'>
      <h1 className='text-center display-4'><i className='fab fa-github d-md-none'></i></h1>
      <h1 className='display-4 text-center font-weight-bolder'>
        <i className='fab fa-github d-none d-md-inline'></i> Github Finder
      </h1>
      <p className='text-center'>search user and see the repositories</p>
    </div>
  )
}

export default HeroArea
