import React from 'react';
import './App.css';

class App extends React.Component {
	state = {
		userName: '',
		userEmail: '',
		userPass: '',
	};

	handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('działa');
	};

	render() {
		return (
			<div className='App'>
				<form onSubmit={this.handleSubmit}>
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
					</label>
					<button>Sign Up!</button>
				</form>
			</div>
		);
	}
}

export default App;
