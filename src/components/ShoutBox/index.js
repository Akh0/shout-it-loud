import React, { useEffect, useState, useRef } from 'react'
import styled from '@emotion/styled'
import * as firebase from 'firebase/app'
import Text from './Text'

const Wrapper = styled.div`
  border: 5px solid hotpink;
  border-bottom: 0;
  width: 100%;
  height: 80vh;
  padding: 20px;
  overflow: auto;
`

const ShoutBox = () => {
  const wrapperRef = useRef()
  const [messages, setMessages] = useState([])
  console.log('ShoutBox -> messages', messages)

  useEffect(() => {
    wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight
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
    <Wrapper ref={wrapperRef}>
      {messages.map(({ id, text, effects }) => (
        <Text text={text} effects={effects} key={id} />
      ))}
    </Wrapper>
  )
}

export default ShoutBox
