var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = "https://brilliant-fire-8481.firebaseio.com/" 
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory')
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Form = require('./components/form.jsx')

module.exports = React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},
	mixins: [ ReactFire ],
	componentWillMount: function(){
		this.bindAsObject(new Firebase(rootUrl + 'books/'), 'books');
	},
	render: function(){
		return <div>
			<div className="col-md-offset-10">
				<a href="#/dashboard">Home</a>
				<a className="col-md-offset-1" href="#/">Logout</a>
			</div>
			<div>
				<h4>Add a new book and review</h4>
				<Form />
			</div>
		</div>
	}
});

