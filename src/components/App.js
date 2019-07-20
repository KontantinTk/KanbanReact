import React from "react";
import { Provider } from "react-redux";
import Kanban from "./Kanban";
import rootStore from "../redux/stores/rootStore";

class App extends React.Component {
  render() {
    return (
      <Provider store={rootStore}>
        <Kanban/>
      </Provider>
    );
  }
}

export default App;