import styled from 'styled-components'

const sizeMapDesktop = {
  p: 18,
  h1: 38,
}

const sizeMapTablet = {
  p: 16,
  h1: 30,
}

const sizeMapMobile = {
  p: 14,
  h1: 24,
}

const getColor = ({ color }) => (color ? `color: ${color};` : ``)

const getAsMobile = ({ as = 'p' }) =>
  as ? `font-size: ${sizeMapMobile[as] / 16}rem;` : ``

const getAsTablet = ({ as = 'p' }) =>
  as ? `font-size: ${sizeMapTablet[as] / 16}rem;` : ``

const getAsDesktop = ({ as = 'p' }) =>
  as ? `font-size: ${sizeMapDesktop[as] / 16}rem;` : ``

export const Text = styled.h1`
  text-align: center;
  display: block;

  ${getAsMobile}
  ${getColor}

  @media screen and (min-width: 768px) {
    ${getAsTablet}
  }

  @media screen and (min-width: 1040px) {
    ${getAsDesktop}
  }
`
