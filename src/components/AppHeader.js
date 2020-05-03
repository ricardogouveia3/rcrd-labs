import React from 'react';

// Assest
import './AppHeader.sass';
import logo from './../assets/logo-w.svg';

class AppHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <header className="AppHeader">
        <a href="/" className="content">
          <h1>
            <span>LABS</span>
            <img src={logo} alt="" />
          </h1>
        </a>
      </header>
    );
  }
}

export default AppHeader;