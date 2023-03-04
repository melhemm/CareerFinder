import axios from "axios";

const getDegrees = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const response = await axios.get(`https://job-finder-35iy.onrender.com/degrees`)
  return response.data
}

export default getDegrees;
