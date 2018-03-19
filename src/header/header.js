import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ActiveItems} from './customActive'
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
                <ActiveItems activeOnlyWhenExact={true}  to="/first" label="我是第一个页面" />
                <ActiveItems activeOnlyWhenExact={true}  to="/second" label="我是第二个" />
                <ActiveItems activeOnlyWhenExact={true}  to="/" label="返回首页" />
            </nav>
        )
    }
}

export default Header;