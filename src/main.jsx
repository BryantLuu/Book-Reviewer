var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = "https://brilliant-fire-8481.firebaseio.com/" 
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory')
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
var Route = ReactRouter.Route;
var Books = require('./components/books.jsx');
var Booklist = require('./components/booklist');

module.exports = React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},
	mixins: [ ReactFire ],
	componentWillMount: function(){
		this.bindAsObject(new Firebase(rootUrl + 'books/'), 'books');
	},
	getInitialState: function(){
		return {
			books: {},
		}
	},
	render: function(){
		return <div>
			<Link className="col-md-offset-10" to="/">Logout</Link>
			<div>
				<div id="mainBookContainer" className='border col-md-8'>
					<div id="welcomeBar">
						<h2 id="welcomeName" className="">Welcome, {userinfo.name}</h2>
					</div>
					<div className="col-md-4">
						<Link to="/add"><button id="addButton" className="btn btn-primary col-md-10">Add a Book and Review</button></Link>
						<h4>Recently added books</h4>
						<Booklist books={this.state.books}/>
					</div>
					<div className="col-md-6 col-md-offset-2 leftDiv">
						<h4>Complete list of books</h4>
						<Books books={this.state.books} />
					</div>
				</div>
			</div>
		</div>
	}
});

