var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = "https://brilliant-fire-8481.firebaseio.com/" 
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory')
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var BookInfo = require('./components/bookinfo');
var Review = require('./components/review');

module.exports = React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},
	mixins: [ ReactFire ],
	componentWillMount: function(){
		var love = 'books/' + this.props.params.any;
		console.log(love);
		this.bindAsObject(new Firebase(rootUrl + love), 'books');
	},
	getInitialState: function(){
		return {
			books: {}
		}
	},
	render: function(){
		return <div>
			<BookInfo book={this.state.books} id={this.props.params.any}/>
			<Review bookStore={this.firebaseRefs.books} book={this.state.books} id={this.props.params.any}/>
		</div>
	}
});

