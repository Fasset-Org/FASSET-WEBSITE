import axios from "axios";
const REACT_APP_API_URL = `${process.env.REACT_APP_API_URL}/api/dev`;
// const REACT_APP_API_URL = "http://102.37.217.58:5000/api/dev";

const AuthQuery = {
  loginUser: async (formData) => {
    const { data } = await axios.post(
      `${REACT_APP_API_URL}/auth/login`,
      formData
    );
    return await data;
  }
};

export default AuthQuery;
