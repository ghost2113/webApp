import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import App from './component/App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';



function Game(){
	return <h2>BOSS页面1</h2>
}
function Reward(){
	return <h2>BOSS页面2</h2>
}
function User(){
	return <h2>BOSS页面3</h2>
}
class TabBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // 使用 `ref` 的回调将 text 输入框的 DOM 节点存储到 React 
    // 实例上（比如 this.textInput）
    return (
      <Router>
      <div className="APP">
        <ul className="tabBar">
          <li><Link to="/"><i className="iconfont">&#xe618;</i>Game</Link></li>
          <li><Link to="/reward"><i className="iconfont">&#xe704;</i>Reward</Link></li>
          <li><Link to="/user"><i className="iconfont">&#xe61d;</i>User</Link></li>
        </ul>
  
        <hr />
        <Route exact path="/" component={Game} />
        <Route path="/reward" component={Reward} />
        <Route path="/user" component={User} />
      </div>
    </Router>
    );
  }
}
ReactDOM.render(<TabBar/>,document.getElementById('root'));
registerServiceWorker();
