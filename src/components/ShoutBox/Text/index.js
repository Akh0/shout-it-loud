import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Wrapper = styled('div', {
  shouldForwardProp: (prop) => prop === 'children'
})`
  position: absolute;
  font-size: 30px;
  font-family: ${({ fontFamily }) => `${fontFamily}, fantasy, cursive`};
  font-size: ${({ fontSize }) => fontSize};
  font-style: ${({ fontStyle }) => fontStyle};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-shadow: ${({ textShadow }) => textShadow};
  transform: ${({ x, y }) => `translate3d(${x}px, ${y}px, 0)`};
`

const Text = ({ text, effects, xMax, yMax }) => {
  const { x, y, ...rest } = effects

  const xValue = Math.floor(xMax * Math.random())
  const yValue = Math.floor(yMax * Math.random())

  return (
    <Wrapper {...rest} x={xValue} y={yValue}>
      {text}
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
