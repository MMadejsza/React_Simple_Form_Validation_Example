import React from 'react';
import './App.css';

class App extends React.Component {
	// User inputs status:
	state = {
		userName: '',
		userEmail: '',
		userPass: '',
		userAccept: false,
		notification: '',
		// User errors status:
		errors: {
			userName: false,
			userEmail: false,
			userPass: false,
			userAccept: false,
		},
	};
	// error messages bank to display from:
	messages = {
		userNameStatus_Incorrect: 'Name must contain at least 10 characters (space not allowed)',
		userEmailStatus_Incorrect: 'Email must contain "@"',
		userAcceptStatus_Incorrect: 'Unaccepted Privacy Policy',
		userPasswordStatus_Incorrect: 'Password must contain minimum 6 characters',
	};

	// on inputs change:
	handleChange = (e) => {
		// fetch handled input's [name] and [type]
		const name = e.target.name;
		const type = e.target.type;

		// if input isn't checkbox type:
		if (type !== 'checkbox') {
			const value = e.target.value;
			// set it's value to state. name -> the same as in state so we can substitute it with []
			this.setState({
				[name]: value,
			});
			// if checkbox type:
		} else {
			// set it's status to state. name -> the same as in state so we can substitute it with []
			const checked = e.target.checked;
			this.setState({
				[name]: checked,
			});
		}
	};

	// on submit button:
	handleSubmit = (e) => {
		// prevent from reloading:
		e.preventDefault();

		// assign result of further validation (object with statuses):
		const validationResult = this.formValidation();

		// if all correct:
		if (validationResult.correct) {
			// reset state:
			this.setState({
				userName: '',
				userEmail: '',
				userPass: '',
				userAccept: false,
				notification: 'Sent!!!',

				errors: {
					userName: false,
					userEmail: false,
					userPass: false,
					userAccept: false,
				},
			});
			// if something not correct:
		} else {
			// assign to state following statuses what will trigger error messages directly in render():
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

	// main function with validation conditions:
	formValidation = () => {
		// prepare state (destructuring assignment) and inner variables:
		const {userName, userEmail, userPass, userAccept} = this.state;
		let name = false;
		let email = false;
		let password = false;
		let accepted = false;
		let correct = false;

		// if userName in state updated onChange is longer > 10 and without space -> true (validated):
		if (userName.length > 10 && userName.indexOf(' ') === -1) {
			name = true;
		}
		// if email in state updated onChange has @ -> true (validated):
		if (userEmail.indexOf('@') !== -1) {
			email = true;
		}
		// if password in state updated onChange is longer >=6 -> true (validated):
		if (userPass.length >= 6) {
			password = true;
		}
		// if accept status in state updated onChange is true -> true (validated):
		if (userAccept) {
			accepted = true;
		}
		// if all conditions met -> true (validated):
		if (name && email && password && userAccept) {
			correct = true;
		}
		// return object with statuses of each input and overall status (correct):
		return {
			name,
			email,
			password,
			accepted,
			correct,
		};
	};

	// when state gets updated:
	componentDidUpdate() {
		// and notification in state is already filled (onSubmit if form is correct/validated):
		if (this.state.notification !== '') {
			setTimeout(
				// reset notification after 3 seconds:
				() =>
					this.setState({
						notification: '',
					}),
				3000,
			);
		}
	}

	render() {
		// fetch variables from state for easier references:
		const {userName, userEmail, userPass, userAccept, notification} = this.state;
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
				{/* form with no default/htm' validation and with pointed function on button */}:
				<form onSubmit={this.handleSubmit} noValidate>
					{/* user input section */}
					<label htmlFor='user'>
						Your Name:
						<input
							type='text'
							id='user'
							// name the same like in state fro easy substitution:
							name='userName'
							// initial value from state when app launched to display:
							value={userName}
							// method changing previous initial value in state when user is taping:
							onChange={this.handleChange}
						/>
						{/* if particular error -> display error message from bank */}
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
						{/* if particular error -> display error message from bank */}
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
						{/* if particular error -> display error message from bank */}
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
						{/* if particular error -> display error message from bank */}
						{Er_userAccept && <span>{userAcceptStatus_Incorrect}</span>}
					</label>
					<button>Sign Up!</button>
				</form>
				{/* if notification exists in state (left side of the condition) then display it in <h3> (right side of condition only when left is true) */}
				{notification && <h3>{notification}</h3>}
			</div>
		);
	}
}

export default App;
