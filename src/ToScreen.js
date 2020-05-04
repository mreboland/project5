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
                    } else {
                        return data.wTeaser
                    }
                }
                // if statement to add youtube link if there is a string.
                const aboutTube = () => {
                    if (data) {
                        if (data.yUrl === null) {
                            return hidden()
                        } else {
                            return data.yUrl
                        }
                    }
                }
                // used to add class name to hide youtube link if no info is there.
                const hidden = () => {
                    return "hidden"
                }
                return (
                    <li className="relative" key={index}>
                            <div className="background">
                            <img src={
                            data.extraInfo 
                            ? data.extraInfo[0].strArtistThumb
                            : "loading"} 
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
