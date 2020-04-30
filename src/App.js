import React, { Component } from 'react';
import GetTasteCall from "./GetTasteCall.js";
import GetTasteInfo from "./GetTasteInfo.js";
import ToScreen from "./ToScreen.js";
import Intro from "./Intro.js";
// import Popup from "reactjs-popup"
// import axios from "axios";
// import Qs from "qs"
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      tastes: [],
      artistInfo: [],
      artistName: [],
      userInput: "",
      userInputResult: [],
    }
  }

  // componentDidMount() {
  //   axios({
  //     url: 'http://proxy.hackeryou.com',
  //     responseType: 'json',
  //     method: "GET",
  //     paramsSerializer: function (params) {
  //       return Qs.stringify(params, { arrayFormat: 'brackets' })
  //     },
  //     params: {
  //       reqUrl: 'https://tastedive.com/api/similar',
  //       params: {
  //         k: "366898-NA-YOHJFJWV",
  //         q: "red hot chili peppers"
  //       },
  //       xmlToJSON: false
  //     }
  //   }).then((res) => {
  //     console.log(res);
  //     // console.log(res.data.Similar.Results);
  //     this.setState({
  //       // tastes: res.data.Similar.Results
  //     })
  //   });
  // }

  handleSubmit = (event) => {
    //prevent page refresh on form submit
    event.preventDefault()
    // checking for if userInput is empty, if it's not, proceed with axios call else prompt user to try again
    if (this.state.userInput !== "") {
      //query api here to have it run when empty string is not used then empty string afterwards. Used promised in order to use data here in App, set the axios call to tastes
      // by comma seperating the setState the code will run in order.
      GetTasteCall(this.state.userInput).then( (res) => {
        // console.log(res);
        // console.log(res.data.Similar.Results);
        
        this.setState({
          tastes: res.data.Similar.Results          
        }, () => {

            const artistName = [...this.state.tastes]
            artistName.map( (map) => {
              console.log(map)
              GetTasteInfo(map.Name).then((res) => {
                // console.log(res);
                // console.log(res.data.artists)

                this.setState({
                  artistInfo: res.data.artists
                }, () => {
                  // emptying userInput so it doesn't remain in search box after call
                  
                  this.setState({
                    userInput: ""
                  })
                }

                )
              }
              )
            })
            
      })
      })
    } else {
      alert("Please input a choice");
    }
  }

  // Take the value of what the user is typing and set it to the userInput state.
  handleUserInput = (event) => {
    // console.log(event)
    // console.log(event.target)
    // console.log(event.target.value)
    this.setState({
      userInput: event.target.value
    })
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div className="App">
        {/* {console.log(this.arrayJoin)} */}
        <section className="start">
          <div>
            <Intro />
            <form action="" onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.userInput} onChange={this.handleUserInput}/>
              <button type="submit">Search</button>
            </form>
          </div>
        </section>
        <section className="list">
          <ToScreen genres={this.state.tastes} artistInfo={this.state.artistInfo}/>
        </section>
      </div>
    );
  }
}

export default App;

