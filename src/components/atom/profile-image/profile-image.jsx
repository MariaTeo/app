import React from 'react'
import * as S from './profile-image.style'

const ProfileImage = ({ picture, alt, width, height }) => {
  return (
    <S.ProfileImage src={picture} alt={alt} width={width} height={height} />
  )
}

export default ProfileImage
