import React from 'react';

// Components
import AppLabItem from './cards/AppLabItem'

// Assets
import './AppMain.sass';

// Consts
const API_LABS_ENDPOINT = 'http://api.rcrd.me/rcrd/labs';

class AppMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      labItems: []
    }
  }

  componentDidMount() {
    fetch(API_LABS_ENDPOINT)
      .then(response => response.json())
      .then(data => this.setState({ labItems: data }));
  }

  render() {
    const labList = this.state.labItems.map((labItem, index) => {
      return (<AppLabItem item={labItem} key={index} />)
    });

    return (
      <main className="AppMain">
        <ul>
          {labList}
        </ul>
      </main>
    );
  }
}

export default AppMain;