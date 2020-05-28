import React from "react";
import Popup from "reactjs-popup"

const ToScreen = (props) => {
    return (
        <div className="wrapper">            
            <ul>
            {
            props.genres.map( (data, index) => {
                // if statement to check for wording. If no wording, pull data from another api.
                const aboutInfo = () => {
                    if (data.extraInfo) {
                        if (data.extraInfo[0].strBiographyEN === "") {
                            return data.wTeaser
                        } else {
                            return data.extraInfo[0].strBiographyEN
                        }
                    } else if (data.movieInfo) {
                        return data.movieInfo.Plot
                    } else {
                        return data.Name
                    }
                }
                // if statement to add youtube link if there is a string.
                const aboutTube = () => {
                    // checking if any data is avail
                    if (data) {
                        if (data.yUrl === null) {
                            return hidden()
                            // if movieInfo is there (true) return something. This code is redundant for the time being, left in case API return normal functions lost
                        } else if (data.movieInfo) {
                            return hidden()
                            // below needs to return youtube link if api functionality returns
                        } else {
                            return hidden()
                        }
                    }
                }
                // used to add class name to hide youtube link if no info is there.
                const hidden = () => {
                    return "hidden"
                }

                const imgAdd = () => {
                    if (data) {
                        if (data.extraInfo) {
                            return data.extraInfo[0].strArtistThumb
                        } else if (data.movieInfo) {
                            return data.movieInfo.Poster
                        }
                    } else {
                        return "loading"
                    }
                }
                return (
                    <li className="relative" key={index}>
                            <div className="background">
                            <img src={
                                imgAdd()
                            } 
                            alt={data.Name}/></div>
                            <div className="absolute">
                                <h2>{data.Name}</h2>
                                <p>Genre: {data.Type}</p>
                                <a href={aboutTube()} target="_blank" className={aboutTube()} rel="noopener noreferrer">YouTube</a>
                                <Popup trigger={<button>About</button>} position="center center">
                                    <div className="about">{
                                        aboutInfo()
                                    }</div>
                                </Popup>
                            </div>
                    </li>
                )
            })
            }
            </ul>
        </div>
    )
}

export default ToScreen;
