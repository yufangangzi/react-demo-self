import { connect } from 'react-redux'
import App from './template/main'
import { setVisible } from '../action'
const mapStateToProps = state => {
  return {
    show: state.visibleTode
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(setVisible(id))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
// ReactDOM.render(<App/>,document.getElementById('app'))