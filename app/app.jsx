const React = require('react');
const ReactDOM = require('react-dom');
const Axios = require('axios');
const Header = require('./Header');

const DaySchedule = React.createClass({
	getInitialState: function() {
		return {
			schedule: [],
			today: new Date(),
		};
	},
	componentDidMount: function() {
		var th = this;
		// this.serverRequest = Axios.get('../data.json')
		// 	.then(function(result) {
		// 		th.setState({
		// 			schedule: result.data.schedule
		// 		});
		// 		console.log(th.state.schedule);
		// 	})
		// console.log('DIDMOUNT this.state.today', this.state.today);
	},
	clickHandler: function() {
		console.log('this.state.today', this.state.today);
		let newDay = this.adjustDay(1);
		console.log('this.state.today', this.state.today);
		this.setState({
			today: newDay
		})
		console.log('this.state.today', this.state.today);
	},
	adjustDay: function(adj, type) {
		let dateVal = new Date ();
		dateVal.setDate(this.state.today.getDate() + adj);
		if (type === "string") {
			return dateVal.toDateString();
		}
		return dateVal;
	},
	handleClick: function (component) {
		console.log('child clicked');
		//console.log(component.target.className);
		var dayHolder = this.state.today;
		if (component.target.className === "button-left") {
			console.log("left triggered");
		} else if (component.target.className === "button-right") {
			console.log("right triggered");
		}
	},
    render: function() {
		// console.log('RENDERED this.state.today', this.state.today);
        return (
			<div>
				<Header onArrowClick={this.handleClick} />
				<div className="dayTable"> 
					{/*  in above div= dayTable--3cols dayTable--collapse
					<div style={{order: 0}} className="dayTable-cell dayTable-cell--header"><h3>{this.adjustDay(-1, 'string')}</h3></div>
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

					<div style={{order: 0}} className="dayTable-cell dayTable-cell--header"><h3>{this.adjustDay(0, 'string')}</h3></div>
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
					<div style={{order: 0}} onClick={this.clickHandler} className="dayTable-cell dayTable-cell--header"><h3>{this.adjustDay(1, 'string')}</h3></div>
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
