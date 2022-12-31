import axios from "axios";


export const getService = async (route) => {
    const response = axios.get(route)
    return response
}



/*Get Request*/
export const GetService = (route) => {
  return axios.get(route /* , {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        localStorage.getItem('loneWolfToken')
          ? localStorage.getItem('loneWolfToken')
          : ''
      }`,
    },
  } */
  );
}

/*Post Request*/
export const PostService = (Method, Body, URL) => {
  //debugger
  return axios.post(URL + Method, Body/* , {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        localStorage.getItem('loneWolfToken')
          ? localStorage.getItem('loneWolfToken')
          : ''
      }`,
    },
  } */
  );
}


export const getToken = () => {
    try {
        let token =
            localStorage.getItem("tokendummy") !== null &&
                localStorage.getItem("tokendummy") !== undefined
                ? JSON.parse(localStorage.getItem("tokendummy"))
                : "";
        return token
    } catch (error) {
        console.log(error);
    }
}
