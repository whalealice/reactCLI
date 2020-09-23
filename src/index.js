import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter,Switch, Link } from "react-router-dom"

import {Home} from  './component/Home'
import {Main} from  './component/Main'

const App = () => {
	return (
		<BrowserRouter>
			<ul>
				<li><Link to="/home">home</Link></li>
				<li><Link to="/main">main</Link></li>
			</ul>
			<Switch>
				<Route path="/home" component={Home} />
				<Route path="/main" component={Main} />
			</Switch>
		</BrowserRouter>
	)
}
ReactDOM.render(<App />, document.getElementById('app'));