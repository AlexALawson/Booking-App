const React = require('react');
const ReactDOM = require('react-dom');
const Axios = require('axios');
const Header = require('./Header');

const DaySchedule = React.createClass({
	getInitialState: function() {
		return {
			today: new Date(),
		};
	},
	appointments: {},
	componentDidMount: function() {
		var th = this;
		this.serverRequest = Axios.get('../data.json')
			.then(function(result) {
				th.appointments = result.data;
			})
	},
	handleClick: function (component) {
		var dayHolder = this.state.today;
		if (component.target.className === "button-left") {
			dayHolder.setDate(dayHolder.getDate() - 1);
		} else if (component.target.className === "button-right") {
			dayHolder.setDate(dayHolder.getDate() + 1);
		}
		console.log(this.appointments);
		
		this.setState({ today: dayHolder });
	},
    render: function() {
        return (
			<div>
				<Header onArrowClick={this.handleClick} />
				<div className="dayTable"> 
					{/*  in above div= dayTable--3cols dayTable--collapse
					<div style={{order: 0}} className="dayTable-cell dayTable-cell--header"><h3></h3></div>
					<div style={{order: 1}} className="dayTable-cell">8am</div>
					<div style={{order: 2}} className="dayTable-cell">9am</div>
					<div style={{order: 3}} className="dayTable-cell">10am</div>
					<div style={{order: 4}} className="dayTable-cell">11am</div>
					<div style={{order: 5}} className="dayTable-cell">12pm</div>
					<div style={{order: 6}} className="dayTable-cell">1pm</div>
					<div style={{order: 7}} className="dayTable-cell">2pm</div>
					<div style={{order: 8}} className="dayTable-cell">3pm</div>
					<div style={{order: 9}} className="dayTable-cell">4pm</div>
					*/}

					<div style={{order: 0}} className="dayTable-cell dayTable-cell--header"><h3>{this.state.today.toDateString()}</h3></div>
					<div style={{order: 1}} className="dayTable-cell">8am</div>
					<div style={{order: 2}} className="dayTable-cell">9am</div>
					<div style={{order: 3}} className="dayTable-cell">10am</div>
					<div style={{order: 4}} className="dayTable-cell">11am</div>
					<div style={{order: 5}} className="dayTable-cell">12pm</div>
					<div style={{order: 6}} className="dayTable-cell">1pm</div>
					<div style={{order: 7}} className="dayTable-cell">2pm</div>
					<div style={{order: 8}} className="dayTable-cell">3pm</div>
					<div style={{order: 9}} className="dayTable-cell">4pm</div>

					{/*
					<div style={{order: 0}} className="dayTable-cell dayTable-cell--header"><h3></h3></div>
					<div style={{order: 1}} className="dayTable-cell">8am</div>
					<div style={{order: 2}} className="dayTable-cell">9am</div>
					<div style={{order: 3}} className="dayTable-cell">10am</div>
					<div style={{order: 4}} className="dayTable-cell">11am</div>
					<div style={{order: 5}} className="dayTable-cell">12pm</div>
					<div style={{order: 6}} className="dayTable-cell">1pm</div>
					<div style={{order: 7}} className="dayTable-cell">2pm</div>
					<div style={{order: 8}} className="dayTable-cell">3pm</div>
					<div style={{order: 9}} className="dayTable-cell">4pm</div>
					*/}
				</div>			
			</div>
        )
    }
});

ReactDOM.render(
		<DaySchedule />,
		document.getElementById('app')
		);
