import axios from "axios";
import Qs from "qs"

const GetBookInfo = (props) => {

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
    // .then((res) => {
    //     console.log(res);
    //     // console.log(res.data.Similar.Results);
    //     // this.setState({
    //     //     tastes: res.data.Similar.Results
    //     // })
    // });
}

export default GetBookInfo;