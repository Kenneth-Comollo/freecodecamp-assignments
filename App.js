import React, { Component } from 'react';
import "./bootstrap.min.css";
import "./materialize.min.css";
import Header from "./Header";
import Todos from "./Todos";

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "buy some milk"},
      {id: 2, content: "play Mario Kart"}
    ]
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
