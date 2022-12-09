import styled from 'styled-components'

const getBackgroundColor = ({ h }) =>
  h ? 'background-color: green;' : 'background-color: transparent;'

const getColor = ({ h }) => (h ? 'color: white;' : '')

export const Span = styled.span`
  ${getColor}
  ${getBackgroundColor}
`
