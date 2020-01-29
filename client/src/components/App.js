import React from 'react';
import '../styles/components/App.scss';
import Item from './Item';
import Header from './Header';


class App extends React.Component {
  constructor() {
    super();
    this.state = { info: "" }
  }

  componentDidMount() {
    fetch("/a")
      .then(json => {
        console.log(json);       
        this.setState({ info: 8 })
      });
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
        ----      
        {/* <Item></Item> */}
        ----
        {this.state.info}
    </div>
    );
  }
}



export default App;
