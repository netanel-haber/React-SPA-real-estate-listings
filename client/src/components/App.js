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
    fetch("/api/test")
      .then(res =>res.text()).then(test=>{
        console.log(test);
      })   
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
        ----      
        <Item></Item>
        ----
        {this.state.info}
    </div>
    );
  }
}


export default App;
