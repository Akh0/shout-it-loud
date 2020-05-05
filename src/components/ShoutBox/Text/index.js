import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import useDimensions from '../useDimensions'

const zoomKeyframes = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(2);
  }

  100% {
    transform: scale(1);
  }
`

const Animation = styled.div`
  animation: ${zoomKeyframes} 600ms ease-in-out;
`

const Wrapper = styled('div', {
  shouldForwardProp: (prop) => prop === 'children'
})`
  position: absolute;
  font-size: 30px;
  margin-bottom: 4px;
  font-family: ${({ fontFamily }) => `${fontFamily}, fantasy, cursive`};
  font-size: ${({ fontSize }) => fontSize};
  font-style: ${({ fontStyle }) => fontStyle};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-shadow: ${({ textShadow }) => textShadow};
  transform: ${({ x, y, rotate }) =>
    `translate3d(${x}px, ${y}px, 0) rotate(${rotate || 0}deg)`};
  max-width: 25vw;
`

const getX = (xFactor, xMax, width) => {
  const x = Math.floor(xMax * xFactor)

  return x > xMax - width ? x - width : x
}

const getY = (yFactor, yMax, height) => {
  const y = Math.floor(yMax * yFactor)

  return y > yMax - height ? y - height : y
}

const Text = ({ text, effects, xMax, yMax }) => {
  const [ref, { width, height }] = useDimensions()

  const { xFactor, yFactor, ...rest } = effects

  return (
    <Wrapper
      {...rest}
      x={getX(xFactor, xMax, width)}
      y={getY(yFactor, yMax, height)}
      ref={ref}
    >
      <Animation>{text}</Animation>
    </Wrapper>
  )
}

Text.defaultProps = {
  effects: {}
}

Text.propTypes = {
  text: PropTypes.node.isRequired,
  effects: PropTypes.shape(),
  xMax: PropTypes.number.isRequired,
  yMax: PropTypes.number.isRequired
}

export default Text
