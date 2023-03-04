import axios from "axios";

const getJobs = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const response = await axios.get(`https://job-finder-35iy.onrender.com/jobs`)
  return response.data
}

export default getJobs;
