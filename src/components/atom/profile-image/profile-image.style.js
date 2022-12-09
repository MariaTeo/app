import styled from 'styled-components'

const getHeight = ({ height }) => (height ? `height: ${height / 16}rem;` : '')

const getWidth = ({ width }) => (width ? `width: ${width / 16}rem;` : '')

export const ProfileImage = styled.img`
  ${getHeight}
  ${getWidth}
`
