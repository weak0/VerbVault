import React, { Component } from 'react';
import './Logon.css';

class Logon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      password: '',
      newNickname: '',
      newPassword: '',
      newEmail: '',
      visible: true,
      logged: false
    };
  }

  handleInputChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  submitLogin = () => {
    this.props.onSubmit();
    this.setState({
      nickname: '',
      password: '',
      newNickname: '',
      newPassword: '',
      newEmail: ''
    });
  };

  render() {
    return (
      <div id="LogonContainer">
        <div id="Register">
          <label htmlFor='newNickname' id='newNicknameLabel' class="registerTextBox">Nickname:</label>
          <input
            id='newNickname'
            type='text'
            value={this.state.newNickname}
            onChange={this.handleInputChange}
          />
          <br/>

          <label htmlFor='newPassword' id='newPasswordLabel' class="registerTextBox">Password:</label>
          <input
            id='newPassword'
            type='password'
            value={this.state.newPassword}
            onChange={this.handleInputChange}
          />
          <br />

          <label htmlFor='newEmail' id='newEmailLabel' class="registerTextBox">Email:</label>
          <input
            id='newEmail'
            type='text'
            value={this.state.newEmail}
            onChange={this.handleInputChange}
          />
          <br/><br />
          <button onClick={this.submitLogin} class="logonButton">Sign up</button>
        </div>
        <div id='loginContainer'>
          <label htmlFor='Nickname' id='nicknameText'>Nickname:  </label>
          <input
            id='nickname'
            type='text'
            value={this.state.nickname}
            onChange={this.handleInputChange}
          />
          <br/><br/><br/>
          <label htmlFor='Password'>Password:  </label>
          <input
            type='password'
            id='password'
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <br/><br/><br/>
          <button onClick={this.submitLogin} class="logonButton" >Log in</button>
        </div>
      </div>
    );
  }
}

export default Logon;