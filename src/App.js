import React, { Component } from 'react';
import SearchPlace from './components/searchPlace';
import NewsList from './components/news_list';
import axios from 'axios';
import './App.css';
import { StyledMapWithAnInfoBox } from './components/Map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationInfo: null,
      articles: [],
      lat:0,
      lng:0,
      error:null
    };
    this.locationInfoSearch = this.locationInfoSearch.bind(this);
  }

  locationInfoSearch(inputText) {
    const url = `https://cors-helper.herokuapp.com/https://brainpundit-apis.herokuapp.com/v1/places?name=${inputText}`
    let context = this;
    axios.get(url).then((response) => {
      console.log(response.data);
      context.setState({
        locationInfo : response.data,
        articles : response.data.articles,
        lat : response.data.loc.coordinates[1],
        lng : response.data.loc.coordinates[0],
        error:null
      });
    
    }).catch((error) => {
      window.open("/notfound")
      console.log("ERROR",error);
      context.setState({
        error:"No Location"
      });
    });
  }

  componentDidMount(){
    window.google = window.google ? window.google : {}
  }

   newsContent({lat,error}) {
    if(error)
      return(<div><h1>Location Not Found</h1></div>);
    else {
        return (
          <div>
            {lat==0? <div></div>:<StyledMapWithAnInfoBox lat={this.state.lat} lng={this.state.lng}/>}
            <br/>
            <br/>
            <NewsList articles={this.state.articles}/>
          </div>
        );
      }
    }



  render() {
    return (
      <div className="App">
        <SearchPlace onTextSubmit={this.locationInfoSearch}/> 
        {this.newsContent(this.state)}
      </div>
    );
  }
}

export default App;
