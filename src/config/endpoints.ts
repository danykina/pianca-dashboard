const { REACT_APP_API_BASE_URL } = process.env;

const endpoints = {
  api: {
    retrieveDetections: `${REACT_APP_API_BASE_URL}/api/retrieveDetections`,
    retrieveControlUnits: `${REACT_APP_API_BASE_URL}/api/retrieveControlUnits`,
  },
};

export default endpoints;
