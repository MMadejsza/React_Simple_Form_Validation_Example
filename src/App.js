import React from 'react';
import './App.css';

class App extends React.Component {
	state = {
		userName: '',
		userEmail: '',
		userPass: '',
		userAccept: false,

		errors: {
			userName: false,
			userEmail: false,
			userPass: false,
			userAccept: false,
		},
	};

	messages = {
		userNameStatus_Incorrect: 'Name must contain at least 10 characters (space not allowed)',
		userEmailStatus_Incorrect: 'Email must contain "@"',
		userAcceptStatus_Incorrect: 'Unaccepted Privacy Policy',
		userPasswordStatus_Incorrect: 'Password must contain minimum 6 characters',
	};

	handleChange = (e) => {
		const name = e.target.name;
		const type = e.target.type;
		if (type !== 'checkbox') {
			const value = e.target.value;
			this.setState({
				[name]: value,
			});
		} else {
			const checked = e.target.checked;
			this.setState({
				[name]: checked,
			});
		}
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const validationResult = this.formValidation();
		console.log('🚀 ~ file: App.js:45 ~ App ~ validationResult:', validationResult);

		if (validationResult.correct) {
			this.setState({
				userName: '',
				userEmail: '',
				userPass: '',
				userAccept: false,

				errors: {
					userName: false,
					userEmail: false,
					userPass: false,
					userAccept: false,
				},
			});
		} else {
			this.setState({
				errors: {
					userName: !validationResult.name,
					userEmail: !validationResult.email,
					userPass: !validationResult.password,
					userAccept: !validationResult.accepted,
				},
			});
		}
	};

	formValidation = () => {
		const {userName, userEmail, userPass, userAccept} = this.state;
		let name = false;
		let email = false;
		let password = false;
		let accepted = false;
		let correct = false;
		if (userName.length > 10 && userName.indexOf(' ') === -1) {
			name = true;
		}
		if (userEmail.indexOf('@') !== -1) {
			email = true;
		}
		if (userPass.length >= 6) {
			password = true;
		}
		if (userAccept) {
			accepted = true;
		}
		if (name && email && password && userAccept) {
			correct = true;
		}
		return {
			name,
			email,
			password,
			accepted,
			correct,
		};
	};
	render() {
		const {userName, userEmail, userPass, userAccept} = this.state;
		const {
			userName: Er_userName,
			userEmail: Er_userEmail,
			userPass: Er_userPass,
			userAccept: Er_userAccept,
		} = this.state.errors;
		const {
			userNameStatus_Incorrect,
			userEmailStatus_Incorrect,
			userAcceptStatus_Incorrect,
			userPasswordStatus_Incorrect,
		} = this.messages;
		return (
			<div className='App'>
				<form onSubmit={this.handleSubmit} noValidate>
					<label htmlFor='user'>
						Your Name:
						<input
							type='text'
							id='user'
							name='userName'
							value={userName}
							onChange={this.handleChange}
						/>
						{Er_userName && <span>{userNameStatus_Incorrect}</span>}
					</label>
					<label htmlFor='email'>
						Your Email:
						<input
							type='email'
							id='email'
							name='userEmail'
							value={userEmail}
							onChange={this.handleChange}
						/>
						{Er_userEmail && <span>{userEmailStatus_Incorrect}</span>}
					</label>
					<label htmlFor='pass'>
						Password:
						<input
							type='password'
							id='pass'
							name='userPass'
							value={userPass}
							onChange={this.handleChange}
						/>
						{Er_userPass && <span>{userPasswordStatus_Incorrect}</span>}
					</label>
					<label htmlFor='accept'>
						<input
							type='checkbox'
							id='accept'
							name='userAccept'
							checked={userAccept}
							onChange={this.handleChange}
						/>
						I agree with Privacy Policy
						{Er_userAccept && <span>{userAcceptStatus_Incorrect}</span>}
					</label>
					<button>Sign Up!</button>
				</form>
			</div>
		);
	}
}

export default App;
