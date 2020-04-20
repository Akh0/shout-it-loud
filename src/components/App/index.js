import React from 'react'
import { Global, css } from '@emotion/core'
import Title from '../Title'
import Dialog from '../Dialog'
import ShoutBox from '../ShoutBox'

const App = () => (
  <>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

        html,
        body {
          margin: 0;
          padding: 0;

          * {
            box-sizing: border-box;
          }
        }
      `}
    />
    <ShoutBox />
    <Dialog />
  </>
)

export default App
