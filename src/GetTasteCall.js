import axios from "axios";
import Qs from "qs"

const GetTasteCall = (props) => {
    return axios({
        url: 'https://proxy.hackeryou.com',
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
                verbose: 1,
                limit: 18,
            },
            xmlToJSON: false
        }
    })
}



export default GetTasteCall