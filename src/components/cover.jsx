var React = require('react');

module.exports = React.createClass({
	getInitialState: function(){
		return {
			url: '',
		}
	},
	render: function(){
		return <div>
			<img  height="150px" src={this.props.bookCover} />
		</div>
	}
});

