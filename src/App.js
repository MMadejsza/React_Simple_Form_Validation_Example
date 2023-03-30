import React from 'react';
import './App.css';

class App extends React.Component {
	state = {
		userName: '',
		userEmail: '',
		userPass: '',
		userAccept: true,

		errors: {
			userName: true,
			userEmail: false,
			userPass: false,
			userAccept: false,
		},
	};

	messages = {
		userName_Incorrect: 'Name must contain at least 2 characters (space not allowed)',
		userEmail_Incorrect: 'Email must contain "@"',
		userAccept_Incorrect: 'Unaccepted Privacy Policy',
	};

	handleChange = (e) => {
		const name = e.target.name;
		const type = e.target.type;
		if (type != 'checkbox') {
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
		console.log('działa');
	};

	render() {
		return (
			<div className='App'>
				<form onSubmit={this.handleSubmit} noValidate>
					<label htmlFor='user'>
						Your Name:
						<input
							type='text'
							id='user'
							name='userName'
							value={this.state.userName}
							onChange={this.handleChange}
						/>
					</label>
					<label htmlFor='email'>
						Your Email:
						<input
							type='email'
							id='email'
							name='userEmail'
							value={this.state.userEmail}
							onChange={this.handleChange}
						/>
					</label>
					<label htmlFor='pass'>
						Password:
						<input
							type='password'
							id='pass'
							name='userPass'
							value={this.state.userPass}
							onChange={this.handleChange}
						/>
					</label>
					<label htmlFor='accept'>
						<input
							type='checkbox'
							id='accept'
							name='userAccept'
							checked={this.state.userAccept}
							onChange={this.handleChange}
						/>
						I agree with Privacy Policy
					</label>
					<button>Sign Up!</button>
				</form>
			</div>
		);
	}
}

export default App;
