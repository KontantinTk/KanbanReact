import React from "react";
import { Provider } from "react-redux";
import rootStore from "../redux/stores/rootStore";
import Board from "./Board";

class App extends React.Component {
  render() {
    return (
      <Provider store={rootStore}>
        <Board/>
      </Provider>
    );
  }
}

export default App;