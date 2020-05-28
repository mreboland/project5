import React, { Component } from 'react';
import GetTasteCall from "./GetTasteCall.js";
import GetTasteInfo from "./GetTasteInfo.js";
import GetMovieInfo from "./GetMovieInfo.js"
import ToScreen from "./ToScreen.js";
import Intro from "./Intro.js";

// import Popup from "reactjs-popup"
// import axios from "axios";
// import Qs from "qs"
import './App.css';
import GetBookInfo from './GetBookInfo.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      tastes: [],
      artistInfo: [],
      bookInfo: [],
      userInput: "",
      movies: [],
    }
    this.myDivToFocus = React.createRef()
  }

  

  handleSubmit = (event) => {
    //prevent page refresh on form submit
    event.preventDefault()
    // checking for if userInput is empty, if it's not, proceed with axios call else prompt user to try again
    if (this.state.userInput !== "") {
      //query api here to have it run when empty string is not used then empty string afterwards. Used promised in order to use data here in App, set the axios call to tastes
      // by comma seperating the setState the code will run in order.
      GetTasteCall(this.state.userInput).then((res) => {
        this.setState({
          tastes: res.data.Similar.Results,
          bookInfo: res.data.Similar.Results
        }, () => {

          
          const artistName = [...this.state.tastes]
          artistName.map((map) => {

            if (map.Type === "music") {
              GetTasteInfo(map.Name).then( (res) => {

                // we want append artist info into each artists object
                // extraInfo is being added to the 'map' info using dot notation
                map.extraInfo = res.data.artists
                // using if statement to check for null data and to filter it out so it doesn't cause display issues.
                let remove = this.state.tastes;
                if (res.data.artists === null) {
  
                  remove = this.state.tastes.filter((obj) => {
                    return obj.Name !== map.Name;  
                  });
                }
                this.setState({
                  artistInfo: res.data.artists,
                  // set tastes to remove once null has been removed
                  tastes: remove
                }, () => {
                  // emptying userInput so it doesn't remain in search box after call
                  this.setState({
                    userInput: ""
                  })
                }
                )
              })

            } else if (map.Type === "book") {

              GetBookInfo(map.Name).then( (res) => {
                // Below data is for converting xml to json for api. Not a great solution as the browser doesn't read it properly. Need to come back to this to learn more on XML.
                // const convert = require('xml-js');
                // const result1 = convert.xml2json(res.data, { compact: true, spaces: 4 });
                // // const result2 = convert.xml2json(res.data, { compact: false, spaces: 4 });
                // console.log(result1._cdata);
                
                map.bookInfo = res.data;

                this.setState({
                  userInput: ""
                })
              })
            } else if (map.Type === "movie") {
              GetMovieInfo(map.Name).then( (res) => {
                
                // appending movie info from api call to map which is data from this.state.tastes that has been spread (...)
                map.movieInfo = res.data
                
                let remove = this.state.tastes;
                if (res.data === null) {
                  remove = this.state.tastes.filter((obj) => {
                    return obj.Name !== map.Name;
                    
                  });
                }
                this.setState({
                  tastes: remove,
                }, () => {
                    // emptying userInput so it doesn't remain in search box after call
                    this.setState({
                      userInput: ""
                    })
                })

                
              })

              
            }
          })
        })
      })
    } else {
      alert("Please input a choice");
    }
    
  }

  // Take the value of what the user is typing and set it to the userInput state.
  handleUserInput = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  onClickEvent = (event) => {
    //.current is verification that your element has rendered
    if (this.myDivToFocus.current) {
      this.myDivToFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      })
    }
  }

  // Need to run 2 functions on form submit. so I put them into their own function so I can call both
  handleOnSubmit = (event) => {
    this.handleSubmit(event)
    setTimeout( () => {
      this.onClickEvent();
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <section className="start">
          <div className="wrapper">
            <Intro />
            <form action="" onSubmit={this.handleOnSubmit}>
              <input type="text" value={this.state.userInput} onChange={this.handleUserInput}/>
              <button type="submit" onClick={this.onClickEvent}>Search</button>
            </form>
            <p className="note">API recently lost some functionality (no Youtube/trailers, books no longer work). This loss of functionality results in empty searches on occasion as the API doesn't generate a list.</p>
          </div>
        </section>
        <section className="list" ref={this.myDivToFocus}>
          <ToScreen genres={this.state.tastes} movies={this.state.movies}/>
        </section>
      </div>
    );
  }
}

export default App;
