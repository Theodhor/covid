import React from 'react';
import bulma from 'bulma';
import axios from 'axios';
import Title from './components/Title';
import Countries from './components/Countries';

class App extends React.Component {

  constructor(){
    super();
    this.state = { data: []};
  }

  componentDidMount(){
    axios({
    "method":"GET",
    "url":"https://covid-193.p.rapidapi.com/statistics",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"covid-193.p.rapidapi.com",
    "x-rapidapi-key":"5f0cfd44acmshb90e276d7bc11d3p130ab5jsn01caf7f45f20",
    "useQueryString":true
    }
    })
    .then((response)=>{
      this.setState({ data: response.data.response });
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  render(){
    return(
      <div>
        <Title/>
        {this.state.data.length > 0 ?
          <Countries data={this.state.data} />
          :
          <div></div>
        }
      </div>
    )
  }
}

export default App;
