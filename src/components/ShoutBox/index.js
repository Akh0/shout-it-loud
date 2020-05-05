import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import * as firebase from 'firebase/app'
import useDimensions from './useDimensions'
import Text from './Text'

const Wrapper = styled.div`
  background-color: #fcf5ff;
  border: 5px solid hotpink;
  border-bottom: 0;
  width: 100%;
  height: 80vh;
  overflow: hidden;
`

const ShoutBox = () => {
  const [ref, { width, height }] = useDimensions()

  const [messages, setMessages] = useState([])

  useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight
  }, [messages.length])

  useEffect(() => {
    firebase
      .database()
      .ref('messages')
      .on('value', (snapshot) => {
        const messages = []

        snapshot.forEach((snap) => {
          messages.push(snap.val())
        })

        setMessages(messages)
      })
  }, [])

  return (
    <Wrapper ref={ref}>
      {messages.map(({ id, text, effects }) => (
        <Text
          text={text}
          effects={effects}
          xMax={width - 10}
          yMax={height - 10}
          key={id}
        />
      ))}
    </Wrapper>
  )
}

export default ShoutBox
