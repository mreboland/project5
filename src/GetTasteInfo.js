import axios from "axios";

const GetTasteInfo = (props) => {
    const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${props}`;

    return axios({
        method: 'GET',
        url: url,
        params: {
            format: 'json',
        }
    })
}



export default GetTasteInfo