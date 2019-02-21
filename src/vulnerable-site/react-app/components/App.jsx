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
    alert('You have been logged in, ' + this.state.usernameValue);
    event.preventDefault();
  }

  render() {
    return (
      <form className="password-form" onSubmit={e => this.handleSubmit(e)}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.usernameValue}
            onChange={e => this.handleChange('usernameValue', e)}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.passwordValue}
            onChange={e => this.handleChange('passwordValue', e)}
          />
        </div>

        <div className="form-group">
          <input className="form-control" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}
