import React from 'react'
import ProgrammingLangIcon from './ProgrammingLangIcon'

const Repo = ({ html_url, name, language, description }) => {
  return (
    <div className='card p-3'>
      <ProgrammingLangIcon language={language} />
      <a href={html_url} target='_blank' rel='noreferrer'>
        <p style={{ marginBottom: 0 }}>{name}</p>
      </a>
      <small>
        {description} {!description && '---'}
      </small>
    </div>
  )
}

export default Repo
