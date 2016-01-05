var react = require('react');
var reactfire = require('reactfire');
var firebase = require('firebase');
var rooturl = "https://brilliant-fire-8481.firebaseio.com/" 
var reactrouter = require('react-router');
var hashhistory = require('react-router/lib/hashhistory')
var router = reactrouter.router;
var Link = reactRouter.Link;
var route = reactrouter.route;

module.exports = react.createclass({
	contexttypes: {
		router: react.proptypes.func
	},
	mixins: [ reactfire ],
	componentwillmount: function(){
		this.bindasobject(new firebase(rooturl + 'books/'), 'books');
	},
	render: function(){
		return <div>
			<Link to="/">Home</Link>
			<Link to="/">Add Book and review</Link>
			<Link to="/">Logout</Link>
			User Alias: whatever
			Name: whatever
			Email: whatever
			Total reviews: whatever
			<h1>Posted Reviews for the following books:</h1>
			whatever
		</div>
	}
});

