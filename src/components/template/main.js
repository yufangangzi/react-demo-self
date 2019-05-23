import React from 'react'
import ReactDOM from 'react-dom'
import Child1 from '../appchild1'
import Child2 from '../appchild2'
import { Router ,Route, Switch, Redirect} from "react-router";
import {
  Layout
} from 'antd';
import Hello from '../hello'
const {
  Header, Content, Footer, Sider,
} = Layout;
class App extends React.Component{
  constructor(props,store) {
    super(props),
    this.state = {
      silder: {
        backgroundColor: '#fff'
      },
      helloName: 'cg'
    },
    this.hand = () => {
      console.log(this.props.onTodoClick)
      this.props.onTodoClick('    hello we are good')
      this.setState({
        helloName: 'hxw'
      })
    }
  }
  store () {
    return {
      store: PropTypes.object.isRequired
    }
  }
  render() {
    return <div>
      <Layout>
        <Header>header</Header>
        <Layout>
          <Sider onClick={this.hand} style={this.state.silder}>left sidebar</Sider>
          <Content>
            <Hello name={this.state.helloName}/>
            <Route path="/child" component={Child1}/>
            <Route path="/child2" component={Child2}/>
          </Content>
        </Layout>
        <Footer>{this.state.helloName}{this.props.show}</Footer>
      </Layout>
    </div>
  }
}
export default App
// ReactDOM.render(<App/>,document.getElementById('app'))