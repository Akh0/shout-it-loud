import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Wrapper = styled('div', {
  shouldForwardProp: (prop) => prop === 'children'
})`
  font-size: 30px;
  margin-bottom: 4px;
  font-family: ${({ fontFamily }) => `${fontFamily}, fantasy, cursive`};
  font-size: ${({ fontSize }) => fontSize};
  font-style: ${({ fontStyle }) => fontStyle};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-shadow: ${({ textShadow }) => textShadow};
`

const Text = ({ text, effects }) => {
  return <Wrapper {...effects}>{text}</Wrapper>
}

Text.defaultProps = {
  effects: {}
}

Text.propTypes = {
  text: PropTypes.node.isRequired,
  effects: PropTypes.shape()
}

export default Text
