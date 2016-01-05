var React = require('react')

var Reviews = React.createClass({
	render: function(){
		return <div className="reviews">
			<h4>Reviewer: {this.props.reviewer}</h4>
			<h4>{this.props.rating}/5</h4>
			<p>{this.props.review}</p>
		</div>
	}
})

module.exports = React.createClass({
	getInitialState: function(){
		return {
			reviews: []
		}
	},
	render: function(){
		if(this.props.reviews != undefined){
			var list = this.props.reviews.map(function(review){
				return <Reviews {...review} />
			})
		}
		return <div>
			{list}
		</div>
	}
})
