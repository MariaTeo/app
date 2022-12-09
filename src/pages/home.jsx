import React, { useState, useEffect } from 'react'
import { ProfileCard, Flex, Text } from '../components'
import { useDebounce } from 'use-hooks'

const Home = () => {
  const [myData, setMyData] = useState([])
  const [value, setValue] = useState('')
  const change = (e) => {
    setValue(e.target.value)
  }

  const debouncedSearchedTerm = useDebounce(value.toLowerCase(), 800)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          'https://randomuser.me/api?results=100&nat=us,dk,fr,gb,br'
        )
        const data = await res.json()
        return setMyData(data)
      } catch (error) {
        console.log(`This is your error :(, ${error.message}`)
      }
    }

    getData()
  }, [])

  const { results } = myData

  const filteredUserList = results?.filter(
    ({ registered }) =>
      1999 < registered.date.slice(0, 4) && registered.date.slice(0, 4) < 2011
  )

  const searchFilteredList = filteredUserList?.filter(({ name }) => {
    const { title, first, last } = name
    const fullName = `${title} ${first} ${last}`

    return fullName.toLowerCase().includes(debouncedSearchedTerm.toLowerCase())
  })

  return (
    <Flex vertical gap={32} align='start'>
      <Flex vertical gap={8} padding={[0, 16]}>
        <Text as='h1' color='#57070c'>
          Filter users by name:
        </Text>
        <input type='text' value={value} onChange={change} />
        {debouncedSearchedTerm && searchFilteredList?.length > 0 && (
          <Text>Users found: {searchFilteredList?.length}</Text>
        )}
      </Flex>

      {searchFilteredList?.length ? (
        <Flex gap={32} justify='center'>
          {searchFilteredList.map(
            ({ name, picture, email, registered: { date } }, k) => (
              <ProfileCard
                searchBy={debouncedSearchedTerm}
                email={email}
                name={name}
                date={date}
                picture={picture}
                key={k}
              />
            )
          )}
        </Flex>
      ) : (
        <Text>No user found :(</Text>
      )}
    </Flex>
  )
}

export default Home
