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

  jobApplication: async (formData) => {
    const resp = await axiosInstance.post(
      "/humanResource/jobApplication",
      formData
    );

    return resp?.data;
  },

  getAllCurrentTenders: async () => {
    const resp = await axiosInstance.get("/scm/currentTenders");

    return resp?.data;
  },
  getAllPreviousTenders: async () => {
    const resp = await axiosInstance.get("/scm/previousTenders");

    return resp?.data;
  },
  getAllCancelledTenders: async () => {
    const resp = await axiosInstance.get("/scm/cancelledTenders");

    return resp?.data;
  },
  getTenderById: async (id) => {
    const resp = await axiosInstance.get(`/scm/tender/${id}`);

    return resp?.data;
  },

  // Get Banners

  getAllBanners: async () => {
    const resp = await axiosInstance.get("/cse/banners");

    return resp?.data;
  },
  getAllBoardMembers: async () => {
    const resp = await axiosInstance.get("/cse/boardMembers");

    return resp?.data;
  },
  getAllCommitteeMembers: async () => {
    const resp = await axiosInstance.get("/cse/committeeMembers");

    return resp?.data;
  },
  getAllCommiteeNames: async () => {
    const resp = await axiosInstance.get("/cse/committees");

    return resp?.data;
  },
  getlAllDocumentsTitle: async () => {
    const resp = await axiosInstance.get(`/cse/downloadsTitle`);

    return resp?.data;
  },
  getAllAnnualReports: async () => {
    const resp = await axiosInstance.get("/cse/annualReports");

    return resp?.data;
  },
  getAllResearcheports: async () => {
    const resp = await axiosInstance.get("/cse/researchReports");

    return resp?.data;
  },

  // Get Notices

  getAllGeneralNotices: async () => {
    const resp = await axiosInstance.get("/cse/generalNotices");

    return resp?.data;
  },
  getAllGrantsWindows: async () => {
    const resp = await axiosInstance.get("/cse/grantWindows");

    return resp?.data;
  }
};

export default UserQuery;
