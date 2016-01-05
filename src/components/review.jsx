var React = require('react');

module.exports = React.createClass({
	getInitialState: function(){
		return {
			review: '',
			reviewError: 1,
			rating: '',
			ratingError: 1
		}
	},
	render: function(){
		return <div>
			<h4>Add a Review </h4>
			<form className="col-md-3">
				<textarea className="block" placeholder={this.state.reviewError =1 ? "Review" : "Please enter a review"} id="review" onChange={this.handleReview} value={this.state.review}></textarea>
				<select id="rating" onChange={this.handleRating} value={this.state.rating}>
					<option disabled selected>Please select a rating</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
				<button id="reviewButton" onClick={this.submit} type="button" className="block btn btn-primary">Submit</button>
			</form>
		</div>
	},
	handleReview: function(event){
		this.setState({review: event.target.value});
	},
	handleRating: function(event){
		this.setState({rating: event.target.value});
	},
	submit: function(){
		var myArray = [];
		if(this.props.book.review != undefined){
			for(key in this.props.book.review){
				myArray.push({
					rating: this.props.book.review[key].rating,
					review: this.props.book.review[key].review,
					reviewer: this.props.book.review[key].reviewer,
					reviewerId: this.props.book.review[key].reviewerId
				})
			}
			myArray.push({
				rating: this.state.rating,
				review: this.state.review,
				reviewer: userinfo.name,
				reviewerId: userinfo.id
			})
		}
		this.props.bookStore.update({
			review: myArray
		})
		this.setState({
			review: "",
			rating: ""
		})
	}
});
