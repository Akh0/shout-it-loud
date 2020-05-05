import React, { useState, useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import * as firebase from 'firebase/app'
import CharCounter from './CharCounter'
import {
  getRandomFontFamily,
  getRandomFontSize,
  getRandomFontStyle,
  getRandomFontWeight,
  getRandomTextShadow,
  getRandomDeg
} from './effects'

const database = firebase.database()

const INPUT_LIMIT = 60

const StyledForm = styled.form`
  position: relative;
  border: 5px solid #cc69ff;
  width: 100%;
  height: 20vh;
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 20px;
  font-size: 6vh;
  font-family: 'Indie Flower', cursive;
`

const StyledCharCounter = styled(CharCounter)`
  position: absolute;
  bottom: 6px;
  right: 6px;
`

const Dialog = () => {
  const inputRef = useRef()
  const [value, setValue] = useState('')

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleChange = (e) => {
    const message = e.target.value

    if (message.length <= INPUT_LIMIT) {
      setValue(message)
    }
  }

  const sendMessage = () => {
    if (!value) {
      return
    }

    const newMessageKey = database.ref().child('messages').push().key

    const updates = {
      [`/messages/${newMessageKey}`]: {
        id: newMessageKey,
        text: value,
        effects: {
          fontFamily: getRandomFontFamily(),
          fontSize: getRandomFontSize(),
          fontStyle: getRandomFontStyle(),
          fontWeight: getRandomFontWeight(),
          textShadow: getRandomTextShadow(),
          rotate: getRandomDeg(),
          xFactor: Math.random(),
          yFactor: Math.random()
        }
      }
    }

    return firebase
      .database()
      .ref()
      .update(updates)
      .then(() => {
        setValue('')
      })
  }

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault()
        sendMessage()
      }}
    >
      <Input ref={inputRef} type="text" value={value} onChange={handleChange} />
      <StyledCharCounter message={value} limit={INPUT_LIMIT} />
    </StyledForm>
  )
}

export default Dialog
