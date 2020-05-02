import React from "react";
import Popup from "reactjs-popup"

const ToScreen = (props) => {
    // console.log(props)
    // const edward = props.genres.concat(props.artistInfo);
    // // console.log(edward)
    // console.log(props.genres.extraInfo);
    
    
    
    
    return (
        <div className="wrapper">
            
            <ul>
            {
            props.genres.map( (data, index) => {
                // console.log(data)
                const aboutInfo = () => {
                    if (data.extraInfo) {
                        // return data.extraInfo[0].strBiographyEN
                        if (data.extraInfo[0].strBiographyEN === "") {
                            return data.wTeaser
                        } else {
                            return data.extraInfo[0].strBiographyEN
                        }
                    } else {
                        return data.wTeaser
                    }
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
                                {/* <a href={data.yUrl} target="_blank">YouTube</a> */}
                                <Popup trigger={<button>About</button>} position="center center">
                                    <div className="about">{
                                        aboutInfo()

                                    // data.extraInfo 
                                    // ? data.extraInfo[0].strBiographyEN
                                    // : "Loading"

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
