const React = require('react');
const ReactDOM = require('react-dom');
const Axios = require('axios');

const DaySchedule = React.createClass({
	getInitialState: function() {
		return {
			schedule: []
		};
	},
	componentDidMount: function() {
		var th = this;
		this.serverRequest = Axios.get('../data.json')
			.then(function(result) {
				th.setState({
					schedule: result.data.schedule
				});
			})
	},
    render: function() {
        return (
			<div>
				<div className="dayTable-cell dayTable-cell--header"><h3>Tue, January 3</h3></div>
				<div className="dayTable-cell">8am</div>
				<div className="dayTable-cell">9am</div>
				<div className="dayTable-cell dayTable-cell--avail">10am</div>
				<div className="dayTable-cell dayTable-cell--avail">11am</div>
				<div className="dayTable-cell dayTable-cell--avail">12pm</div>
				<div className="dayTable-cell">1pm</div>
				<div className="dayTable-cell">2pm</div>
				<div className="dayTable-cell dayTable-cell--avail">3pm</div>
				<div className="dayTable-cell">4pm</div>


			</div>
        )
    }
});

ReactDOM.render(
		<DaySchedule />,
		document.getElementById('app')
		);
