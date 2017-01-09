const React = require('react');
const ReactDOM = require('react-dom');

const Header = () => (
    <div className="dayView-header">
        <div className='button-left'></div>
        <h2 className="header">Select Day and Time</h2>
        <div className='button-right'></div>				
    </div>
);

module.exports = Header;