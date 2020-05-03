import React from 'react';

import AppLabItem from './cards/AppLabItem'

// Assets
import './AppMain.sass';

class AppMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      labItems: [
        {
          title: "AMUT",
          color: "#E74C3C",
          link: "https://rcrd.me/amut/",
          description: "Teclado virtual de memes em som"
        },
        {
          title: "MPG",
          color: "#4A4A4A",
          link: "https://rcrd.me/mpg/",
          description: "Gerador de senhas amigáveis e seguras"

        },
        {
          title: "LBCM",
          color: "#FFC355",
          link: "https://rcrd.me/lbcm/",
          description: "Máquina de criptografia baseada no comprimento do texto"
        }
      ]
    }
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