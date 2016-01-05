var React = require('react')
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Reviews = require('./reviews.jsx');


module.exports = React.createClass({
	render: function(){
		return <div id="bookInfo">
			<div className="col-md-offset-10">
				<Link to="/dashboard">Home</Link>
				<Link to="/" className="col-md-offset-1" to="/">Logout</Link>
			</div>
			<h2>{this.props.book.title}</h2>
			<h4>By: {this.props.book.author}</h4>
			<img id="image" className="bookMain" src={this.props.book.url} />
			<Reviews reviews={this.props.book.review} />
		</div>
	}
});

