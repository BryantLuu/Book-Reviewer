var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = "https://brilliant-fire-8481.firebaseio.com/" 
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory')
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Cover = require("./cover.jsx");

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
			title: '',
			titleError: 1,
			author: '',
			authorError: 1,
			review: '',
			reviewError: 1,
			rating: '',
			ratingError: 1,
			cover: '',
		}
	},
	render: function(){
		return <div>
			<form id="form" className="col-md-6 col-md-offset-3">
				<div className="col-md-6">
					<div className="col-md-12">
						<h4>Title</h4>
						<input className="col-md-12" type='text' id="title" placeholder={this.state.titleError == 1 ? 'Title' : 'Please enter a title'} onChange={this.handleTitle} value={this.state.title}/>
					</div>
					<div className="col-md-12">
						<h4>Author</h4>
						<input className="col-md-12" type='text' id="author" placeholder={this.state.authorError == 1? 'Author' : 'Please enter an author'} onChange={this.handleAuthor} value={this.state.author}/>
					</div>
					<div className="col-md-12">
						<h4>Review</h4>
						<textarea className="col-md-12" id="review" placeholder={this.state.reviewError == 1 ? 'Review' : 'Please type a review'} onChange={this.handleReview} value={this.state.review}></textarea>
					</div>
					<div className="col-md-12">
						<h4>Rating</h4>
						<select className="col-md-9"id="rating"  onChange={this.handleRating} value={this.state.rating}>
							<option disabled selected>Please select an option</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
				</div>
				<div className="col-md-6">
					<h4 className="col-md-offset-2">Cover Art</h4>
					<input className="col-md-12" type="text" id="coverSearch" placeholder="enter URL of image here..." onChange={this.handleCover} value={this.state.cover}/>
				</div>
				<div className="col-md-6" id="cover">
					<Cover bookCover={this.state.cover}/>
				</div>
				<div className="col-md-6" id="buttonDiv">
					<button  id="formSubmit" onClick={this.submit} type="button" className="btn btn-primary col-md-offset-2">Submit</button>
				</div>
			</form>
		</div>
	},
	handleCover: function(event){
		this.setState({cover: event.target.value});
	},
	handleTitle: function(event){
		this.setState({title: event.target.value});
	},
	handleAuthor: function(event){
		this.setState({author: event.target.value});
	},
	handleReview: function(event){
		this.setState({review: event.target.value});
	},
	handleRating: function(event){
		this.setState({rating: event.target.value});
	},
	submit: function(){
		if(this.state.title == ''){
			this.setState({titleError:  0})
		}
		if(this.state.author == ''){
			this.setState({authorError: 0})
		}
		if(this.state.review == ''){
			this.setState({reviewError:  0})
		}
		if(this.state.rating == ''){
			this.setState({ratingError:  0})
		}
		if(this.state.titleError == 1 && this.state.authorError == 1 && this.state.reviewError == 1 & this.state.ratingError ==1){
			this.firebaseRefs.books.push({
				title: this.state.title,
				url: this.state.cover,
				author: this.state.author,
				review: [{reviewer: userinfo.name, reviewerId: userinfo.id, review: this.state.review, rating: this.state.rating}],
				name: userinfo.name,
				id: userinfo.id,
				date: Date()
			})
			this.context.router.transitionTo('dashboard');
		}
		else{
		}
	}
});
