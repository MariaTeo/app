import React from 'react'
import * as S from './search-highlight.style'

const SearchHighlight = ({ children, h }) => {
  return <S.Span h={h}>{children}</S.Span>
}

export default SearchHighlight
