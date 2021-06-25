import queryString from "query-string";

const API_URL = "https://api.themoviedb.org/3";

const API_KEY = "753712b78a942c2223e77095da519016";

export const fetchApi = (url, option = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, option)
      .then((response) => {
        if (response.status < 400) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => {
        resolve(data);
      })
      .catch((response) => {
        response.json().then((error) => {
          reject(error);
        });
      });
  });
};

export default class CallApi {
  static get(url, options = {}) {
    const { params = {} } = options;
    const queryStringParams = {
      api_key: API_KEY,
      language: "es",
      ...params,
    };
    return fetchApi(
      `${API_URL}${url}?${queryString.stringify(queryStringParams)}`,
      {
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  }
}
