import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const Readme = async (text) => {
  const { data } = await axios.post(
    `${SERVER_URL}/api/format`,
    { text }
  );
  return data.cleanedReadme;
};

export default Readme;
