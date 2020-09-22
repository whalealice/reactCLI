import React from 'react'
import ReactDOM from 'react-dom'
import './a.css'
import styles from './b.less'

const App = () => {
	return (
		<div>
			<div className="a">aaaa333</div>
			<div className="b">bbbb</div>
			<div className={styles.c}>vvvv</div>
		</div>
	)
}
ReactDOM.render(<App />, document.getElementById('app'));