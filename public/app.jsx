//Greeter Message component
var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter.jsx')

var firstName = "Carol";

ReactDOM.render(
    <Greeter name={firstName}/>,
    document.getElementById('app')
);
