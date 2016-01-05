var React = require('react');
var ReactFire = require('reactfire');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory')
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Register = require('./register');
var Main = require('./main');
var Add = require('./add');
var Books = require('./bookmain.jsx')
var Register = require('./register');

module.exports = (
	<Router history= {new HashHistory}>
		<Route path='/' component={Register}> 
		</Route>
		<Route path='/dashboard' component={Main}>
		</Route>
		<Route path='/add' component={Add}>
		</Route>
		<Route path="/books/:any" component={Books}>
		</Route>
	</Router>
)
