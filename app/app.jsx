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
			<table>
				<tbody>
					<tr>
						<td></td>
						<td>Tue, January 3</td>
						<td>Wed, January 4</td>
						<td>Thu, January 5</td>
					</tr>
					<tr>
						<td>8</td>
						<td></td>
						<td></td>
						<td className='avail'>Available</td>
					</tr>
					<tr>
						<td>9</td>
						<td></td>
						<td className='avail'>Available</td>
						<td className='avail'>Available</td>
					</tr>
					<tr>
						<td>10</td>
						<td></td>
						<td className='avail'>Available</td>
						<td></td>
					</tr>
					<tr>
						<td>11</td>
						<td className='avail'>Available</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>12</td>
						<td className='avail'>Available</td>
						<td></td>
						<td></td>
					</tr>        
					<tr>
						<td>1</td>
						<td className='avail'>Available</td>
						<td className='avail'>Available</td>
						<td></td>
					</tr>
					<tr>
						<td>2</td>
						<td></td>
						<td className='avail'>Available</td>
						<td></td>
					</tr>												
				</tbody>
			</table>
        )
    }
});

ReactDOM.render(
		<DaySchedule />,
		document.getElementById('app')
		);
