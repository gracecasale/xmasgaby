import React, { Component } from 'react';
import Modal from "react-modal";
import santa from './santa.png';
import './App.css';

const appElement = document.getElementById('root');
Modal.setAppElement(appElement);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      error: null,
      file: ''
    }
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }
  handleModalOpen() {
    this.setState({
      modalOpen: true,
      error: null,
      // file: file
    });
  }

  handleModalClose() {
    this.setState({
      modalOpen: false
    });
  }


  render() {
    return (
      <div className="container">
        {this.state.error && <div className="">
          Error: {this.state.error.message}</div>}
        <Modal classcloseTimeoutMS={150} isOpen={this.state.modalOpen} className="modal">
          <header className="App-header">
            <button className="x-button" onClick={this.handleModalClose}>X</button>
          </header>
          <div className="modal-content">
            <h1>Dear Gaby,</h1>
            <p>This year for Christmas, you get to pick what you want to do for some special time with me!
            </p>
          </div>
        </Modal>
        <main className="App-main">
            <div className="drawing-holder" onClick={this.handleModalOpen}>
              <h1>Merry Christmas Gaby!</h1>
              <img className="santa" src={santa} alt="emoji" />
            </div>
          </main>
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
