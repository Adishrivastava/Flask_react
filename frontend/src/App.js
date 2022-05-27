import React from 'react';
import axios from 'axios';
  
class App extends React.Component {
  
    state = {
        details : [],
    }
  
    componentDidMount() {
  
        let data ;
  
        axios.get('http://localhost:5000/')
        .then(res => {
            data = res.data;
            this.setState({
                details : data    
            });
        })
        .catch(err => {})
    }
  
  render() {
    return(
      <div>
            <div>
            <div >
                  <div >
                        <h1>Flask+React</h1>
                        <h2>{this.state.details} </h2>
                  </div>
            </div>
            </div>
      </div>
      );
  }
}
  
export default App;