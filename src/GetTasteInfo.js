import axios from "axios";

const GetTasteInfo = (props) => {
    const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${props}`;
    // return axios({
    //     url: 'http://proxy.hackeryou.com',
    //     responseType: 'json',
    //     method: "GET",
    //     paramsSerializer: function (params) {
    //         return Qs.stringify(params, { arrayFormat: 'brackets' })
    //     },
    //     params: {
    //         reqUrl: 'https://www.theaudiodb.com/api/v1/json/1/search.php?s=rush',
    //         params: {
    //             // s: "rush",

    //         },
    //         xmlToJSON: false
    //     }
    // })

    return axios({
        method: 'GET',
        url: url,
        params: {
            format: 'json',
        }
    })
//     .then((res) => {
//         console.log(res);
//     })
}



export default GetTasteInfo