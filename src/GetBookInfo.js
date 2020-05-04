import axios from "axios";
import Qs from "qs"

const GetBookInfo = (props) => {
    // The below returns XML as a result couldn't work with the data in time to populate more book info properly
    return axios({
        url: 'https://proxy.hackeryou.com',
        responseType: 'jsonp',
        method: "GET",
        paramsSerializer: function (params) {
            return Qs.stringify(params, { arrayFormat: 'brackets' })
        },
        params: {
            reqUrl: "https://www.goodreads.com/search/index.xml",
            params: {
                key: "kIJlbpC9jOud3psLARUQQ",
                q: props,
            },
            xmlToJSON: false
        }
    })
}

export default GetBookInfo;