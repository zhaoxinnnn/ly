import React from 'react';
import ReactDOM from 'react-dom';

import Login from './login/login';

export default class Main extends React.Component {
    showList (datas) {
        let listStr = "";
        listStr += datas.map(info=>{
            return `<li><a href="${info.path}">info.text</a></li>`;
        });
        return `<ul>${listStr}</ul>`
    };
    render(){
        let itemObj = [
            {"path" : "login","text" : "登录"}
        ];
        return (
            <div>
                <header className="header">我是header</header>
                <div className="content">{this.props.child}</div>
                <nav className="nav">
                    {this.showList(itemObj)};
                </nav>
            </div>
        )
    }
}