import React from 'react'
import { PropTypes } from 'prop-types'

const SearchQueryAndRemoveBtn = ({
  searchQuery,
  removeSearchQueryAndSetFreshUsers,
}) => {
  return (
    <div style={searchQueryAndRemoveBtnStyles}>
      <small>
        search query: <span className='font-weight-bold'>{searchQuery}</span>
      </small>
      <button
        className='btn btn-secondary btn-sm'
        onClick={() => removeSearchQueryAndSetFreshUsers()}
      >
        Remove Search Query
      </button>
    </div>
  )
}

SearchQueryAndRemoveBtn.prototype = {
  searchQuery: PropTypes.string.isRequired,
  removeSearchQueryAndSetFreshUsers: PropTypes.func.isRequired,
}

export default SearchQueryAndRemoveBtn

const searchQueryAndRemoveBtnStyles = {
  marginTop: '20px',
  marginBottom: '-30px',
  display: 'flex',
  justifyContent: 'space-between',
}
