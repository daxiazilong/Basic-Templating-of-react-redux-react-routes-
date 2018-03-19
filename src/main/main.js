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
        const {dispatch} = this.props;
        dispatch({
            type:'ADD_INPUT',
            text:val
        })
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

Main = withRouter(connect()(Main))


export default Main;