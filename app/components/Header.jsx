const React = require('react');
const ReactDOM = require('react-dom');

const Header = React.createClass({
    render: function() {
        return (
            <div className="dayView-header">
                <div className='button-left' onClick={this.props.onArrowClick}></div>
                <h2 className="header">Select Day and Time</h2>
                <div className='button-right' onClick={this.props.onArrowClick}></div>
            </div>
        )
    }

});

module.exports = Header;
