import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import Game from './component/game/game';
import Giftbag from './component/giftBag/giftBag';
import User from './component/user/user';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

class TabBar extends React.Component {
  render() {
    return (
      <Router >
        <div className="app">
          <ul className="tabBar">
            <li><NavLink exact to="/" activeClassName="active"><i className="iconfont">&#xe618;</i>游戏</NavLink></li>
            <li><NavLink to="/giftbag" activeClassName="active"><i className="iconfont">&#xe704;</i>礼包</NavLink></li>
            <li><NavLink to="/user"activeClassName="active"><i className="iconfont">&#xe61d;</i>个人中心</NavLink></li>
          </ul>    
          <Route exact path="/" component={Game} />
          <Route path="/giftbag" component={Giftbag} />
          <Route path="/user" component={User} />
        </div>
      </Router>
    );
  }
}
ReactDOM.render(<TabBar/>,document.getElementById('root'));
registerServiceWorker();
