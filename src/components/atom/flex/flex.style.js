import styled from 'styled-components'

const getPadding = ({ padding }) => {
  const arr = Array.isArray(padding) ? padding : padding ? [padding] : []

  return arr.length
    ? `padding: ${arr.map((el) => `${el / 16}rem`).join(' ')};`
    : ''
}

const getGap = ({ gap }) => (gap ? `gap: ${gap / 16}rem;` : '')

const getJustify = ({ justify }) =>
  justify ? `justify-content: ${justify};` : ''

const getAlign = ({ align }) => (align ? `align-items: ${align};` : '')

const getVertical = ({ vertical }) =>
  vertical ? 'flex-direction: column;' : ''

const getShadow = ({ shadow }) =>
  shadow ? 'box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;' : ''

const getBorderRadius = ({ bRadius }) =>
  bRadius ? `border-radius: ${bRadius / 16}rem;` : ''

const getHeight = ({ height }) => (height ? `height: ${height / 16}rem;` : '')

const getWidth = ({ width }) => (width ? `width: ${width / 16}rem;` : '')

const getCursor = ({ cursor }) => (cursor ? `cursor: ${cursor};` : '')

const getOverflowHidden = ({ overflowHidden }) =>
  overflowHidden ? 'overflow: hidden;' : ''

const getHover = ({ hover }) =>
  hover
    ? `  position: relative;
    &:before {
      opacity: 0;
      position: absolute;
      content: attr(data-register-date);
      font-size: 12px;
      right: 0.5rem;
      bottom: 0.5rem;
      font-size: 12px;
    }

    &:hover {
      box-shadow: rgba(17, 27, 26, 0.6) 0px 2px 12px;

      &:before {
        opacity: 1;
        transition: opacity 650ms;
      }
    }`
    : ''

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${getGap}
  ${getWidth}
  ${getAlign}
  ${getHeight}
  ${getCursor}
  ${getShadow}
  ${getHover}
  ${getJustify}
  ${getPadding}
  ${getVertical}
  ${getBorderRadius}
  ${getOverflowHidden}
`
