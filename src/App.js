import React, { Component } from 'react';
import Modal from "react-modal";
import santa from './santa.png';
import heart from './heart.png';
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
            <h1 className="dear-line">Dear Gaby,</h1>
            <p>This year for Christmas,
              you get to pick your gift! Since we moved back to Florida,
              now we can finally spend time together again. 
              If you want to see a movie, go clothes shopping, or get ice cream - you name it. My treat!
              Can't wait for our special time together!
            </p>
            <div className="signature">
              <div className="signature-column">
                <img className="heart" src={heart} alt="emoji" />
              <p>Your Ati</p>
              </div>
            </div>
          </div>
        </Modal>
        <main className="App-main">
          <div className="" onClick={this.handleModalOpen}>
            <h1 className="title">Merry Christmas Gaby!</h1>
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
