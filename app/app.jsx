/**
 * Created by crymer on 12/09/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load Foundation
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
    <p>Boilerplate 3</p>,
    document.getElementById('app')
);