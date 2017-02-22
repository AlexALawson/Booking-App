const React = require('react');
const ReactDOM = require('react-dom');
const Axios = require('axios');
const Header = require('./components/Header.jsx');
const DaySchedule = require('./components/DaySchedule.jsx');


ReactDOM.render(
	  <div>
			<DaySchedule/>
		</div>,
		document.getElementById('app')
		);
