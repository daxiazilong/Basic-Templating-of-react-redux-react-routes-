import React,{ Component } from 'react';
import  {
    Switch,
    Route,
} from 'react-router-dom';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import First from './first';
import Second from './second';



class Main extends Component {
    constructor(props,state){
        super();
        this.state = {
            msg:''
        }
        console.log(props)
    }
    handleInput = (val) => {
        // const {dispatch} = this.props;  第一种写法直接在props里边取到dispatch，可以直接发送action
        // dispatch({
        //     type:'ADD_INPUT',
        //     text:val
        // })

        const { addText } = this.props;//第二种写法是 使用下面的mapDispatchToProps 把一个dispatch
        addText(val);                  //映射到该组件的props上的一个方法中
    }
    render(){
        return(
            <Switch>
              
                <Route exact path='/' render = { () => ( <div>
                    我是首页
                    <input type="text" onInput = { e => { this.handleInput(e.target.value) } } />
                </div>) }></Route>
                <Route path="/first" component = { First }></Route>
                <Route path="/second" component = { Second }></Route>
            </Switch>
        )
    }
}

// 
const dis2props = (dispatch) => {
    return {
        addText:(text) => dispatch({
            type:'ADD_INPUT',
            text
        })
    }
}

Main = withRouter(connect(// connect 的mapStateToProps 是把redux的state中的一个字段映射到当前props中的某个字段，
    () => { return {} },  // mapDispatchToProps 相当于封装了一个dispatch并将其映射到该组件
    dis2props
)(Main))


export default Main;