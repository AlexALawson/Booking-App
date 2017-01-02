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
            <tbody>
				<tr>
					<td>8</td>
					<td>Appointment</td>
				</tr>
				<tr>
					<td>9</td>
					<td>Appointment</td>
				</tr>
				<tr>
					<td>10</td>
					<td>Appointment</td>
				</tr>
				<tr>
					<td>11</td>
					<td classList="booked">Appointment</td>
				</tr>
			</tbody>
        )
    }
});

ReactDOM.render(
		<DaySchedule />,
		document.getElementById('app')
		);
