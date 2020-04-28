import React from "react";

const ToScreen = (props) => {
    return (
        <div className="wrapper">
            <ul>
            {
            props.genres.map( (data, index) => {
                console.log(data)
                return (
                    <li>
                        <h2>{data.Name}</h2>
                        <p>Genre: {data.Type}</p>
                    </li>
                )
            })
            }
            </ul>
        </div>
    )
}

export default ToScreen;