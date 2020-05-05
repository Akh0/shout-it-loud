import React from 'react'
import { Global, css } from '@emotion/core'
import Dialog from '../Dialog'
import ShoutBox from '../ShoutBox'

const App = () => (
  <>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

        html,
        body {
          margin: 0;
          padding: 0;
          overflow: hidden;

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
