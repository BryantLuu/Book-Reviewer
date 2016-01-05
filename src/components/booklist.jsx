var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
	render: function(){
		var list = [];
		var list2 = [];
		for(x in this.props.books){
			list.push(<div className="booklistdiv"><Link to={"books/"+x}><img className="booklist" src={this.props.books[x].url} /></Link><Link className="col-md-12 image" to={"books/"+x}>{this.props.books[x].title}</Link></div>)
		}
		for(var x = list.length-1; x>list.length-4; x--){
			list2.push(list[x])
		}
		return <div>
			{list2}
		</div>
	}
})
