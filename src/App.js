import React, { Component } from 'react';
import SearchPlace from './components/searchPlace';
import NewsList from './components/news_list';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationInfo: null,
      articles: []
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
        articles : response.data.articles
      });
    }).catch((error) => {
      console.log("ERROR",error);
    });
  }

  render() {
    return (
      <div className="App">
        <SearchPlace onTextSubmit={this.locationInfoSearch}/>
        <NewsList articles={this.state.articles}/>
      </div>
    );
  }
}

export default App;
