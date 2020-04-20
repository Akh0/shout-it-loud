import React from 'react'
import ReactDOM from 'react-dom'
import './init-firebase'
import App from './components/App'

ReactDOM.render(
    <App />,
  document.getElementById('app'),
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept()
}
