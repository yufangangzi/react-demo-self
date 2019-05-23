import React from 'react'
import ReactDOM from 'react-dom'
import Crouter from './route'

// unsubscribe()
import "babel-polyfill"
ReactDOM.render(
  // <Provider store={store}>
    <Crouter/>
  ,
document.getElementById('app'))