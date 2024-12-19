import axios from "axios";
const apiURL = "https://kenwood-api.vitanur.com/api/";

export const apiConfig = {
  baseUrl: `${apiURL}web/`,
  mainUrl: "https://kenwoodbuilders.com",
  imagePath:
    "https://totalvitanurdev.nyc3.cdn.digitaloceanspaces.com/keenwood/",
};

export const api = axios.create({
  baseURL: apiConfig.baseUrl,
});

export const fileUpload = axios.create({
  baseURL: apiURL,
});

api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      // Retrieve UTM parameters from local storage
      const utmParamsString = window.localStorage.getItem('allUtm') as any;

      if (utmParamsString) {
        const utmParams = JSON.parse(utmParamsString);

        if (!config.headers) {
          config.headers = {} as any;
        }

        Object.keys(utmParams).forEach((key) => {
          const value = utmParams[key];
          if (value) {
            const headerName = `${key.toLowerCase()}`;
            config.headers[headerName] = value;
          }
        });
      }
    }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  },
);
