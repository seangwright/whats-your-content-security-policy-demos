export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { usernameValue: '', passwordValue: '' };
  }

  handleChange(key, event) {
    const newState = { ...this.state };

    newState[key] = event.target.value;

    this.setState(newState);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className="password-form" onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={this.state.usernameValue}
          onChange={e => this.handleChange('usernameValue', e)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.passwordValue}
          onChange={e => this.handleChange('passwordValue', e)}
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
