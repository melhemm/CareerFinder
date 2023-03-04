import axios from "axios";

const getJob = async (id) => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const response = await axios.get(`${baseUrl}/jobs/${id}`)
  return response.data
}

export default getJob;
