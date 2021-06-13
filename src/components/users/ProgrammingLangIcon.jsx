import React from 'react'

const ProgrammingLangIcon = ({ language }) => {
  return (
    <>
      <small>
        {language === 'JavaScript' && (
          <i className='programming lang-javascript'></i>
        )}
        {language === 'PHP' && <i className='programming lang-php'></i>}
        {language === 'SCSS' && <i className='programming lang-css'></i>}
        {language === 'CSS' && <i className='programming lang-css'></i>}
        {language === 'HTML' && <i className='programming lang-html'></i>}
        {language === 'Python' && <i className='programming lang-python'></i>}
        {language === 'Vue' && <i className='programming lang-javascript'></i>}
        {language === 'TypeScript' && (
          <i className='programming lang-typescript'></i>
        )}
        {language === 'Ruby' && <i className='programming lang-ruby'></i>}
        {!language && '---'}
      </small>
    </>
  )
}

export default ProgrammingLangIcon
