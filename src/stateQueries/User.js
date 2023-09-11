import axiosInstance from "../axiosInstance";

const UserQuery = {
  getAllPositions: async () => {
    const resp = await axiosInstance.get("/humanResource/positions");

    return resp?.data;
  },
  getPositionById: async (id) => {
    const resp = await axiosInstance.get(`/humanResource/position/${id}`);

    return resp?.data;
  },
  getAllPreviousPositions: async () => {
    const resp = await axiosInstance.get("/humanResource/previousPositions");

    return resp?.data;
  },
}

export default UserQuery;