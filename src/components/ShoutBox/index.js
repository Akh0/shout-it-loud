import React, { useEffect, useState, useRef } from 'react'
import styled from '@emotion/styled'
import * as firebase from 'firebase/app'
import Text from './Text'
import useDimensions from './useDimensions'

const Wrapper = styled.div`
  position: relative;
  background-color: #fcf5ff;
  border: 5px solid hotpink;
  border-bottom: 0;
  width: 100%;
  height: 80vh;
  padding: 20px;
  overflow: auto;
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
          xMax={width}
          yMax={height}
          key={id}
        />
      ))}
    </Wrapper>
  )
}

export default ShoutBox
