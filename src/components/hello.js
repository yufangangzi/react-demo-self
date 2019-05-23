import React from 'react'
import { connect } from 'react-redux'
import { setVisible } from '../action'
class Hello extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
        name: 'lan'
    },
    this.hand = () => {
      this.props.dispatch(setVisible('llll'))
    }
  }
  // getDefaultProps(){
  //   //设置默认的props，也可以用dufaultProps设置组件的默认属性. This is only supported for classes created using React.createClass
  // }
  // getInitialState(){
  //   // 在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props
  // }
  componentWillMount(){
    // 组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。
  }
  
  render() {
    // react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。此时就不能更改state了。
    return <div>
      hello world {this.state.name}
      <p onClick={this.hand}>hello {this.props.name}</p>
    </div>
  }
  componentDidMount(){
    //组件渲染之后调用，只调用一次。
  }
  componentWillReceiveProps(nextProps){
    // 组件初始化时不调用，组件接受新的props时调用。
    console.log(nextProps)
  }
  shouldComponentUpdate(nextProps, nextState){
    return true
    //react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候
  }
  componentWillUpdata(nextProps, nextState){
    // 组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
  }
  componentDidUpdate(){
    // 组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。
  }
  componentWillUnmount(){
    // 组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
  }
}
Hello = connect()(Hello)
export default Hello