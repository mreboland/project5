import axios from "axios";
import Qs from "qs"

const GetMovieInfo = (props) => {
    return axios({
        url: 'https://proxy.hackeryou.com',
        responseType: 'json',
        method: "GET",
        paramsSerializer: function (params) {
            return Qs.stringify(params, { arrayFormat: 'brackets' })
        },
        params: {
            reqUrl: "http://www.omdbapi.com/",
            params: {
                apikey: "f6bf7cc4",
                t: props,
            },
            xmlToJSON: false
        }
    })
}

export default GetMovieInfo;