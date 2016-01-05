var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
	render: function(){
		var list = [];
		for(x in this.props.books){
			list.push(<Link className="col-md-12 leftDiv" to={"books/"+x}>{this.props.books[x].title}</Link>)
		}
		return <div>
			{list}
		</div>
	}
});

