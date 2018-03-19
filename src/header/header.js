import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './header.css';
class Header extends Component{
    constructor(props,state){
        super();
        this.state = {
            mes:'enen'
        }
        console.log(state)
    }
    render(en){
        console.log(en)
        return(
            <nav>

                <Link to='/first'>我是第一个页面</Link>

                <Link to='/second'> 我是第二个</Link>
                <Link to='/'> 返回首页</Link>
            </nav>
        )
    }
}

export default Header;