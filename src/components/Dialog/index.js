import React, { useState, useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import * as firebase from 'firebase/app'
import {
  getRandomFontSize,
  getRandomFontStyle,
  getRandomFontWeight,
  getRandomTextShadow
} from './effects'

const database = firebase.database()

const StyledForm = styled.form`
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

const Dialog = () => {
  const inputRef = useRef()
  const [value, setValue] = useState('')

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleChange = (e) => {
    setValue(e.target.value)
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
          fontSize: getRandomFontSize(),
          fontStyle: getRandomFontStyle(),
          fontWeight: getRandomFontWeight(),
          textShadow: getRandomTextShadow()
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
    </StyledForm>
  )
}

export default Dialog
