import React from 'react';
import './App.css';

class App extends React.Component {
	state = {
		userName: '',
		userEmail: '',
	};

	handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			[name]: value,
		});
	};

	render() {
		return (
			<div className='App'>
				<form action=''>
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
					<label htmlFor='user'>
						Your Email:
						<input
							type='email'
							id='email'
							name='userEmail'
							value={this.state.userEmail}
							onChange={this.handleChange}
						/>
					</label>
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
				</form>
			</div>
		);
	}
}

export default App;
