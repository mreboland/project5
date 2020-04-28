import React from "react";

const ToScreen = (props) => {
    return (
        <div>
            {
            props.genres.map( (data, index) => {
                console.log(data)
                return (
                    <div key={index}>
                        <h2>{data.Name}</h2>
                        <p>Genre: {data.Type}</p>
                    </div>
                )
            })
            }
        </div>
    )
}

export default ToScreen;