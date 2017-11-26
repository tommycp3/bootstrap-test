import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div class="container">
          <h2>Table</h2>
          <p>The .table-responsive class creates a responsive table which will scroll horizontally on small devices (under 768px). When viewing on anything larger than 768px wide, there is no difference:</p>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Age</th>
                  <th>City</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Anna</td>
                  <td>Pitt</td>
                  <td>35</td>
                  <td>New York</td>
                  <td>USA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="btn-group">
          <button type="button" class="btn btn-primary">Apple</button>
          <button type="button" class="btn btn-primary">Samsung</button>
          <button type="button" class="btn btn-primary">Sony</button>
        </div>

      </div>









    );
  }
}

export default App;
