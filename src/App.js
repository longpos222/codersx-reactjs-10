import React, { Component } from 'react';
import './App.css';
import InfoTable from './components/InfoTable';

class App extends Component {
  constructor(){
    super();
    this.infoTable = [
      {first: 'Mark', last: "Otto", handle:"@mdo"},
      {first: 'Jacco', last: "Thor", handle:"@fat"},
      {first: 'Jacky', last: "Chan", handle:"@jkc"},
    ];
  }
  render() {
    return (
      <div className="App">
        <InfoTable infoTable={this.infoTable} />
      </div>
    );
  }
}

export default App;
