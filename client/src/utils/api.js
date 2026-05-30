import axios from "axios";

const Readme = async (text) => {
  const { data } = await axios.post("http://localhost:5000/api/format", { text })
  return data.cleanedReadme;
};

export default Readme;