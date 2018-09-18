import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Banner from '../banner/banner';
import Hot from './hot/hot';
import Activity from './activity/activity';
import Shelves from './shelves/shelves';
import Server from './server/server';
class Game extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <Banner></Banner>
        </div>

        <Router>
          <div>
            <ul className="game-tabBar">
              <li><NavLink exact to="/" activeClassName="active">热门</NavLink></li>
              <li><NavLink to="/game/activity" activeClassName="active">活动</NavLink></li>
              <li><NavLink to="/game/shelves"activeClassName="active">新上架</NavLink></li>
              <li><NavLink to="/game/server"activeClassName="active">新开服</NavLink></li>
            </ul>
            
            <Route exact path='/' component={Hot}/>
            <Route path='/game/activity' component={Activity}/>
            <Route path='/game/shelves' component={Shelves}/>
            <Route path='/game/server' component={Server}/>
          </div>
         
        </Router>

      </div>      
    );
  }
}

export default Game;