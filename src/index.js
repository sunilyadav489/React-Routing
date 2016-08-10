import React, { Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './search_bar';

class App extends Component {
  render(){
    return (
      <SearchBar />
    );
  }
}

ReactDom.render(<App/>, document.getElementById('app'));
