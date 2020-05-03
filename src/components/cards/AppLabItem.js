import React from 'react';

// Assets
import './AppLabItem.sass';

class AppLabItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <li className="AppLabItem" style={{ backgroundColor: this.props.item.color }}>
        <a href={this.props.item.link} target="_blank" rel="noopener noreferrer">
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.description}</p>
        </a>
      </li>
    );
  }
}

export default AppLabItem;