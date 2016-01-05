var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = "https://brilliant-fire-8481.firebaseio.com/" 
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory')
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

module.exports = React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},
	mixins: [ ReactFire ],
	componentWillMount: function(){
		this.bindAsObject(new Firebase(rootUrl + 'users/'), 'users');
	},
	getInitialState: function(){
		return {
			name: '',
			nameError: 1,
			email: '',
			emailError: 1,
			password: '',
			passwordError: 1,
			passwordConfirm: '',
			passwordConfirmError: 1,
			loginEmail: '',
			loginPassword: '',
			loginEmailError: 1,
			loginPasswordError: 1 
		}
	},
	render: function(){
		return <div id="background">
			<h1 className="col-md-offset-4">Book Reviews</h1>
			<div id="yo">
			</div>
			<div className="col-md-5" id="register">
				<h2>Register</h2>
				<form>
					<div className="form-group">
						<label for="emailInput">Email Address</label>
						<input value={this.state.email} onChange={this.handleEmailChange} type="email" className="form-control" id="emailInput" placeholder={this.state.emailError==1 ? 'Email' : 'Email already taken'} />
					</div>
					<div className="form-group">
						<label for="name">Name</label>
						<input value={this.state.name} type="text" className="form-control" onChange={this.handleNameChange} id="name" placeholder={this.state.nameError==1 ? 'Name' : 'Name has to be at least 7 characters long'} />
					</div>
					<div className="form-group">
						<label for="password">Password</label>
						<input value={this.state.password} type="password" className="form-control" onChange={this.handlePasswordChange} id="password" placeholder={this.state.nameError==1 ? 'Password' : 'Password has to be at least 7 characters long'} />
					</div>
					<div className="form-group">
						<label for="passwordConfirm">Confirm Password</label>
						<input value={this.state.passwordConfirm} type="password" className="form-control" onChange={this.handlePasswordConfirmChange} id="passwordConfirm" placeholder={this.state.nameError==1 ? 'Password Comfirmation' : 'Passwords have to match'} />
					</div>
					<button type="button" onClick={this.handleClickReg} className="btn btn-primary">Register</button>
				</form>
			</div>
			<div className="col-md-offset-1 col-md-5" id="login">
				<h2>Login</h2>
				<form>
					<div className="form-group">
						<label for="emailLogin">Email</label>
						<input value={this.state.loginEmail} onChange={this.handleLoginEmailChange} type="email" className="form-control" id="emailLogin" placeholder={this.state.loginEmailError==1 ? 'Email' : 'No such Email'} />
					</div>
					<div className="form-group">
						<label for="passwordLogin">Password</label>
						<input value={this.state.loginPassword} onChange={this.handlePasswordLoginChange}type="password" className="form-control" id="passwordLogin" placeholder={this.state.loginPasswordError==1 ? 'Password' : 'Incorrect Password'} />
					</div>
					<button type="button" onClick={this.handleClickLog} className="btn btn-primary">Login</button>
				</form>
			</div>
		</div>
	},
	handleEmailChange: function(event){
		this.setState({email: event.target.value})
	},
	handleNameChange: function(event){
		this.setState({name: event.target.value})
	},
	handlePasswordChange: function(event){
		this.setState({password: event.target.value})
	},
	handlePasswordConfirmChange: function(event){
		this.setState({passwordConfirm: event.target.value})
	},
	handleLoginEmailChange: function(event){
		this.setState({loginEmail: event.target.value})
	},
	handlePasswordLoginChange: function(event){
		this.setState({loginPassword: event.target.value})
	},
	handleClickLog: function(){
		this.state.loginEmailError = 0;
		for(var key in this.state.users){
			if(this.state.loginEmail == this.state.users[key].email){
				this.state.loginEmailError = 1;
				this.state.loginPasswordError = 0;
				if(this.state.loginPassword == this.state.users[key].password){
					this.state.loginPasswordError = 1;
					userinfo.name = this.state.users[key].name;
					userinfo.id = key;
					console.log(userinfo);
					this.context.router.transitionTo('dashboard');
				}
				else{
					this.setState({loginPassword: ''})
				}
			}
			else{
				this.setState({loginEmail: ''})
			}
		}
	},
	handleClickReg: function(){
		if(this.state.name.length<=6){
			this.state.nameError = 0;
		}
		else{
			this.state.nameError = 1;
		}
		if(this.state.password.length<=6){
			this.state.passwordError = 0;
		}
		else{
			this.state.passwordError = 1;
		}
		if(this.state.password!=this.state.passwordConfirm){
			this.state.passwordConfirmError = 0;
		}
		else{
			this.state.passwordConfirmError = 1;
		}
		for(var key in this.state.users){
			if(this.state.email == this.state.users[key].email){
				this.state.emailError = 0;
			}
		}
		if(this.state.nameError == 1 && this.state.passwordError == 1 && this.state.passwordConfirmError == 1){
			console.log("PUSHING");
			this.firebaseRefs.users.push({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password,
			})
			this.setState({
				name: '',
				email: '',
				password: '',
				passwordConfirm: '',
				loginEmail: '',
				loginPassword: ''
			})
		}
		else{
			console.log("ERROS");
			if(this.state.nameError == 0 ){
				this.setState({
					name: ''
				})
			}
			if(this.state.passwordError == 0 ){
				this.setState({
					password: ''
				})
			}
			if(this.state.passwordConfirmError == 0 ){
				this.setState({
					passwordConfirm: ''
				})
			}
			if(this.state.emailError == 0 ){
				this.setState({
					email: ''
				})
			}
		}
	}
})
