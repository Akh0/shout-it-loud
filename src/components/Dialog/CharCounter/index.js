import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  font-size: 12px;
  line-height: 20px;
`

const CharCounter = ({ message, limit, className }) => (
  <Wrapper className={className}>
    {message.length}/{limit}
  </Wrapper>
)

CharCounter.defaultProps = {
  limit: 60,
  className: undefined
}

CharCounter.propTypes = {
  message: PropTypes.string.isRequired,
  limit: PropTypes.number,
  className: PropTypes.string
}
export default CharCounter
