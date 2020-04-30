import axios from "axios";
import Qs from "qs"

const GetTasteCall = (props) => {
    return axios({
        url: 'http://proxy.hackeryou.com',
        responseType: 'json',
        method: "GET",
        paramsSerializer: function (params) {
            return Qs.stringify(params, { arrayFormat: 'brackets' })
        },
        params: {
            reqUrl: 'https://tastedive.com/api/similar',
            params: {
                k: "366898-NA-YOHJFJWV",
                q: props,
                // verbose: 1
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



export default GetTasteCall