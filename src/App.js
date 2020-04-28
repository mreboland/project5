import React, { Component } from 'react';
import GetApiCall from "./ApiCall.js";
import ToScreen from "./ToScreen.js";
import Intro from "./Intro.js";
import axios from "axios";
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      tastes: []
    }
  }

  componentDidMount() {
    // axios({
    //   url: "https://tastedive.com/api/similar",
    //   method: "GET",
    //   responseType: "json",
    //   params: {
    //     k: "366898-NA-YOHJFJWV",
    //     q: "red hot chili peppers"

    //   }
    // }).then((response) => {
    //   console.log(response);

    // })

    axios({
      url: 'http://proxy.hackeryou.com',
      responseType: 'json',
      method: "GET",
      params: {
        reqUrl: 'https://tastedive.com/api/similar?k=366898-NA-YOHJFJWV&q=rush',
        params: {
          // k: "366898-NA-YOHJFJWV",
          // q: "red hot chili peppers",
          // verbose: 1,
        },
        xmlToJSON: false
      }
    }).then((res) => {
      console.log(res);
      // console.log(res.data.Similar.Results);
      this.setState({
        tastes: res.data.Similar.Results
      })
    });

    // axios({
    //   url: 'http://proxy.hackeryou.com',
    //   responseType: 'json',
    //   paramsSerializer: function (params) {
    //     return Qs.stringify(params, { arrayFormat: 'brackets' })
    //   },
    //   params: {
    //     reqUrl: 'https://tastedive.com/api/similar',
    //     params: {
    //       queryParam: 'value'
    //     },
    //     proxyHeaders: {
    //       k: "366898-NA-YOHJFJWV"
    //     },
    //     xmlToJSON: false
    //   }
    // }).then((res) => {
    //   console.log(res);
    // });


  }
  render() {
    return (
      <div className="App">
        {/* <GetApiCall /> */}
        <section className="start">
          <div>
            <Intro />
          </div>
        </section>
        <section className="list">
        <ToScreen genres={this.state.tastes}/>
        </section>
      </div>
    );
  }
}

export default App;
