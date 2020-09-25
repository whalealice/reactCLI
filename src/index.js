import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter,Switch, Link } from "react-router-dom"
import LoadableComponent from './util/loadable'


const HomePage = LoadableComponent(() => import("./component/Home/component/index"))
const MainPage = LoadableComponent(() => import("./component/Main/component/index"))


const App = () => {
	return (
		<BrowserRouter>
			<ul>
				<li><Link to="/home">home</Link></li>
				<li><Link to="/main">main</Link></li>
			</ul>
			<Switch>
				<Route path="/home" component={HomePage} />
				<Route path="/main" component={MainPage} />
			</Switch>
		</BrowserRouter>
	)
}
ReactDOM.render(<App />, document.getElementById('app'));