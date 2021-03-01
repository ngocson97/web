import axios from 'axios';

export async function UploadFile(endpoint, file, pro_name, additional) {
    var fd = new FormData();
    fd.append('file', file);
    fd.append('property_name', pro_name);
    fd.append('additional', JSON.stringify(additional));
    return await axios.post(`${process.env.REACT_APP_API_URL}/${endpoint}`, fd, {
        headers: {
            'Content-Type': 'application/json',
            'client_id': 'client_id_id_client',
            'client_secret': 'client_secret_secret_client'
        }
    })
}


export default async function callApi(endpoint, method, token = "none", body, params, type_content = 'application/json') {
    axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
    return await axios(
        {
            method: method,
            // url: `${process.env.REACT_APP_API_URL}/${endpoint}`,
            url : `https://elastichire.com/${endpoint}`,
            data: JSON.stringify(body),
            params: params,
            headers: {
                'Content-Type': type_content,
                'client_id': 'client_id_id_client',
                'client_secret': 'client_secret_secret_client'
            }
        })

}
