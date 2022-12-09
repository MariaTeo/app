import React from 'react'
import { Flex, Text, ProfileImage, SearchHighlight } from '../../atom'

const ProfileCard = ({ name, picture, searchBy, date }) => {
  const { title, first, last } = name
  const fullName = `${title} ${first} ${last}`

  const registeredDate = `Registered on: ${date
    .slice(0, 10)
    .split('-')
    .reverse()
    .join('/')}`

  const splitFullName = fullName.toLowerCase().split(searchBy.toLowerCase())

  const splitLength = splitFullName.map((str) => str.length)

  const lengthList = splitFullName
    .map((str) => str.length)
    .map((x, index) =>
      index < splitLength.length - 1 ? [x, searchBy.length] : [x]
    )
    .flatMap((x) => x)

  const indexList = lengthList.map((_, k) =>
    lengthList.slice(0, k + 1).reduce((acc, curr) => acc + curr, 0)
  )

  const finalList = indexList.map((searchIndex, k) => ({
    string: fullName.slice(k ? indexList[k - 1] : 0, searchIndex),
    highlight: !!(k % 2),
  }))

  return (
    <Flex
      overflowHidden
      width={360}
      height={100}
      registeredDate={registeredDate}
      shadow
      gap={16}
      hover
      bRadius={8}
      cursor='pointer'
      align='center'
    >
      <ProfileImage
        picture={picture.large}
        alt={`This is the profile picture of ${fullName}`}
        width={100}
        height={100}
      />
      {finalList && (
        <Text>
          {finalList.map(({ string, highlight }, k) => (
            <SearchHighlight h={highlight} key={k}>
              {string}
            </SearchHighlight>
          ))}
        </Text>
      )}
    </Flex>
  )
}

export default ProfileCard
