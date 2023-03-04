import axios from "axios";

const getJobs = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const response = await axios.get(`${baseUrl}/jobs`)
  return response.data
}

const getJob = async (id) => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const response = await axios.get(`${baseUrl}/jobs/${id}`)
  return response.data
}


export default getJobs;
