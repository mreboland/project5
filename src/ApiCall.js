import axios from "axios";

const GetApiCall = () => {
    axios({
        url: 'http://proxy.hackeryou.com',
        responseType: 'json',
        method: "GET",
        params: {
            reqUrl: 'https://tastedive.com/api/similar',
            proxyHeaders: {
                k: "366898-NA-YOHJFJWV",
                // q: "red hot chili peppers",
                // verbose: 1,
            },
            xmlToJSON: false
        }
    }).then((res) => {
        console.log(res);
        console.log(res.data.Similar.Results);
        this.setState({
            tastes: res.data.Similar.Results
        })
    });
}

export default GetApiCall