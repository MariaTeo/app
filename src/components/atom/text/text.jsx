import React from 'react'
import * as S from './text.style'

const Text = ({ children, as = 'p', color, shadow }) => {
  return (
    <S.Text color={color} as={as} shadow={shadow}>
      {children}
    </S.Text>
  )
}

export default Text
