import React from 'react';

class App extends React.Component {
	state = {
		userName: '',
	};

	handleChange = (e) => {
		console.log(e.target.type);
		console.log(e.target.name);
		const value = e.target.value;
		this.setState({
			userName: value,
			userEmail: '',
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
