// import { Router, Route  } from 'react-router'
// import { BrowserRouter as Router , HashRouter, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react';
import App from '../components/main.js'
import Child from '../components/child'
import Child1 from '../components/appchild1'
import Child2 from '../components/appchild2'
// export default class Crouter extends Component{
//   render() {
//     return (
//       <Router>
//         <Switch>
//           <Route exact path='/' component={App} />
//           <Route path="/repos" component={Child}/>
//         </Switch>
//       </Router>
//     )
//   }
// }

import { Router ,Route, Switch, Redirect} from "react-router";
import { createBrowserHistory } from "history";
const history = createBrowserHistory()


import { Provider } from "react-redux";
import { createStore } from 'redux'
import todoApp from '../reducer'
import {
  getHome,setHome,setVisible
} from '../action'
let store = createStore(todoApp)
console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.dispatch(getHome('Learn about actions'))
store.dispatch(setHome('set about actions'))
store.dispatch(setHome('set about actions'))
store.dispatch(setVisible('we are family'))





export default class Crouter extends Component{
  render() {
    return (
      <Provider store={store}>
      <Router history={history}>
         <Switch>
          <Route path="/repos" component={Child}/>
          <Route path="/" component={App}/>
         </Switch>
      </Router>
      </Provider>
    )
  }
}