import React from 'react'
import * as S from './flex.style'

const Flex = ({
  gap,
  hover,
  align,
  width,
  height,
  cursor,
  bRadius,
  padding,
  justify,
  children,
  registeredDate,
  vertical = false,
  shadow = false,
  overflowHidden,
}) => {
  return (
    <S.Flex
      gap={gap}
      align={align}
      hover={hover}
      data-register-date={registeredDate}
      width={width}
      cursor={cursor}
      height={height}
      shadow={shadow}
      padding={padding}
      justify={justify}
      bRadius={bRadius}
      vertical={vertical}
      overflowHidden={overflowHidden}
    >
      {children}
    </S.Flex>
  )
}

export default Flex
