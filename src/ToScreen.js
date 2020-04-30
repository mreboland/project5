import React from "react";
import Popup from "reactjs-popup"

const ToScreen = (props) => {
    // console.log(props)
    const edward = props.genres.concat(props.artistInfo);

    return (
        <div className="wrapper">
            {/* <div className="backgorund"></div> */}
            <ul>
            {
            edward.map( (data, index) => {
                // console.log(data)
                return (
                    <li>
                        <h1>hello</h1>
                        {/* <h2>{data.Name}</h2> */}
                        {/* <p>Genre: {data.Type}</p> */}
                        {/* <a href={data.yUrl} target="_blank">YouTube</a> */}
                        <Popup trigger={<button>About</button>} position="center center">
                            <div className="about">nothing here</div>
                        </Popup>
                    </li>
                )
            })
            }
            </ul>
        </div>
    )
}

export default ToScreen;
